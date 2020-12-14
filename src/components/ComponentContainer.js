import React from 'react';
import {View} from 'react-native';
import styles from '../assets/styles/components/ComponentContainer';

const ComponentContainer = ({children}) => {
  //props: tiene las propiedades de un componente
  return (
    <View style={styles.container}>
        {children}
    </View>
  );
};

export default ComponentContainer;
