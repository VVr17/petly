import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button, NavContainer, Navigation, Navlink } from './FindPetFilter.styled';

const FindPetFilter = () => {
  // const onSubmitHandler = e => {
  //   e.preventDefault();
  //   console.log('search');
  // };
  return (
    <NavContainer>
      <Navigation>
        <div>
          <Navlink>sell</Navlink>
          <Navlink>lost/found</Navlink>
          <Navlink>in good hands</Navlink>
        </div>
        <div>
          <Navlink>favorite ads</Navlink>
          <Navlink>my ads</Navlink>
        </div>
      </Navigation>
      <button>Add pet</button>
    </NavContainer>
  );
};
export default FindPetFilter;
