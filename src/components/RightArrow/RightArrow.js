import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Arrow = styled.i`
  display: inline-block;
  width: 14px;
  height: 14px;
  background: ${p => p.shadow && "rgba(0, 0, 0, 0.2)"};
  border-radius: 50%;
  position: relative;
  &::after {
    content: "";
    display: inline-block;
    width: ${p => (p.shadow ? "9px" : "12px")};
    height: ${p => (p.shadow ? "9px" : "12px")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-60%, -50%) rotate(-45deg) scale(0.5);
    border-right: 2px solid ${p => (p.shadow ? "#fff" : "#ccc")};
    border-bottom: 2px solid ${p => (p.shadow ? "#fff" : "#ccc")};
  }
`;

class RightArrow extends PureComponent {
  render() {
    const { shadow = true, defaultStyles, className, onClick } = this.props;
    return (
      <Arrow
        shadow={shadow}
        defaultStyles={defaultStyles}
        className={className}
        onClick={onClick}
      />
    );
  }
}

RightArrow.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string,
  shadow: PropTypes.bool,
  onClick: PropTypes.func
};

export default RightArrow;
