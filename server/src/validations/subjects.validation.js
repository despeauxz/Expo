import Joi from 'joi';
import validateSchema from '@helpers/validateSchema.helper';

const validateCreateSubject = (user) => {
  const schema = {
    email: Joi.string().trim().lowercase().min(5)
      .max(255)
      .email()
      .required(),
    password: Joi.string().trim().min(5).max(255)
      .required()
  };

  return validateSchema(user, schema);
};

export default validateCreateSubject;
