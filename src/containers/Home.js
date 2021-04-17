import React, {useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {View, BackHandler} from 'react-native';
import {Appbar} from 'react-native-paper';
import Dashboard from 'react-native-dashboard';
import styles from '../assets/styles/Home';

const items = [
  {
    name: 'Nuevo',
    background: '#172B4D',
    icon: 'user',
  },
  {
    name: 'Sincronizar',
    background: '#172B4D',
    icon: 'upload',
  },
  {
    name: 'Perfil',
    background: '#172B4D',
    icon: 'check-circle',
  },

  {
    name: 'Salir',
    background: '#172B4D',
    icon: 'close',
  },
];

const Home = ({navigation}) => {
  useEffect(() => {
    Geolocation.getCurrentPosition((info) => console.log(info.coords));
  });

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
        BackHandler.exitApp();
    }
    console.log('Card: ' + el.name);
  };

  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <Appbar.Header style={{backgroundColor: '#172B4D'}}>
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
