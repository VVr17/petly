import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Male from 'assets/images/desktop/male.svg';
import Female from 'assets/images/desktop/female.svg';
import {
  RadioTitle,
  RadioContainer,
  RadioLabel,
  RadioButton,
  RadioItem,
} from '../AddPetForm.styled';
import { StyledSpan } from 'components/Ui-Kit/Input/Input.styled';

const SexField = ({ value }) => {
  return (
    <>
      <RadioTitle>
        <FormattedMessage id="sex" />
        <StyledSpan>*</StyledSpan>
      </RadioTitle>
      <RadioContainer>
        <li>
          <RadioLabel isSelected={value === 'male'}>
            <RadioButton
              type="radio"
              name="sex"
              value="male"
              checked={value === 'male'}
            />
            <RadioItem>
              <img src={Male} alt="Male" />
            </RadioItem>
            <FormattedMessage id="male" />
          </RadioLabel>
        </li>

        <li>
          <RadioLabel isSelected={value === 'female'}>
            <RadioButton
              type="radio"
              name="sex"
              value="female"
              checked={value === 'female'}
            />
            <RadioItem>
              <img src={Female} alt="Female" width="60px" height="60px" />
            </RadioItem>
            <FormattedMessage id="female" />
          </RadioLabel>
        </li>
      </RadioContainer>
    </>
  );
};

SexField.propTypes = {
  value: PropTypes.string,
};

export default SexField;
