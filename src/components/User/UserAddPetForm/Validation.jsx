import * as Yup from 'yup';

// Values for Formik

export const initialValues = {
  name: '',
  birthDate: '',
  breed: '',
  petImage: '',
  comments: '',
};

// Yup validation

export const validationSchemaPartOne = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
      'Only letters can be accepted'
    )
    .min(2, 'Name should be at least 2 characters long')
    .max(16, 'Name should be up to 16 characters long'),
  birthDate: Yup.mixed().required('Birth date is required'),
  breed: Yup.string()
    .required('Breed is required')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
      'Only letters can be accepted'
    )
    .min(2, 'Breed should be at least 2 characters long')
    .max(24, 'Breed should be up to 24 characters long'),
});

export const validationSchemaPartTwo = Yup.object().shape({
  petImage: Yup.mixed().required('Please add the picture'),
  comments: Yup.string()
    .required('Comments is required')
    .min(8, 'Title should be at least 8 characters long')
    .max(200, 'Title should be up to 200 characters long'),
});
