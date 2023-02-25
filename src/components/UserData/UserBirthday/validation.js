import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  birthday: Yup.date(),
});
