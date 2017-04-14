import _ from 'lodash';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { getPost } from '../actions';
import { Card, CardSection } from './common';

class Hello extends Component {
  state = {
    title: ''
  }
  componentWillMount() {
    this.props.getPost(this.props);
  }
  componentDidMount(nextprops) {
    this.props.getPost(nextprops);
  }
  componentWillUpdate() {
    this.setState({ interval: this.props.posts[0].title });
  }
  render() {
    return (
        <Card>
          <CardSection>
              <Text style={{ fontSize: 24 }}>
              {this.state.title}
              </Text>
          </CardSection>
        </Card>
    );
  }
}
const mapStateToProps = state => {
  const posts = _.map(state.posts.all, (val, ID) => {
    return { ...val, ID };
  });
  return { posts };
};
export default connect(mapStateToProps, { getPost })(Hello);
