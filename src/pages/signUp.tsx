/* eslint-disable @typescript-eslint/ban-ts-comment */
import { GetStaticProps } from 'next';
import React from 'react';
/* @ts-ignore*/
import SignUp from '../components/SignUp';

const App = (props) => {
  /* @ts-ignore*/
  return <SignUp theme={props.theme} google={props.google} host={props.host} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      google: { clientId: process.env.GOOGLE_CLIENT_ID || '' },
      host: {
        address: process.env.HOST || '',
        signInPath: process.env.SIGN_IN || '',
        signUpPath: process.env.SIGN_UP || '',
      },
    },
  };
};
export default App;
