import React from "react";
import { Label, FieldStyled, InputFile, LabelStyled, Button, Upload, iconStyle, ControlBox } from "./UserAddPetForm.styled";
import PropTypes from 'prop-types';
import { VscAdd } from 'react-icons/vsc';

const PartSecond = ({ handleBack }) => {

    const handleImg = () => {
    };

    return (
        <>
            <LabelStyled htmlFor="photoURL">Add photo and some comments</LabelStyled>
            <InputFile hidden id="photoURL" name="photoURL" type="file" />
            <Upload type="button" onClick={handleImg}>
               <VscAdd style={iconStyle} />
            </Upload>
            <Label htmlFor="comments">Comments</Label>
            <FieldStyled id="comments" name="comments" as="textarea" placeholder="Type comments" style={{minHeight: "100px", borderRadius: "20px"}} />
            <ControlBox>
                <Button type="submit">Done</Button>
                <Button type="button" onClick={handleBack}>Back</Button>
            </ControlBox>
        </>
    );
};

export default PartSecond;

PartSecond.propTypes = {
    handleBack: PropTypes.func.isRequired,
};
