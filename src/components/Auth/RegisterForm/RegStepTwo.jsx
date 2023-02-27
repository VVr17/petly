import React, { useState, useEffect } from 'react';
import InputField from 'components/Ui-Kit/Input';
import PropTypes from 'prop-types';
import cities from 'assets/files/uaCities.json';
import { List, ListItem } from './RegStepTwo.styled';

const RegStepTwo = ({ value, setFieldValue }) => {
  const [filteredCities, setFilteredCities] = useState([]);
  useEffect(() => {
    const inputValue = value || '';
    if (inputValue) {
      const filtered = cities
        .filter(city => city.city.toLowerCase().startsWith(value.toLowerCase()))
        .map(({ city, admin_name }) => `${city}, ${admin_name}`);

      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  }, [value]);

  const handleCityClick = city => {
    setFieldValue('city', city);
    setFilteredCities([]);
  };

  const onClickHandle = e => {
    console.log(e.target.innerText);
  };
  return (
    <>
      <InputField name="name" type="name" placeholder="Name" />

      <InputField name="city" type="city" placeholder="City, Region" />
      {filteredCities.length > 0 && (
        <List>
          {filteredCities.map((city, index) => (
            <ListItem onClick={() => handleCityClick(city)} key={index}>
              {city}
            </ListItem>
          ))}
        </List>
      )}

      <InputField name="phone" type="phone" placeholder="Phone +380123456789" />
    </>
  );
};

RegStepTwo.propTypes = {
  value: PropTypes.string,
  setFieldValue: PropTypes.func,
};

export default RegStepTwo;
