/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var firstTry = React.createClass({
  render: function() {
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome to React Native!
    //     </Text>
    //     <Text style={styles.instructions}>
    //       To get started, edit index.ios.js
    //     </Text>
    //     <Text style={styles.instructions}>
    //       Press Cmd+R to reload,{'\n'}
    //       Cmd+D or shake for dev menu
    //     </Text>
    //   </View>
    // );

    return (
        <View style={styles.page}>
            <View style={styles.style_1}>
              <Text>
                pt1
              </Text>
            </View>
            <View style={styles.style_1}>
              <Text>
                pt1
              </Text>
            </View>
            <View style={styles.style_2}>
              <Text>
                pt2
              </Text>
            </View>
        </View>
    );
  }
});

var styles = StyleSheet.create({
  page:{
    flex:1, //不能使用 height:100% height只接受number
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  style_1:{
      flex: 1,
      borderWidth: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'red',
  },
  style_2:{
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 10,
      borderColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
// 必须  这是程序入口
AppRegistry.registerComponent('firstTry', () => firstTry);
