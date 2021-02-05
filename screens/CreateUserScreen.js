import React, {useState} from 'react';
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native';
import firebase from '../database/firebase';

const CreateUserScreen = (props) => {
  const [datos, setDatos] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const handleChangeDatos = (name, value)=>{
    setDatos({...datos, [name]: value});
  };

  const SaveNewUser = async() => {
    if(datos.name===''){
      alert('name vacio');
    }
    else{
      await firebase.db.collection('users').add({
        name: datos.name,
        email: datos.email,
        phone: datos.phone
      });
      props.navigation.navigate('UsersList');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput 
        placeholder="Name User" 
        onChangeText={(value) => handleChangeDatos("name", value)}
      />
      </View>
      <View style={styles.inputGroup}>
        <TextInput 
        placeholder="Email User" 
        onChangeText={(value) => handleChangeDatos("email", value)}
      />
      </View>
      <View style={styles.inputGroup}>
        <TextInput 
        placeholder="Phone User" 
        onChangeText={(value) => handleChangeDatos("phone", value)}
      />
      </View>
      <View style={styles.inputGroup}>
        <Button 
        title="Save User" 
        onPress={()=> {SaveNewUser()}}
      />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  }
});

export default CreateUserScreen;
