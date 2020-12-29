import Joi from 'joi';

const schema = Joi.object().keys(
  {
    bookName: Joi.string().required(),
    author: Joi.string().required(),
    price: Joi.number().required(),
    date: Joi.date(),
  },
);

const validate = (data) => {
  const result = schema.validate(data);
  result.value = data;
  return result;
};

export default validate;
