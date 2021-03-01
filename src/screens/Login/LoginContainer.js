import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ConsoleLogs} from '../../utils/ConsoleLogs';
import LoginComponent from './LoginComponent';

function LoginContainer(props) {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passwordShown, setPasswordShown] = useState(true);
  const [loginClicked, setLoginClicked] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  function handleLogin() {
    if (password.length < 6) {
      alert('Password must contain minimum 6 characters!!!');
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) != true) {
      alert('Invalid Email-Id');
    }
    if (password.length >= 6 && reg.test(email) === true) {
      navigation.navigate('DashboardContainer');
    }
  }
  let tag = 'LoginContainer.js';
  return (
    <LoginComponent
      navigation={navigation}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      passwordShown={passwordShown}
      setPasswordShown={setPasswordShown}
      togglePasswordVisiblity={togglePasswordVisiblity}
      loginClicked={loginClicked}
      setLoginClicked={setLoginClicked}
      tag={tag}
      handleLogin={handleLogin}
    />
  );
}
export default LoginContainer;
