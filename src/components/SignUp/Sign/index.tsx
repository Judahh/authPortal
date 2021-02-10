// file deepcode ignore object-literal-shorthand: argh
import React, { useContext, useState, useRef, useEffect } from 'react';
import { Container } from '../../Container';
import LanguageContext from '../../../language/context';
import { MainTitle, Title, Error } from '../../Text';
import { ContentWrapper } from '../../ContentWrapper';
import { Form, Input, SubmitButton } from '../../Form';
import axios from 'axios';
import { Row, Col } from '../../Table';
import { Coffee } from '../../SVG';
import GoogleLogin from 'react-google-login';

// eslint-disable-next-line no-unused-vars
const Sign = (props) => {
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [email, setEmail] = useState('');
  const [gmail, setGmail] = useState('');
  const [gToken, setGToken] = useState({});
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [givenNameError, setGivenNameError] = useState('');
  const [familyNameError, setFamilyNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [gmailError, setGmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (givenName !== '' && givenName !== ' ') {
      setGivenNameError('');
    }
  }, [givenName]);

  useEffect(() => {
    if (familyName !== '' && familyName !== ' ') {
      setFamilyNameError('');
    }
  }, [familyName]);

  useEffect(() => {
    if (email !== '' && email !== ' ') {
      setEmailError('');
    }
  }, [email]);

  useEffect(() => {
    if (gmail !== '' && gmail !== ' ') {
      setGmailError('');
    }
  }, [gmail]);

  useEffect(() => {
    if (password !== '' && password !== ' ') {
      setPasswordError('');
    }
  }, [email]);

  useEffect(() => {
    if (givenName && familyName && (gmail || (email && password))) {
      setError('');
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  });

  const handleValidate = () => {
    let hasError = false;

    if (givenName === '' || givenName === ' ') {
      setGivenNameError(signUp.error.name);
      hasError = true;
    }

    if (familyName === '' || familyName === ' ') {
      setFamilyNameError(signUp.error.name);
      hasError = true;
    }

    if (email !== '' || password !== ' ') {
      if (email === '' || email === ' ') {
        setEmailError(signUp.error.email);
        hasError = true;
      }

      if (password === '' || password === ' ') {
        setPasswordError(signUp.error.email);
        hasError = true;
      }
    }

    if (hasError) {
      setError(signUp.error.general);
      setDisabled(true);
    } else {
      setError('');
      setDisabled(false);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.persist();
    e.preventDefault();
    handleValidate();
    const identifications: Array<
      { type: string; identification: string; key?: string } | undefined
    > = [];
    if (email)
      identifications.push({
        type: 'LOCAL',
        identification: email,
        key: password,
      });
    if (gmail)
      identifications.push({
        type: 'GOOGLE',
        identification: gmail,
      });

    const body = {
      givenName: givenName,
      familyName: familyName,
      identifications: identifications,
    };

    if (!error) {
      try {
        let http = 'https://';
        if (props.host.address.includes('localhost')) http = 'http://';
        const received = await axios.post(
          http + props.host.address + props.host.signUpPath,
          body,
          {
            headers: gToken,
          }
        );
        const isSignedUp = !!received.data.id;
        // console.log(received.data);
        setSignedUp(isSignedUp);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(signUp.error.specific + error);
        setLoading(false);
      }
    } else {
      setError(signUp.error.general);
      setLoading(false);
    }
  };

  const login = async (response) => {
    // console.log('login OK:', props);
    setLoading(true);

    setGToken({
      accessToken: response.accessToken,
      tokenId: response.tokenId,
    });

    setGmail(response.profileObj.email);
    setLoading(false);
  };

  const failure = (response?) => {
    // console.log('failure:', response);
    setError(signUp.error.specific + 'failure:' + response);
    setGmail('');
    setGToken({});
    setLoading(false);
  };

  const { signUp } = useContext(LanguageContext);

  return (
    <Container id="signUp">
      <ContentWrapper>
        <MainTitle>{signUp.title}</MainTitle>
        {signedUp ? (
          <Title>{signUp.signedUp}</Title>
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
                  name="givenName"
                  type="givenName"
                  value={givenName}
                  aria-label={signUp.inputGivenName}
                  placeholder={signUp.inputGivenName}
                  onChange={(e) => {
                    setGivenName(e.target.value);
                  }}
                />
                {givenNameError !== '' && givenNameError !== ' ' ? (
                  <Error>{givenNameError}</Error>
                ) : null}
              </Col>
              <Col>
                <Input
                  name="familyName"
                  type="familyName"
                  value={familyName}
                  aria-label={signUp.inputFamilyName}
                  placeholder={signUp.inputFamilyName}
                  onChange={(e) => {
                    setFamilyName(e.target.value);
                  }}
                />
                {familyNameError !== '' && familyNameError !== ' ' ? (
                  <Error>{familyNameError}</Error>
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  name="email"
                  type="email"
                  value={email}
                  aria-label={signUp.inputEmail}
                  placeholder={signUp.inputEmail}
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
                  aria-label={signUp.inputPassword}
                  placeholder={signUp.inputPassword}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {passwordError !== '' && passwordError !== ' ' ? (
                  <Error>{passwordError}</Error>
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col>
                {gmail !== '' && gmail !== ' ' ? (
                  <SubmitButton
                    onClick={() => {
                      setGmail('');
                    }}
                  >
                    {signUp.googleSignOut}
                  </SubmitButton>
                ) : (
                  <GoogleLogin
                    render={(renderProps) => (
                      <SubmitButton
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        {signUp.googleSignUp}
                      </SubmitButton>
                    )}
                    clientId={props.google.clientId}
                    onSuccess={login}
                    onFailure={failure}
                    responseType="code,token"
                  />
                )}
                {gmailError !== '' && gmailError !== ' ' ? (
                  <Error>{gmailError}</Error>
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
              {signUp.signUp}
            </SubmitButton>
          </Form>
        )}
      </ContentWrapper>
    </Container>
  );
};
export default Sign;
