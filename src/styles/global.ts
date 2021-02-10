import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    scroll-behavior: smooth !important;
    transition: all 0.5s ease;
    animation: 1s ease appear;

    ::selection {
      color: #ECECEC;
      background: #0E0E0E;
    }

    // ::-webkit-scrollbar-track {
    //   background-color: #0E0E0E;
    //   position: absolute;
    // }

    // ::-webkit-scrollbar {
    //   width: 0.6vw;
    // }

    // ::-webkit-scrollbar-thumb {
    //   background-color: #ECECEC;
    // }
    @keyframes appear{
      0%   {opacity: 0;}
      100% {opacity: 1;}
    }

    @-o-keyframes appear{
      0%   {opacity: 0;}
      100% {opacity: 1;}
    }

    @-moz-keyframes appear{
      0%   {opacity: 0;}
      100% {opacity: 1;}
    }

    @-webkit-keyframes appear{
      0%   {opacity: 0;}
      100% {opacity: 1;}
    }
  }

  // @font-face {
  //   font-family: 'EdelSansLight';
  //   src: url('/fonts/EdelSans-Light.ttf');
  // }

  // @font-face {
  //   font-family: 'Metrophobic-Regular';
  //   src: url('/fonts/Metrophobic-Regular.ttf');
  // }

  // @font-face {
  //   font-family: 'Acid';
  //   src: url('/fonts/Acid/acid.otf');
  // }

  // @font-face {
  //   font-family: 'FuturaNDLight';
  //   src: url('/fonts/FuturaND/FuturaNDLight.ttf');
  // }

  // @font-face {
  //   font-family: 'ITCAvantGardeStdXLt';
  //   src: url('/fonts/ITCAvantGardeGothic/ITCAvantGardeStdXLt.otf');
  // }

  @font-face {
    font-family: 'Spartan-Thin';
    src: url('/fonts/Spartan/Spartan-Thin.ttf');
  }

  @font-face {
    font-family: 'Spartan-ExtraLight';
    src: url('/fonts/Spartan/Spartan-ExtraLight.ttf');
  }

  @font-face {
    font-family: 'Spartan-Light';
    src: url('/fonts/Spartan/Spartan-Light.ttf');
  }

  // @font-face {
  //   font-family: 'Spartan-Regular';
  //   src: url('/fonts/Spartan/Spartan-Regular.ttf');
  // }

  body {
    background: #F6F8FC;
    -webkit-font-smoothing: antialiased;
    // overflow-y: hidden;
    height: 100vh;
  }

  body, input, button {
    font: 16px Spartan-ExtraLight, sans-serif;
  }

  button {
    cursor: pointer;
  }

  // ::-webkit-scrollbar-track {
  //   background-color: #0E0E0E;
  //   position: absolute;
  // }

  // ::-webkit-scrollbar {
  //   width: 0.6vw;
  // }

  // ::-webkit-scrollbar-thumb {
  //   background-color: #ECECEC;
  // }

  #__next {
    width: 100%;
    height: 100vh;
    position: absolute;
    margin: 0;
    // overflow-y: auto;
    // overflow-x: hidden;
    // overflow-y: hidden;
    -webkit-font-smoothing: antialiased;

    ::-webkit-scrollbar-track {
      background-color: #0E0E0E;
      position: absolute;
    }

    ::-webkit-scrollbar {
      width: 0.6vw;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #ECECEC;
    }

    a {
      text-decoration: none;
    }

    li {
      list-style: none;
    }

  }
  // The main container element
  .Collapsible {
    // background-color: $base;
    line-height: 3vh;
  }

  //The content within the collaspable area
  .Collapsible__contentInner {
    padding: 10px;
    border-top: 0;

    p {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  //The link which when clicked opens the collapsable area
  .Collapsible__trigger {
    display: block;
    font-size: 2vh;
    font-family: Spartan-Light;
    // font-weight: 400;
    font-weight: bold;
    // text-decoration: none;
    position: relative;
    padding-left: 2.5vh;
    cursor: pointer;

    // @media screen and (max-width: 1000px) {
    //   font-size: 2vh;
    // }

    &:before {
      font-family: Spartan-Light;
      content: '+';
      left: -5px;
      position: absolute;
      display: block;
      transition: transform 0.2s;
    }

    &.is-open {
      &:before {
        font-family: Spartan-Light;
        content: '-';
        transform: rotateZ(180deg);
      }
    }

    &.is-disabled {
      opacity: 0.5;
      // background-color: grey;
    }
  }

  .CustomTriggerCSS {
    background-color: lightcoral;
    transition: background-color 0.2s ease;
  }

  .CustomTriggerCSS--open {
    background-color: darkslateblue;
  }

  .Collapsible__custom-sibling {
    padding: 5px;
    font-size: 12px;
    background-color: #CBB700;
    color: black;
  }

`;
