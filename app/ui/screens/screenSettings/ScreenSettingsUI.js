import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';


const ScreenSettingsUI = ({handler1}) =>{
    return(
        <View
        style={styles.viewContainer}
        >
            <Text
            style={styles.fontTittle}
            >Settings</Text>
            <Pressable
            style={styles.buttonBack}
            onPress={handler1}
            >
                <Text>Back to Landing Stack</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'tomato'
    },
    fontTitle:{
        fontSize:20
    },
    buttonBack:{
        backgroundColor:'springgreen',
        marginTop:10,
        paddingVertical:10,
        paddingHorizontal:20,
    }
})

export default ScreenSettingsUI;