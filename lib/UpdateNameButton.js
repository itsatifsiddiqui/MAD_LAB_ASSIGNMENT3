import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const UpdateNameButton = (props) => {
    const [name, setName] = useState(props.name);
    return (
        <View style={styles.button}>
            <Button
                type="Solid"
                title={name}
                color="white"
                onPress={() => {
                    if (name === props.updateNameTo) {
                        setName(props.name);
                    } else {
                        setName(props.updateNameTo);
                    }
                }}

            />
        </View>
    );

}
const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'green',
        padding: 8,
        marginHorizontal: 8,
        flexWrap: 'wrap',
    }
})

export default UpdateNameButton;