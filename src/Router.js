import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Hello from './components/Hello';
import LoginForm from './components/Login';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="login" component={LoginForm} title="Login" />
      <Scene key="hello" component={Hello} title="Hello" />
    </Router>
  );
};

export default RouterComponent;
