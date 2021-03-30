import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default (props) => {
    handlePress = () => {
        props.pressHandler(props.title);
    }
    return (
        <TouchableOpacity
            style={[
                styles.button,
                props.wide ? styles.buttonWide : null,
                props.orange ? styles.buttonOrange : null
            ]}
            onPress={handlePress}
        >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = {
    button: {
        width: '25%',
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 1
    },
    buttonWide: {
        width: '50%'
    },
    buttonOrange: {
        backgroundColor: '#f5923e'
    },
    text: {
        fontSize: 30
    }
}