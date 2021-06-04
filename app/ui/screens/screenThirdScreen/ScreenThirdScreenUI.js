import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ScreenThirdScreen = () =>{
    return(
        <View
        style={styles.viewContainer}
        >
            <Text
            style={styles.fontTitle}
            >Screen Third Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'greenyellow'
    },
    fontTitle:{
        fontSize:20
    }
})

export default ScreenThirdScreen;