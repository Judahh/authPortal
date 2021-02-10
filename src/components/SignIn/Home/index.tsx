import React, { useContext, useState, useRef, useEffect } from 'react';
import { Container } from '../../Container';
import LanguageContext from '../../../language/context';
import TokenContext from '../../../token/context';
import { MainTitle, Error } from '../../Text';
import { ContentWrapper } from '../../ContentWrapper';
import { Form, Input, SubmitButton } from '../../Form';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';
import { Row, Col } from '../../Table';
import { Coffee } from '../../SVG';

// eslint-disable-next-line no-unused-vars
const Home = (props) => {
  const token = useContext(TokenContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (email !== '' && email !== ' ') {
      setEmailError('');
    }
  }, [email]);

  useEffect(() => {
    if (password !== '' && password !== ' ') {
      setPasswordError('');
    }
  }, [email]);

  useEffect(() => {
    if (email && password) {
      setError('');
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  });

  const handleValidate = () => {
    let hasError = false;

    if (email === '' || email === ' ') {
      setEmailError(home.error.email);
      hasError = true;
    }

    if (password === '' || password === ' ') {
      setPasswordError(home.error.email);
      hasError = true;
    }

    if (hasError) {
      setError(home.error.general);
      setDisabled(true);
    } else {
      setError('');
      setDisabled(false);
    }
  };

  const handleSubmit = async (e) => {
    console.log(props);

    setLoading(true);
    e.persist();
    e.preventDefault();
    handleValidate();

    const body = {
      type: 'LOCAL',
      identification: email,
      key: password,
    };

    if (!error) {
      try {
        let http = 'https://';
        if (props.host.address.includes('localhost')) http = 'http://';
        const received = await axios.post(
          http + props.host.address + props.host.signInPath,
          body
        );
        console.log('received:', received.data.token);
        props.handleToken(received.data.token);
        setLoading(false);
      } catch (error) {
        console.error(error);
        props.handleToken(undefined);
        setError(home.error.specific + error);
        setLoading(false);
      }
    } else {
      props.handleToken(undefined);
      setError(home.error.general);
      setLoading(false);
    }
  };

  const login = async (response) => {
    // console.log('login OK:', props);
    setLoading(true);
    const body = {
      type: 'GOOGLE',
      identification: response.profileObj.email,
    };
    try {
      let http = 'https://';
      if (props.host.address.includes('localhost')) http = 'http://';
      const received = await axios.post(
        http + props.host.address + props.host.signInPath,
        body,
        {
          headers: {
            accessToken: response.accessToken,
            tokenId: response.tokenId,
          },
        }
      );
      // console.log('received:', received.data.token);
      props.handleToken(received.data.token);
      // console.log(received.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      props.handleToken(undefined);
      setError(home.error.specific + error);
      setLoading(false);
    }
  };

  const logout = () => {
    // console.log('logout OK:');
    props.handleToken(undefined);
    setLoading(false);
  };

  const failure = (response?) => {
    // console.log('failure:', response);
    setError(home.error.specific + 'failure:' + response);
    props.handleToken(undefined);
    setLoading(false);
  };

  const { home } = useContext(LanguageContext);

  return (
    <Container id="home">
      <ContentWrapper>
        <MainTitle>{home.title}</MainTitle>
        {token ? (
          <GoogleLogout
            render={(renderProps) => (
              <SubmitButton
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                {home.logout}
              </SubmitButton>
            )}
            clientId={props.google.clientId}
            onLogoutSuccess={logout}
            onFailure={failure}
          />
        ) : loading ? (
          <Coffee
            className="coffee"
            width="37"
            height="48"
            viewbox="0 0 37 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.0819 17H3.02508C1.91076 17 1.01376 17.9059 1.0485 19.0197C1.15761 22.5177 1.49703 29.7374 2.5 34C4.07125 40.6778 7.18553 44.8868 8.44856 46.3845C8.79051 46.79 9.29799 47 9.82843 47H20.0218C20.639 47 21.2193 46.7159 21.5659 46.2052C22.6765 44.5687 25.2312 40.4282 27.5 34C28.9757 29.8188 29.084 22.4043 29.0441 18.9156C29.0319 17.8436 28.1539 17 27.0819 17Z"
              stroke="var(--secondary)"
              strokeWidth="2"
            ></path>
            <path
              d="M29 23.5C29 23.5 34.5 20.5 35.5 25.4999C36.0986 28.4926 34.2033 31.5383 32 32.8713C29.4555 34.4108 28 34 28 34"
              stroke="var(--secondary)"
              strokeWidth="2"
            ></path>
            <path
              id="steamL"
              d="M17 1C17 1 17 4.5 14 6.5C11 8.5 11 12 11 12"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="var(--secondary)"
            ></path>
            <path
              id="steamR"
              d="M21 6C21 6 21 8.22727 19 9.5C17 10.7727 17 13 17 13"
              stroke="var(--secondary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </Coffee>
        ) : (
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Input
                  name="email"
                  type="email"
                  value={email}
                  aria-label={home.inputEmail}
                  placeholder={home.inputEmail}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {emailError !== '' && emailError !== ' ' ? (
                  <Error>{emailError}</Error>
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  name="password"
                  type="password"
                  value={password}
                  aria-label={home.inputPassword}
                  placeholder={home.inputPassword}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {passwordError !== '' && passwordError !== ' ' ? (
                  <Error>{passwordError}</Error>
                ) : null}
              </Col>
            </Row>
            <SubmitButton
              type="submit"
              disabled={disabled}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              {home.login}
            </SubmitButton>
            <GoogleLogin
              render={(renderProps) => (
                <SubmitButton
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  {home.googleLogin}
                </SubmitButton>
              )}
              clientId={props.google.clientId}
              onSuccess={login}
              onFailure={failure}
              responseType="code,token"
            />
          </Form>
        )}
      </ContentWrapper>
    </Container>
  );
};
export default Home;
