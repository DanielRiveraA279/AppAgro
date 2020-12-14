import React, {Component} from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';
import Dashboard from 'react-native-dashboard';
import styles from '../assets/styles/Home';

const items = [
  {
    name: 'Nuevo',
    background: '#3399D9',
    icon: 'user',
  },
  {
    name: 'Sincronizar',
    background: '#3399D9',
    icon: 'upload',
  },
  {
    name: 'Perfil',
    background: '#3399D9',
    icon: 'check-circle',
  },

  {
    name: 'Salir',
    background: '#3399D9',
    icon: 'close',
  },
];

const Home = ({navigation}) => {
  const _card = (el) => {
    switch (el.name) {
      case 'Nuevo':
        navigation.navigate('NewProducer');
        return;
      case 'Sincronizar':
        navigation.navigate('SyncUp');
        return;
      case 'Perfil':
        navigation.navigate('Setting');
        return;
      default:
        return console.log('Card: ' + 'Salir');
    }
    console.log('Card: ' + el.name);
  };

  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <Appbar.Header style={{backgroundColor: '#3399D9'}}>
          <Appbar.Content
            color="white"
            title="Produccion"
            subtitle={'Panel de Administraciòn'}
          />
        </Appbar.Header>
      </View>

      <Dashboard items={items} background={true} card={_card} column={2} />
    </View>
  );
};

export default Home;
