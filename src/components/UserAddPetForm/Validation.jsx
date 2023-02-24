import * as Yup from 'yup';

// Values for Formik

export const initialValues = {
  name: '',
  birthDate: '',
  breed: '',
  imageFile: '',
  comments: '',
};

// Yup validation

export const validationSchemaPartOne = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name should be at least 2 characters long')
    .max(16, 'Name should be up to 48 characters long'),
  birthDate: Yup.mixed().required('Birth date is required'),
  breed: Yup.string()
    .required('Breed is required')
    .min(2, 'Breed should be at least 2 characters long')
    .max(16, 'Breed should be up to 48 characters long'),
});

export const validationSchemaPartTwo = Yup.object().shape({
  imageFile: Yup.mixed().required('Please add the picture'),
  comments: Yup.string()
    .required('Comment is required')
    .min(8, 'Title should be at least 8 characters long')
    .max(200, 'Title should be up to 120 characters long'),
});
