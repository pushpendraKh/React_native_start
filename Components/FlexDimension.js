import React, {Component} from 'react'
import { View, TextInput, StyleSheet, Button, TouchableHighlight } from 'react-native'

export default class FlexDimension extends Component {

    render() {
        return(
            <View style = { {flex: 1}}> 
                <View style = { { flex: 50, backgroundColor:'white', justifyContent: 'center'} }>
                    <TextInput style = {textFieldStyle.property}> Enter Name 
                    </TextInput>

                    <TextInput style = {textFieldStyle.property}> Enter Password 
                    </TextInput>

                    <Button style = { textFieldStyle.buttonProperty} title = "Submit" onPress = { onPressLearnMore }>  
                    </Button>
                </View>
                
            </View>
        );
    }
}

let onPressLearnMore = () => {
      
}

const textFieldStyle = StyleSheet.create({
    property: {
        height: 50,
        margin: 10,
        borderWidth: 1,
        borderBottomColor: 'gray',
        borderColor: 'white'
    },

    buttonProperty: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'black',
    }
});