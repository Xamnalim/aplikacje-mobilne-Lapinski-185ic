import React from 'react';
import { View, Text, ProgressViewIOSComponent } from 'react-native';

export default (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.value}
            </Text>
        </View>
    );
}

const styles = {
    container: {
        backgroundColor: "#858694",
        flex: 1
    },
    text: {
        color: 'white',
        textAlign: 'right',
        fontWeight: '200',
        fontSize: 80
    }
}