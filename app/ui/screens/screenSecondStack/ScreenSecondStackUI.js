import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

const ScreenSecondStackUI = ({handler1}) =>{
    return(
        <View
        style={styles.viewContainer}
        >
            <Text
            style={styles.fontTitle}
            >Screen Second Stack</Text>
            <Pressable
            style={styles.buttonBack}
            onPress={handler1}
            >
                <Text>Second Stack Details</Text>
            </Pressable>
        </View>
    );
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

export default ScreenSecondStackUI;