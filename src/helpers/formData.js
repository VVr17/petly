export const createFormData = data => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    if (key === 'petImage') {
      formData.append('petImage', data[key], data[key].name);
    } else {
      formData.append(key, data[key]);
    }
  });
  return formData;
};
