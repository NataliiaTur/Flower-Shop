import Joi from 'joi';

export const createFlowerSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.base': 'Name must be a string',
    'ant.required': 'Name is required',
  }),

  composition: Joi.array()
    .items(
      Joi.object({
        flower: Joi.string().required(),
        quantity: Joi.number().integer().min(1).required(),
      }),
    )
    .optional(),

  price: Joi.number().positive().required().messages({
    'number.base': 'Price must be a number',
    'number.positive': 'Price must be positive',
    'any.required': 'Price is required',
  }),

  rating: Joi.number().min(1).max(5).optional().default(0).messages({
    'number.min': 'Rating must be at least 0',
    'number.max': 'Rating must be at most 5',
  }),

  colors: Joi.array().items(Joi.string().optional()),

  description: Joi.string().optional(),

  images: Joi.array()
    .items(
      Joi.object({
        url: Joi.string().uri().required().messages({
          'string.uri': 'Image URL must be a valid URI',
          'any.required': 'Image URL is required',
        }),
        alt: Joi.string().optional(),
        isMain: Joi.boolean().optional().default(false),
      }),
    )
    .optional(),
});
