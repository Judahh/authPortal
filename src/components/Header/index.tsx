import React from 'react';
import { HeaderWrapper } from './styles';
import Drawer from './Drawer/index';
import Nav from './Nav/index';
import Scroll from '../../components/Scroll';

const Header = (props) => {
  return (
    <HeaderWrapper menu={props.menu}>
      <Nav
        theme={props.theme}
        handleLanguage={props.handleLanguage}
        menu={props.menu}
      />

      <Drawer
        theme={props.theme}
        handleLanguage={props.handleLanguage}
        menu={props.menu}
      />

      <Scroll />
    </HeaderWrapper>
  );
};
export default Header;
