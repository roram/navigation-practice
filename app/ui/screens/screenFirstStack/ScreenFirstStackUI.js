import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const ScreenFirstStackUI = ({handler1}) =>{
    return(
        <View
        style={styles.viewContainer}
        >
            <Text style={styles.fontTitle}>Screen First Stack</Text>
            <Pressable
            onPress={handler1}
            style={styles.buttonBack}
            >
                <Text>First Stack Details</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer:{
        flex:1,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center'
    },
    fontTitle:{
        fontSize:20
    },
    buttonBack:{
        backgroundColor:'pink',
        marginTop:10,
        paddingHorizontal:20,
        paddingVertical:10
    }
})

export default ScreenFirstStackUI;