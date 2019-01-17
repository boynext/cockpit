import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Box = styled.section`
  background: #ffffff;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 95%;
  margin: 10px auto 0;
  padding: 14px 5%;
`;
const NavTitle = styled.h2`
  font-size: 14px;
  color: #666;
  font-weight: bold;
  text-align: center;
  margin-bottom: 14px;
`;

class BlockArea extends PureComponent {
  render() {
    const { defaultStyles, className, title, children } = this.props;
    return (
      <Box defaultStyles={defaultStyles} className={className}>
        {title && <NavTitle className={"block-area-title"}>{title}</NavTitle>}
        {children}
      </Box>
    );
  }
}

BlockArea.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string,
  title: PropTypes.node
};

export default BlockArea;
