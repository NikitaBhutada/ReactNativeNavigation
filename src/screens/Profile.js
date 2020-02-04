import React from 'react';
import {View, Text , StyleSheet , TouchableHighlight, TextInput, Image}  from 'react-native';


const Profile = ({navigation}) => {

   
    return(
     
     <View style={styles.container}>

      <View>
        <Image
          style={{width: 200, height: 200, marginTop:20, marginBottom:20 }}
          source={require('../images/Profile3.png')}
        />
        </View>
        <View style={styles.inputContainer}>
        
          <TextInput   
          style={styles.inputs}
     
              placeholder="Enter your first name"
            />
        </View>
        
        <View style={styles.inputContainer}>
            <TextInput  style={styles.inputs}
              placeholder="Enter your last name"
         />
        </View>

        <View style={styles.inputContainer}>
            <TextInput  style={styles.inputs}
              placeholder="Enter your Mobile Number"
         />
        </View>

        
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=>navigation.navigate('Dashboard')}>
          <Text style={styles.loginText}>Go To Dashboard</Text>
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
        alignItems:'center',
      
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
  
   export default Profile; 