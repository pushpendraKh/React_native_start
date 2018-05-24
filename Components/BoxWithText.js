import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class BoxWithText extends Component {

    render() {
        return(
            <View style = { styles.container}> 
                <Text style = {styles.firstText}> My Name is Pushpendra </Text>
                <Text style = { styles.secondText}> I work at Kuliza Technologies Pvt. Ltd</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#234523',
        borderWidth: 1,
        borderColor: 'purple' 
    },

    firstText: {
        margin: 8,
        color: 'black'
    },

    secondText: {
        marginLeft: 8,
        color: 'yellow',
        fontWeight: 'bold',
    }

});
