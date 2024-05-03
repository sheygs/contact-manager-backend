import Joi from 'joi';

const uuidRegex =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

export const signInSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

export const authSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

export const contactSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  phone_number: Joi.string().min(11).required(),
});

export const contactIDSchema = Joi.object({
  contact_id: Joi.string().required().regex(uuidRegex).message('contact_id invalid'),
});

export const updateContactSchema = Joi.object({
  first_name: Joi.string().optional(),
  last_name: Joi.string().optional(),
  phone_number: Joi.string().min(11).optional(),
});
