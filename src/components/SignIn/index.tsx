import React, { Fragment, useContext } from 'react';
import Head from 'next/head';
import LanguageContext from '../../language/context';

import Home from './Home';
import Layout from '../Layout';

const SignIn = (props) => {
  const lang = useContext(LanguageContext);

  return (
    <Fragment>
      <Head>
        <title>AUTH</title>
      </Head>
      <Layout theme={props.theme} language={lang}>
        <Home
          theme={props.theme}
          handleToken={props.handleToken}
          google={props.google}
          host={props.host}
        />
      </Layout>
    </Fragment>
  );
};

export default SignIn;
