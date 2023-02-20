import React from "react";
import { useState } from 'react';
import { Container, Box, Title, Text, Button, List, iconStyle } from "./UserPetsList.styled";
import { VscAdd } from "react-icons/vsc";

import { UserPetsListItem } from "components/UserPetsListItem/UserPetsListItem";

export const UserPetsList = () => {
    const [pets, setPets] = useState([
        { id: 1, name: "Bob", dateOfBirth: "01.01.2020", breed: "British", comments: "He like to play and sleep everyday! Hello Bob, you are so fast, I can not catch you!" },
        { id: 2, name: "Bob", dateOfBirth: "01.01.2020", breed: "British", comments: "He like to play and sleep everyday!" },
        { id: 3, name: "Bob", dateOfBirth: "01.01.2020", breed: "British", comments: "He like to play and sleep everyday!" }]);
    
    return (
        <Container>
            <Box>
                <Title>My pets:</Title>
                <Text>Add pet:</Text>
                <Button><VscAdd style={iconStyle} /></Button>
            </Box>
            {pets &&
                <List>
                    {pets.map((pet) => {
                        return <UserPetsListItem key={pet.id} pet={pet} />;
                    })}
                </List>
            }
        </Container>
    );
};