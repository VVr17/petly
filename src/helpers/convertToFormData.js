import { convertDateToString } from './date';

export const convertToFormData = ({ type, values, categoryName = '' }) => {
  // Date converting to string
  const dateMDY = convertDateToString(values.birthDate);

  // create formData
  const data = new FormData();

  data.append('name', values.name);
  data.append('birthDate', dateMDY);
  data.append('breed', values.breed);
  data.append('petImage', values.petImage);
  data.append('comments', values.comments);

  if (type === 'noticeForm') {
    data.append('title', values.title);
    data.append('sex', values.sex);
    if (categoryName === 'sell') {
      data.append('price', values.price);
    }
    data.append('location', values.location);
  }

  return data;
};
