import React from 'react';
import {View, Text , StyleSheet, TouchableHighlight }  from 'react-native';

const Dashboard = ({navigation}) => {

   
return(
<View>

<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=>navigation.navigate('Profile')}>
  <Text style={styles.loginText}>Navigate to Profile Page</Text>
</TouchableHighlight>
 </View>
);
};

const styles = StyleSheet.create({
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
      }
});

export default Dashboard;