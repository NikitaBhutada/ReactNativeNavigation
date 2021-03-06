import React, { useState } from 'react';
import {View , Text , StyleSheet ,   TouchableHighlight ,TextInput, Alert}  from 'react-native';

const Login = ({navigation}) => {
const [username,setusername] = useState('');
const [password,setpassword] = useState('');
const validate = () => {
if(username == 'username' && password =='harbinger')
 navigation.navigate('Dashboard')
 else
Alert.alert("Invalid credentials")
}

return (

<View style={styles.container}>
<View style={styles.inputContainer}>

  <TextInput onChangeText= {(text)=>setusername(text)} value={username}  style={styles.inputs}
      placeholder="Username"
    />
</View>

<View style={styles.inputContainer}>
    <TextInput onChangeText= {(text)=>setpassword(text)} value={password} style={styles.inputs}
      placeholder="Password"
      secureTextEntry={true}
     />
</View>

<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=>validate()}>
  <Text style={styles.loginText}>Login</Text>
</TouchableHighlight>

</View>


);
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    }
  });
  
  

export default Login;