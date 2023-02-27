import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  birthday: Yup.date()
    // .min('1930-01-01', 'Date is too early')
    .typeError('please enter a valid date')
    .nullable(),
});
