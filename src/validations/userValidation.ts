import Joi from "joi";

const messages = {
  required: "This field is required",
  invalidEmail: "Please provide a valid email",
  invalidPassword: "Password must contain only alphanumeric characters",
  passwordMin: "Password should have at least 6 characters",
  passwordMax: "Password cannot exceed 10 characters",
  invalidMobile: "Mobile Number must be exactly 10 digits",
};

const userAuthJoi = Joi.object({
  userName: Joi.string().required().messages({
    "string.empty": "Username is required",
    "any.required": messages.required,
  }),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } })
    .lowercase()
    .trim()
    .required()
    .messages({
      "string.email": messages.invalidEmail,
      "any.required": messages.required,
    }),

  mobileNo: Joi.string()
    .length(10) 
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.empty": messages.required,
      "string.length": messages.invalidMobile,
      "string.pattern.base": "Mobile Number should contain only digits",
      "any.required": messages.required,
    }),

  status: Joi.string()
    .valid("student", "employee") 
    .required()
    .messages({
      "any.only": "Status must be either 'student' or 'employee'",
      "any.required": messages.required,
    }),

  password: Joi.string()
    .min(6)
    .max(10)
    .pattern(/^[a-zA-Z0-9]{6,10}$/)
    .required()
    .messages({
      "string.pattern.base": messages.invalidPassword,
      "string.min": messages.passwordMin,
      "string.max": messages.passwordMax,
      "any.required": messages.required,
    }),
}).options({ allowUnknown: true });

export default userAuthJoi;
