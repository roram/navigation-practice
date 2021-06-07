import React from 'react'
import {View, Text, Pressable, StyleSheet} from 'react-native';

const ScreenPassRecUI = ({handler1}) =>{
    return(
        <View
        style={styles.viewContainer}
        >
            <Text
            style={styles.fontTitle}
            >Screen Password Recovery</Text>
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
        backgroundColor:'crimson'
    },
    fontTitle:{
        fontSize:20
    },
    buttonBack:{
        backgroundColor:'blueviolet',
        marginTop:10,
        paddingVertical:10,
        paddingHorizontal:20,
    }
})


export default ScreenPassRecUI;