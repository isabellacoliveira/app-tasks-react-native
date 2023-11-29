import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

const SignUpScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);

  const handleSignUp = () => {
    const fixedUsername = 'rafaela_css';
    const fixedPassword = '12345';

    if (username === fixedUsername && password === fixedPassword) {
      setLoginStatus('Login bem-sucedido');
      onLogin();
    } else {
      setLoginStatus('Login incorreto');
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="user" size={50} color="black" style={styles.icon} />
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleSignUp} />
      {loginStatus !== null && (
        <Text style={styles.loginStatus}>{loginStatus}</Text>
      )}
    </View>
  );
};

export default SignUpScreen;
