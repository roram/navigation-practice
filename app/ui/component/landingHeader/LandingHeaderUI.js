import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LandingHeaderUI = ({handler1, titleHeader}) =>{
    return(
        <View
        style={styles.viewContainer}
        >
            
                <Text
                style={styles.textContainer}
                >{titleHeader}</Text>
            
            
                <Pressable
                style={styles.btnContainer}
                onPress={handler1}
                >
                    <Ionicons
                    name='menu'
                    color='black'
                    size={30}
                    
                    />
                </Pressable>
            
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer:{
        height:50,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textContainer:{
        fontSize:20,
        paddingLeft:15
    },
    btnContainer:{
        paddingRight:15
    }
})

export default LandingHeaderUI;