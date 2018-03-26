/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HttpClient} from './util/http-client.util';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu'
// });

type Props = {};
type States = {
    data: string;
};

export class App extends Component<Props, States> {
    state = {
        data: 'asdasd'
    };

    componentDidMount() {
        // this.setState()
        HttpClient.Get('https://jsonplaceholder.typicode.com/posts/1', {
            params: {
                action: 'query',
                titles: 'Main Page',
                prop: 'revisions',
                rvprop: 'content',
                format: 'json',
                formatversion: '2'
            }
        })
            .then((x: string) => {
                this.setState({
                    data: x
                });
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.state.data}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 10,
        textAlign: 'left',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
