import React, {useState, useEffect} from 'react';
import {TextInput, Text} from 'react-native';
import GradientContainer from './common/GradientContainer';
import {styles} from '../styles/common';
import {Button} from 'react-native-paper';
import ImveloLogo from './common/ImveloLogo';
import SplashScreen from 'react-native-splash-screen'

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    SplashScreen.hide();
  });

  const onSignIn = () => {
    props.navigation.navigate('home');
  };

  const onSignUp = () => {
    // TODO: navigate somewhere
  };

  return (
    <GradientContainer>
      <ImveloLogo />

      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        placeholder="username"
        placeholderTextColor="rgb(224,224,224)"
      />
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        placeholder="password"
        placeholderTextColor="rgb(224,224,224)"
      />

      <Text style={[styles.center, styles.color_w, styles.underline]}>
        Forgot Password?
      </Text>

      <Button
        mode="contained"
        color="white"
        labelStyle={styles.color_main}
        style={styles.button}
        onPress={onSignIn}>
        Sign in
      </Button>

      <Text
        style={[styles.center, styles.color_w, styles.underline, styles.bottom]}
        onPress={onSignUp}>
        Sign up
      </Text>
    </GradientContainer>
  );
};

export default Login;
