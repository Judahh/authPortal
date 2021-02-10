// file deepcode ignore no-any: any needed
import React, { useContext } from 'react';
import LanguageContext from '../../../language/context';
import { NavWrapper, NavHolder, NavList } from './styles';
import { Button } from '../../../components/Form';
import { FixedLink } from '../../../components/Text';
import { LogoHolder, Logo } from '../../../components/Layout/styles';
import { default as map } from '../../../pages/map.json';
import { default as lightTheme } from '../../../styles/themes/light.json';

const Nav = (props) => {
  const { nav, languageAcronym } = useContext(LanguageContext);
  const navItems: Array<{ href: any; content: any }> = [];

  for (const key in map.sections) {
    if (map.sections.hasOwnProperty(key) && key !== 'home') {
      const element = map.sections[key];
      navItems.push({
        href: element,
        content: nav[key],
      });
    }
  }

  return (
    <NavWrapper menu={props.menu}>
      <NavHolder>
        <LogoHolder>
          <FixedLink href="#home">
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

        <NavList>
          {navItems.map((item, index) => {
            return (
              <FixedLink key={index} href={item.href} menu={props.menu}>
                {item.content}
              </FixedLink>
            );
          })}

          <Button onClick={props.handleLanguage}>{languageAcronym}</Button>
        </NavList>
      </NavHolder>
    </NavWrapper>
  );
};
export default Nav;
