/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { 
    StyleSheet, 
    Text, 
    View 
} from "react-native";
const { QueryRenderer, graphql } = require("react-relay");

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <QueryRenderer 
          environment={environment} 
          query={graphql`
            query AppQuery {
              users {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          `} 
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              return <div>{props.users.edges[0].node.name} is great!</div>;
            }
            return <div>Loading</div>;
          }} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
