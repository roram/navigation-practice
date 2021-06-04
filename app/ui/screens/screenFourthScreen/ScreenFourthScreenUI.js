import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ScreenFourthScreen = () =>{
    return(
        <View
        style={styles.viewContainer}
        >
            <Text
            style={styles.fontTitle}
            >Screen Fourth Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'deepskyblue'
    },
    fontTitle:{
        fontSize:20
    }
})

export default ScreenFourthScreen;