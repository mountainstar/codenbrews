import _ from 'lodash';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { getPost } from '../actions';
import { Card, CardSection } from './common';

class Hello extends Component {
  componentWillMount() {
    this.props.getPost(this.props);
  }
  componentDidMount(nextprops) {
    this.props.getPost(nextprops);
  }

  render() {
    return (
        <Card>
          <CardSection>
              <Text style={{ fontSize: 24 }}>
              {this.props.posts[0].title}
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
