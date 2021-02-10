// file deepcode ignore no-any: any needed
import React, { useContext, useState } from 'react';
import { DrawerWrapper, DrawerMenu, ItemHolder, Item, Toggle } from './styles';
import { Text, FixedLink } from '../../../components/Text';
import { NavHolder } from '../../../components/Header/Nav/styles';
import LanguageContext from '../../../language/context';
import { default as map } from '../../../pages/map.json';
import { default as lightTheme } from '../../../styles/themes/light.json';
import { LogoHolder, Logo } from '../../../components/Layout/styles';

const Drawer = (props) => {
  const { nav, language } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const navItems: Array<{ href: any; content: any }> = [];

  for (const key in map.sections) {
    if (map.sections.hasOwnProperty(key)) {
      const element = map.sections[key];
      navItems.push({
        href: element,
        content: key !== 'home' ? nav[key] : '‏‏‎ ‎',
      });
    }
  }

  const handleOpen = () => {
    if (open) {
      setOpen(false);
      setCollapsed(false);
    } else {
      setOpen(true);
    }
  };

  const handleCollapsed = () => {
    if (open) {
      setCollapsed(true);
      setOpen(false);
    }
  };

  return (
    <DrawerWrapper>
      <NavHolder>
        <LogoHolder>
          <FixedLink href="#home" onClick={handleCollapsed}>
            <Logo
              src={
                props.theme !== lightTheme || props.menu === 2
                  ? '/img/JLInvert.svg'
                  : '/img/JL.svg'
              }
              alt="JL"
            />
          </FixedLink>
        </LogoHolder>

        <Toggle className={open ? 'active' : ''} onClick={handleOpen}>
          <span></span>
        </Toggle>
      </NavHolder>

      <DrawerMenu
        className={open ? 'open' : !open && collapsed ? 'closed' : ''}
      >
        <Item>
          {navItems.map((item, index) => {
            return (
              <ItemHolder
                key={index}
                href={item.href}
                onClick={handleCollapsed}
                menu={props.menu}
              >
                <Text>{item.content}</Text>
              </ItemHolder>
            );
          })}

          <ItemHolder onClick={props.handleLanguage}>
            <Text>{language}</Text>
          </ItemHolder>
        </Item>
      </DrawerMenu>
    </DrawerWrapper>
  );
};

export default Drawer;
