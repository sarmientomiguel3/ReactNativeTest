import React,{useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import firebase from '../database/firebase';
import {ListItem, Avatar} from 'react-native-elements';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = [];
    firebase.db.collection('users').onSnapshot(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        console.log(doc.data());
        users.push({
          id: doc.id,
          ...doc.data()
        });
      });
    });
   setUsers(users);
  }, []);

  return (
    <ScrollView>
      {
        users.map(user => {
          return (
            <ListItem
            key={user.id}
          >


          </ListItem>
          )
        })
      }
    </ScrollView>
  );
};

export default UsersList;
