import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Spinner = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={{ fontSize: 24, fontWeight: "600", color:"black" }}>Spinner.......</Text>
            </View>
        </>
    )
}

export default Spinner

const styles = StyleSheet.create({
    container: {
    }
})