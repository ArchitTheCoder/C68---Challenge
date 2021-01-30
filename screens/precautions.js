import React from 'react';
import { Text, View } from 'react-native'

export default class Precautions extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Precautions
                    Wash Your Hands For At Least 20 Seconds
                    Wear Face Coverings In Public
                </Text>
            </View>
        )
    }
}