import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import InputField from 'components/Ui-Kit/Input';
import cities from 'assets/files/uaCities.json';
import { List, ListItem } from './Location.styled';

const LocationField = ({ valueLocation, setFieldValue }) => {
  const [filteredCities, setFilteredCities] = useState([]);
  const [blurTimeout, setBlurTimeout] = useState(null);
  const { formatMessage } = useIntl();


  useEffect(() => {
    const inputValue = valueLocation;
    if (inputValue) {
      const filtered = cities
        .filter(city =>
          city.city.toLowerCase().startsWith(valueLocation.toLowerCase())
        )
        .map(({ city, admin_name }) => `${city}, ${admin_name}`);

      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  }, [valueLocation]);

  // Handler for when the input field loses focus
  const handleInputBlur = () => {
      setBlurTimeout(setTimeout(() => {
      setFilteredCities([]);
    }, 100));
  };

  // Handler for when the input field gains focus
  const handleInputFocus = () => {
    clearTimeout(blurTimeout);
  };

  const handleCityClick = city => {
    setFieldValue('location', city);
    setFilteredCities([]);
  };

  return (
    <>
      <InputField
        name="location"
        type="text"
        placeholder={formatMessage({ id: 'typeLocation' })}
        label={formatMessage({ id: 'location' })}
        span="*"
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
    </>
  );
};

LocationField.propTypes = {
  valueLocation: PropTypes.string,
  setFieldValue: PropTypes.func,
};

export default LocationField;
