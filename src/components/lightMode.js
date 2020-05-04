import React, { Component } from 'react';
import { SunLogo, MoonLogo } from '@components/icons'
import styled from 'styled-components';
import { theme, media } from '@styles';
const { colors } = theme;

const StyledContainer = styled.div`
  width: 50px;
  position: fixed;
  bottom: 50px;
  right: 40px;
  color: ${colors.lightSlate};
  ${media.desktop`right: 25px;`};
  ${media.tablet`display: none;`};
`;
const StyledIcon = styled.a``;

class LightMode extends Component{
  constructor(props) {
      super(props);
      this.state = { isLight: false };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
      this.setState(prevState => ({ isLight: !prevState.isLight }));
  }

  render(){
    return (
      <div onClick={this.handleClick}>
        <StyledContainer>
          <StyledIcon>
            {this.state.isLight ? <SunLogo/> : <MoonLogo/>}
          </StyledIcon>
        </StyledContainer>
      </div>
    );
  };
}

export default LightMode;
