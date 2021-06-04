import React from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'

const ScreenDetailSecondUI = ({handler1}) =>{
    return(
        <View
        style={styles.viewContainer}
        >
            <Text
            style={styles.fontTitle}
            >Screen Second Detail</Text>
            <Pressable
            onPress={handler1}
            style={styles.buttonBack}
            >
                <Text>Go back to Second Screen</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer:{
        flex:1,
        backgroundColor:'aquamarine',
        justifyContent:'center',
        alignItems:'center'
    },
    fontTitle:{
        fontSize:20
    },
    buttonBack:{
        backgroundColor:'chartreuse',
        marginTop:10,
        paddingHorizontal:20,
        paddingVertical:10
    }
})

export default ScreenDetailSecondUI;