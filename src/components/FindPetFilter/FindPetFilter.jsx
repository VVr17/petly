import React from 'react';

import { Navigation, Navlink } from './FindPetFilter.styled';

const FindPetFilter = () => {
  return (
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
  );
};
export default FindPetFilter;
