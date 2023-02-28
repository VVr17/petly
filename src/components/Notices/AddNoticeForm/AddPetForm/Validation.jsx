import * as Yup from 'yup';

// Values for Formik

export const initialValues = {
  category: 'sell',
  title: '',
  name: '',
  birthDate: '',
  breed: '',
  sex: 'male',
  location: '',
  comments: '',
  price: '',
  petImage: null,
};

// Yup validation

export const validationSchemaStepOne = Yup.object().shape({
  category: Yup.string().required(),
  title: Yup.string()
    .required('Title is required')
    .min(2, 'Title should be at least 2 characters long')
    .max(48, 'Title should be up to 48 characters long'),
  name: Yup.string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
      'Only letters can be accepted'
    )
    .min(2, 'Name should be at least 2 characters long')
    .max(16, 'Name should be up to 16 characters long'),
  birthDate: Yup.date().required('Birth date is required'),
  breed: Yup.string()
    .required('Breed is required')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
      'Only letters can be accepted'
    )
    .min(2, 'Breed should be at least 2 characters long')
    .max(24, 'Breed should be up to 24 characters long'),
});

export const validationSchemaStepTwo = Yup.object().shape({
  sex: Yup.string().required(),
  location: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇ]+(?:[-\s]?[a-zA-Zа-яА-ЯіІїЇ]+)*,\s*[a-zA-Zа-яА-ЯіІїЇ'’\s-]+$/,
      'Should be at least two words separated by coma'
    )
    .required('City is required'),
  price: Yup.number()
    .typeError('Price must be a number')
    .min(1, 'Price can not be 0')
    .when('category', (category, schema) => {
      if (category === 'sell') {
        return schema.required().typeError('Price is required');
      }
      return schema;
    }),

  petImage: Yup.mixed()
    .test('fileFormat', 'Unsupported file format', value => {
      if (value) {
        const supportedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
        return supportedFormats.includes(value.type);
      }
      return false;
    })
    .required('Please add the picture'),
  comments: Yup.string()
    .required('Comment is required')
    .min(8, 'Title should be at least 8 characters long')
    .max(200, 'Title should be up to 200 characters long'),
});
