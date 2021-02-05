import React, { Fragment, useContext } from 'react';
import Head from 'next/head';
import LanguageContext from '../../language/context';

import Sign from './Sign';
import Layout from '../Layout';

const SignUp = (props) => {
  const lang = useContext(LanguageContext);

  return (
    <Fragment>
      <Head>
        <title>AUTH</title>
      </Head>
      <Layout theme={props.theme} language={lang}>
        <Sign
          theme={props.theme}
          handleToken={props.handleToken}
          google={props.google}
          host={props.host}
        />
      </Layout>
    </Fragment>
  );
};

export default SignUp;
