import React from "react";
import PropTypes from 'prop-types';

const PartSecond = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
};

export default PartSecond;

PartSecond.propTypes = {
    children: PropTypes.node.isRequired,
};
