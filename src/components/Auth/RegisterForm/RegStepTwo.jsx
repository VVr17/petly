import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import InputField from 'components/Ui-Kit/Input';
import cities from 'assets/files/uaCities.json';
import { List, ListItem } from './RegStepTwo.styled';

const RegStepTwo = ({ value, setFieldValue }) => {
  const { formatMessage } = useIntl();
  const [filteredCities, setFilteredCities] = useState([]);
  const [blurTimeout, setBlurTimeout] = useState(null);

  // Update the list of filtered cities whenever the value of the input field changes
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

  // Handler for when the input field loses focus
  const handleInputBlur = () => {
    setBlurTimeout(
      setTimeout(() => {
        setFilteredCities([]);
      }, 100)
    );
  };

  // Handler for when the input field gains focus
  const handleInputFocus = () => {
    clearTimeout(blurTimeout);
  };

  // Handler for when a city is selected from the filtered list
  const handleCityClick = city => {
    setFieldValue('city', city);
    setFilteredCities([]);
  };

  return (
    <>
      <InputField
        name="name"
        type="name"
        placeholder={formatMessage({ id: 'name' })}
      />

      <InputField
        name="city"
        type="city"
        placeholder={formatMessage({ id: 'city' })}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
      />
      {filteredCities.length > 0 && (
        <List>
          {filteredCities.map((city, index) => (
            <ListItem onClick={() => handleCityClick(city)} key={index}>
              {city}
            </ListItem>
          ))}
        </List>
      )}

      <InputField
        name="phone"
        type="phone"
        placeholder={formatMessage({ id: 'phoneInput' })}
      />
    </>
  );
};

RegStepTwo.propTypes = {
  value: PropTypes.string,
  setFieldValue: PropTypes.func,
};

export default RegStepTwo;
