import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const AgeCounter = (props) => {

    const [count, setCount] = useState(props.count || 0);

    return (
        <View style={styles.counter}>
            <Text style={styles.age}>Age: </Text>
            <View style={styles.button}>
                <Button
                    title="+"
                    color='white'
                    onPress={() => {
                        setCount(count + 1)
                    }}

                />
            </View>
            <Text style={styles.count}>{count}</Text>
            <View style={styles.button}>
                <Button
                    title="-"
                    color='white'
                    onPress={() => {
                        if (count > 0)
                            setCount(count - 1)
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    counter: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    age: {
        fontSize: 24,
        paddingEnd: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    count: {
        fontSize: 24,
        paddingEnd: 16,
        fontWeight: "bold",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12
    },
    button: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 8,
        flexWrap: 'wrap',
    }
});

export default AgeCounter;