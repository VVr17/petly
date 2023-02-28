import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useUpdateUserMutation } from 'redux/api/userApi';
import { validationSchema } from './validation';
import { FieldWrapper } from '../UserDataItem.styled';
import UserUpdateButton from 'components/Ui-Kit/UserupdateButton/UserUpdateButton';
import UserInput from 'components/Ui-Kit/UserInput';
import Loader from 'components/Loader';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectUserState } from 'redux/user/userSelectors';
import { toast } from 'react-toastify';
import cities from 'assets/files/uaCities.json';
import { List, ListItem } from './UserCity.styled';

const UserCity = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const user = useSelector(selectUserState);
  const initialValues = { city: user?.city || '' };
  const [filteredCities, setFilteredCities] = useState([]);

  const handleClick = (values, actions) => {
    if (isDisabled) {
      setIsDisabled(false);
      return;
    }

    if (!values.city) return;
    setIsDisabled(true);
  };

  const handleSubmit = async (values, actions) => {
    if (!isDisabled) {
      return;
    }

    if (values.city === user.city) return;

    // create formData
    const data = new FormData();
    data.append('city', values.city);
    const { data: response } = await updateUser(data);
    if (response.code === 200) toast.info('City has been successfully updated');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, errors, setFieldValue }) => {
        useEffect(() => {
          const inputValue = values.city || '';
          if (inputValue) {
            const filtered = cities
              .filter((city) => city.city.toLowerCase().startsWith(inputValue.toLowerCase()))
              .map(({ city, admin_name }) => `${city}, ${admin_name}`);
            setFilteredCities(filtered);
          } else {
            setFilteredCities([]);
          }
        }, [values.city]);

        const handleCityClick = (city, setFieldValue) => {
          setFieldValue('city', city);
          setFilteredCities([]);
        };

        return (
          <Form>
            <FieldWrapper>
              <UserInput
                label="City"
                name="city"
                type="city"
                disabled={isDisabled}
                placeholder={user.city || ''}
              />
              {filteredCities.length > 0 && (
                <List>
                  {filteredCities.map((city, index) => (
                    <ListItem onClick={() => handleCityClick(city, setFieldValue)} key={index}>
                      {city}
                    </ListItem>
                  ))}
                </List>
              )}
              <UserUpdateButton
                type="submit"
                isdisabled={isDisabled}
                onClick={() => {
                  if (!values.city) {
                    values.city = user.city;
                    handleClick(values);
                  }
                  if (errors.city) return;
                  handleClick(values);
                }}
              />
              {isLoading && <Loader />}
            </FieldWrapper>
          </Form>
        );
      }}
    </Formik>
  );
};

UserCity.propTypes = {
  user: PropTypes.object,
};

export default UserCity;

