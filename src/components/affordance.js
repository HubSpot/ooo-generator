import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Icon from '@material-ui/core/Icon';
import waypoint from './hoc/waypoint';

const bounce = keyframes`
  0%, 100% {
    transform: translate3d(0px, 0px, 0px);
  }

  50% {
    transform: translate3d(0px, 10px, 0px);
  }
`;

const BouncingIcon = styled(Icon)`
  && {
    animation: ${bounce} 2s ease-in-out infinite;
    bottom: 0;
    font-size: 80px;
    left: 50%;
    margin-left: -40px;
    position: fixed;
  }
`;

const Affordance = ({ name }) => <BouncingIcon>{name}</BouncingIcon>;

Affordance.propTypes = {
  name: PropTypes.string.isRequired,
};

export default waypoint(Affordance);
