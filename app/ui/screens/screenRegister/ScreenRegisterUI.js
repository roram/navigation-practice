import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const ScreenRegisterUI = ({handler1}) => {
    return(
        <View
        style={styles.viewContainer}
        >
            <Text
            style={styles.fontTitle}
            >Register Screen</Text>
            <Pressable
            style={styles.buttonBack}
            onPress={handler1}
            >
                <Text>Go back To Log In</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    viewContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'lightgreen'
    },
    fontTitle:{
        fontSize:20
    },
    buttonBack:{
        backgroundColor:'lightcoral',
        marginTop:10,
        paddingVertical:10,
        paddingHorizontal:20,
    }
})

export default ScreenRegisterUI;