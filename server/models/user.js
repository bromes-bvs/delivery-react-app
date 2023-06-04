const { Schema, model } = require('mongoose');

const Joi = require('joi');

// const { mongooseHandleError } = require('../helpers');

const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    match: emailRegex,
    required: [true, 'Email is required'],
    unique: true,
  },

  phone: {
    type: Number,
    required: [true, 'Phone is required'],
    default: '',
  },
  adress: {
    type: String,
    default: null,
  },
});

// userSchema.post('save', mongooseHandleError);

// const registerSchema = Joi.object({
//   name: Joi.string().min(1).max(16).required(),
//   email: Joi.string().pattern(emailRegex).required().messages({
//     'string.base': `"email" should be a type of 'string'`,
//     'string.pattern.base': `wrong format of "email"`,
//     'any.required': `"email" is a required field`,
//   }),
//   password: Joi.string().min(6).max(100).required(),
// });

// const loginSchema = Joi.object({
//   email: Joi.string().pattern(emailRegex).required(),
//   password: Joi.string().min(6).required(),
// });

// const resetSchema = Joi.object({
//   email: Joi.string().pattern(emailRegex).required(),
//   resetEmailToken: Joi.string(),
// });

// const setNewPasswordSchema = Joi.object({
//   email: Joi.string().pattern(emailRegex).required(),
//   password: Joi.string().min(6),
//   resetPasswordToken: Joi.string(),
// });

// const emailSchema = Joi.object({
//   email: Joi.string().pattern(emailRegex).required(),
// });

// const userNameSchema = Joi.object({
//   name: Joi.string().min(1).max(16).required(),
// });

// const refreshSchema = Joi.object({
//   refreshToken: Joi.string().required(),
// });

// const product = Joi.object({
//   productId: Joi.string().length(24).required(),
//   measure: Joi.string().max(30).required(),
// });

// const listItemId = Joi.object({
//   listItemId: Joi.string().length(24).required(),
// });

// const schemas = {
//   registerSchema,
//   loginSchema,
//   emailSchema,
//   userNameSchema,
//   refreshSchema,
//   product,
//   listItemId,
//   resetSchema,
//   setNewPasswordSchema,
// };

const User = model('user', userSchema);

module.exports = {
  User,
};
