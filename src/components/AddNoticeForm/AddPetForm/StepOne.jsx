import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import InputField from 'components/Ui-Kit/Input';
import {
  FormTitle,
  Text,
  ButtonFilterList,
  ButtonFilterItem,
  RadioButton,
  DatePickerInput,
  Asterisk,
} from './AddPetForm.styled';
import Button from 'components/Ui-Kit/Button';
import MyDatePicker from './DatePicker';
import { StyledSpan } from 'components/Ui-Kit/Input/Input.styled';

const StepOne = () => {
  // const Example = () => {
  //   const [startDate, setStartDate] = useState(new Date());
  //   return (
  //     <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  //   );
  // };
  return (
    <>
      <Text>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </Text>
      <ButtonFilterList>
        <ButtonFilterItem>
          <Button name="transparent">lost/found</Button>
        </ButtonFilterItem>
        <ButtonFilterItem>
          <Button name="transparent">in good hands</Button>
        </ButtonFilterItem>
        <ButtonFilterItem>
          <Button name="transparent">sell</Button>
        </ButtonFilterItem>
      </ButtonFilterList>
      <InputField
        name="title"
        type="text"
        placeholder="Type name"
        label="Title of Ads"
        span="*"
      />
      <InputField
        name="name"
        type="text"
        placeholder="Type name pet"
        label="Name pet"
        span="*"
      />
      <label>
        Date of birth<StyledSpan>*</StyledSpan>
      </label>
      <MyDatePicker
        name="birthDate"
        label="Date of birth*"
        placeholder="Type date of birth"
      />
      <InputField
        name="breed"
        type="text"
        placeholder="Type breed"
        label="Breed"
        span="*"
      />
    </>
  );
};

export default StepOne;
