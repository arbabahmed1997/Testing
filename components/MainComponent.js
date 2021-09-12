import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const MainComponent = (props) => {
    let { count, handleFireClick } = props

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text>{count} times.</Text>
            <TouchableOpacity onPress={() => handleFireClick()} style={{ marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Press Me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainComponent;
