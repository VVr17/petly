import React, { useState, useEffect } from 'react';
import InputField from 'components/Ui-Kit/Input';
import { List, ListItem } from './Location.styled';
import PropTypes from 'prop-types';
import cities from 'assets/files/uaCities.json';
import { useIntl } from 'react-intl';

const LocationField = ({ valueLocation, setFieldValue }) => {
  const [filteredCities, setFilteredCities] = useState([]);
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
