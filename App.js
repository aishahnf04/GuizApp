/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    <View style={styles.container}>
            <View style={styles.responsiveBoxHeader}>
                <Text style={styles.text}>All Topics</Text>
            </View>
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
            <View style={styles.responsiveBox}>
            </View>
        </ScrollView>

        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    responsiveBox: {
        width: wp('95.5%'),
        height: hp('95%'),
        borderWidth: 2,
        borderColor: 'orange',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: 10,
    },

    responsiveBoxHeader: {
        width: wp('95.5%'),
        height: hp('5%'),
        borderWidth: 2,
        borderColor: 'orange',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: 40,

    },
    text: {
        color: 'white',
        textAlign: 'center',
    }
});
