import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  city: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(?:-[a-zA-Zа-яА-Я]+)*,\s*[a-zA-Zа-яА-Я\s]+$/,
      'Should be at least 2 words separated by comma'
    )
    .min(3, 'City should have at least 3 characters')
    .required('City is required'),
});
