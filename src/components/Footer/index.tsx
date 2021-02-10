import React, { useContext } from 'react';
import { StyledFooter, Div } from './styles';
import LanguageContext from '../../language/context';
import { default as lightTheme } from '../../styles/themes/light.json';
import { Theme } from '../../components/SVG';
import { CopyrightText } from '../../components/Text';
// import { CgMenuBoxed } from 'react-icons/cg';
// import { TiThMenuOutline } from 'react-icons/ti';
// import { TiThMenu } from 'react-icons/ti';

const Footer = (props) => {
  const { footer } = useContext(LanguageContext);
  // eslint-disable-next-line no-unused-vars
  // const menuIcon = (menu) => {
  //   switch (menu) {
  //     case 1:
  //       return <TiThMenuOutline color={props.theme.primary} />;
  //     case 2:
  //       return <TiThMenu color={props.theme.primary} />;
  //     default:
  //       return <CgMenuBoxed color={props.theme.primary} />;
  //   }
  // };

  const themeIcon = (theme) => {
    return theme === lightTheme ? (
      <Theme
        viewBox="0 0 24 24"
        width="16"
        height="16"
        stroke={props.theme.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        shape-rendering="geometricPrecision"
      >
        <circle cx="12" cy="12" r="5"></circle>

        <path d="M12 1v2"></path>

        <path d="M12 21v2"></path>

        <path d="M4.22 4.22l1.42 1.42"></path>

        <path d="M18.36 18.36l1.42 1.42"></path>

        <path d="M1 12h2"></path>

        <path d="M21 12h2"></path>

        <path d="M4.22 19.78l1.42-1.42"></path>

        <path d="M18.36 5.64l1.42-1.42"></path>
      </Theme>
    ) : (
      <Theme
        viewBox="0 0 24 24"
        width="16"
        height="16"
        stroke={props.theme.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        shape-rendering="geometricPrecision"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
      </Theme>
    );
  };

  return (
    <StyledFooter>
      {/* <Div onClick={props.handleMenu}>
        {menuIcon(props.menu)}
      </Div> */}

      <CopyrightText>{footer.copyright}</CopyrightText>

      <Div onClick={props.handleTheme}>{themeIcon(props.theme)}</Div>
    </StyledFooter>
  );
};

export default Footer;
