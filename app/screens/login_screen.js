import React, {useState} from 'react';
import {Image, TextInput, Text} from 'react-native';
import GradientContainer from './common/GradientContainer';
import {styles} from '../styles/common';
import {Button} from 'react-native-paper';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = () => {
    // TODO: navigate somewhere
  };

  const onSignUp = () => {
    // TODO: navigate somewhere
  };

  return (
    <GradientContainer>
      <Image
        source={require('../../assets/imvelo_logo.png')}
        style={styles.logo}
      />

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

      <Button mode="contained" color="white" labelStyle={styles.color_main} style={styles.button} onPress={onSignIn}>
        Sign in
      </Button>

      <Text style={[styles.center, styles.color_w, styles.underline, styles.bottom]} onPress={onSignUp}>
        Sign up
      </Text>
    </GradientContainer>
  );
};

export default Login;
