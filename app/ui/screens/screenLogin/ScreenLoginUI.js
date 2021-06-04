import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const ScreenLoginUI = ({handler1, handler2, handler3}) =>{

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    return(
        <View style={styles.screenContainer}>
            <Text>Login Screen</Text>
            <TextInput
            style={styles.inputStyle}
            placeholder='Username'
            onChangeText={setUsername}
            text={username}
            // This is an example we see in the class
            // onEndEditing={handler2(username)}
            // onPressIn={()=>handler2('onPressIn')}
            // onPressOut={()=>handler2('onPressOut')}
            // onFocus={()=>handler2('onFocus')}
            />
            <TextInput
            style={styles.inputStyle}
            placeholder='Password'
            secureTextEntry={true}
            onChangeText={setPass}
            text={pass}
            />
            <Pressable
            style={styles.button}
            onPress={handler1}
            >
                <Text>Log In</Text>
            </Pressable>

            <Pressable
            style={styles.button}
            onPress={handler2}
            >
                <Text>Password Recovery</Text>
            </Pressable>
            <Pressable
            style={styles.button}
            onPress={handler3}
            >
                <Text>Register</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputStyle:{
        borderColor:'black',
        borderWidth:2,
        width:'60%',
        height:40,
        marginVertical:10
    },
    button:{
        backgroundColor:'pink',
        marginBottom:15,
        paddingHorizontal:15,
        paddingVertical:6
    }
})

export default ScreenLoginUI;