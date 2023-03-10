import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(
      /^\+380\d{9}$/,
      'Number should begin with +380 and contain 13 digits'
    )
    .min(13, 'Phone number should be 13 digits')
    .max(13, 'Phone number should be 13 digits'),
});
