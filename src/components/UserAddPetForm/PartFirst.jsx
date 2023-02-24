import React from "react";
import InputField from "components/Ui-Kit/Input/Input";
import MyDataPicker from "components/AddNoticeForm/AddPetForm/StepOne/DatePicker";
import { Label, DateBox, ErrorData } from "./UserAddPetForm.styled";
import { StyledSpan } from "components/Ui-Kit/Input/Input.styled";

const PartFirst = () => {
    return (
        <>
            <InputField label="Name pet" id="name" type="text" name="name" placeholder="Type pet name" span="*"/>
            <DateBox>
                <Label>
                    Date of birth
                    <StyledSpan>*</StyledSpan>
                </Label>
                <MyDataPicker
                    name="birthDate"
                    label="Date of birth*"
                    placeholder="Type date of birth"
                />
                <ErrorData name="birthDate" component="div" />
            </DateBox>
            <InputField label="Breed" id="breed" type="text" name="breed" placeholder="Type breed" span="*"/>
        </>
    );
};

export default PartFirst;
