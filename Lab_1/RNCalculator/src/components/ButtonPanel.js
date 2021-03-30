import React from 'react';
import { View } from 'react-native';
import Button from './Button';

export default (props) => {
    handlePress = buttonName => {
        props.pressHandler(buttonName);
    }


    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <Button title="AC" pressHandler={handlePress} />
                <Button title="+/-" pressHandler={handlePress} />
                <Button title="%" pressHandler={handlePress} />
                <Button title="÷" pressHandler={handlePress} orange />
            </View>
            <View style={styles.buttonRow}>
                <Button title="7" pressHandler={handlePress} />
                <Button title="8" pressHandler={handlePress} />
                <Button title="9" pressHandler={handlePress} />
                <Button title="x" pressHandler={handlePress} orange />
            </View>
            <View style={styles.buttonRow}>
                <Button title="4" pressHandler={handlePress} />
                <Button title="5" pressHandler={handlePress} />
                <Button title="6" pressHandler={handlePress} />
                <Button title="-" pressHandler={handlePress} orange />
            </View>
            <View style={styles.buttonRow}>
                <Button title="1" pressHandler={handlePress} />
                <Button title="2" pressHandler={handlePress} />
                <Button title="3" pressHandler={handlePress} />
                <Button title="+" pressHandler={handlePress} orange />
            </View>
            <View style={styles.buttonRow}>
                <Button title="0" pressHandler={handlePress} wide />
                <Button title="." pressHandler={handlePress} />
                <Button title="=" pressHandler={handlePress} orange />
            </View>

        </View>
    );
}

const styles = {
    container: {
        backgroundColor: '#858694',
        flex: 4,

    },
    buttonRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    }
}