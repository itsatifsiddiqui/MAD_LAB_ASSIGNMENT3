import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';


const Calculator = () => {
    const [text, setText] = useState('');

    return (
        <View style={{ width: "100%", marginVertical: 8 }}>
            <View style={{ padding: 1 }}>
                <Text style={styles.text}>{text}</Text>
            </View>
            <View style={styles.column}>
                <View style={styles.buttonsRow}>
                    <CalculatorButton
                        text="7"
                        onPress={() => { setText(text + "7") }}
                    />
                    <CalculatorButton
                        text="8"
                        onPress={() => { setText(text + "8") }}

                    />
                    <CalculatorButton
                        text="9"
                        onPress={() => { setText(text + "9") }}

                    />
                    <CalculatorButton
                        text="-"
                        onPress={() => { setText(text + "-") }}

                    />
                </View>
            </View>
            <View style={styles.column}>
                <View style={styles.buttonsRow}>
                    <CalculatorButton
                        text="4"
                        onPress={() => { setText(text + "4") }}

                    />
                    <CalculatorButton
                        text="5"
                        onPress={() => { setText(text + "5") }}

                    />
                    <CalculatorButton
                        text="6"
                        onPress={() => { setText(text + "6") }}

                    />
                    <CalculatorButton
                        text="+"
                        onPress={() => { setText(text + "+") }}

                    />
                </View>
            </View>
            <View style={styles.column}>
                <View style={styles.buttonsRow}>
                    <CalculatorButton
                        text="1"
                        onPress={() => { setText(text + "1") }}

                    />
                    <CalculatorButton
                        text="2"
                        onPress={() => { setText(text + "2") }}

                    />
                    <CalculatorButton
                        text="3"
                        onPress={() => { setText(text + "3") }}

                    />
                    <CalculatorButton
                        text="/"
                        onPress={() => { setText(text + "/") }}

                    />
                </View>
            </View>
            <View>
                <CalculatorButton
                    text="Clear"
                    onPress={() => setText('')}
                />

            </View>
        </View >

    );
}



const CalculatorButton = (props) => {
    return (
        <TouchableHighlight
            style={styles.button}
            onPress={props.onPress}
        >
            <Text style={styles.buttonText} >
                {props.text}
            </Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        backgroundColor: '#000000',
        color: 'white',
        fontSize: 20,
        padding: 24
    },
    button: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'red',
        padding: 8,
        margin: 1,
        flexWrap: 'wrap',
        minWidth: 50,
        minHeight: 50,
    },
    buttonText: {
        color: "white",
        alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: 8
    },
    column: {
        flexDirection: 'row',
    },
    buttonsRow: {
        flexDirection: 'row',
        flex: 1,
    }
})

export default Calculator;


// export default CalculatorButton;