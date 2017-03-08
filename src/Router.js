import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Hello from './components/Hello';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="hello" component={Hello} title="Hello" />
    </Router>
  );
};

export default RouterComponent;
