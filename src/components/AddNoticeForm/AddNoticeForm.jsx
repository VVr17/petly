import React from 'react';
import {
  FormTitle,
  Text,
  ButtonFilterList,
  ButtonFilterItem,
} from './AddNoticeForm.styled';
import Button from 'components/Ui-Kit/Button';

const AddNoticeFormFirst = () => {
  const handleClick = () => {
    console.log('click');
  };
  return (
    <>
      <FormTitle>Add Pet</FormTitle>
      <Text>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </Text>
      <ButtonFilterList>
        <ButtonFilterItem>
          <Button name="transparent" onClick={handleClick}>
            lost/found
          </Button>
        </ButtonFilterItem>
        <ButtonFilterItem>
          <Button name="transparent" onClick={handleClick}>
            in good hands
          </Button>
        </ButtonFilterItem>
        <ButtonFilterItem>
          <Button name="transparent" onClick={handleClick}>
            sell
          </Button>
        </ButtonFilterItem>
      </ButtonFilterList>
    </>
  );
};

// const AddPetFormSecond = () => {};

export default AddNoticeFormFirst;
