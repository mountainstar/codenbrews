import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@email.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
            keyboard='email-address'
            autoCapitalize='none'
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            secureTextEntry
            placeholder="password123"
            autoCapitalize='none'
          />
        </CardSection>
        <CardSection>
        <Button
          style={{ backgroundColor: '#44B2E5', borderColor: '#358AAA' }}
          onPress={this.onButtonPress.bind(this)}
        >
          Login
        </Button>
        </CardSection>
        <CardSection>
          <Text>{this.props.usersEmail}</Text>
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const { email, password, usersEmail } = auth;
  return { email, password, usersEmail };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
