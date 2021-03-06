import React from 'react';
import { Pressable, Text, View, StyleSheet } from "react-native"

const ScreenDetailFirstUI = ({handler1}) =>{
    return(
        <View
        style={styles.viewContainer}
        >
            <Text style={styles.fontTitle}>Screen Detail First Stack</Text>
            <Pressable
            onPress={handler1}
            style={styles.buttonBack}
            >
                <Text>Go back to first Screen</Text>
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

export default ScreenDetailFirstUI;