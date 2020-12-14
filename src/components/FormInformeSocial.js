import React from 'react';
import {View} from 'react-native';
import {TextInput, Button, Title} from 'react-native-paper';
import ComponentContainer from './ComponentContainer';

const FormInformeSocial = ({
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
}) => {
  //accion del boton
  const nextStep = () => {
    if (currentPosition === 3) {
      setCurrentPosition(currentPosition + 1);
      console.log('InformeSocial: ' + currentPosition);
    } else {
      setCurrentPosition(3);
    }
  };

  const backStep = () => {
    if (currentPosition === 3) {
      setCurrentPosition(currentPosition - 1);
      console.log('posicion actual ' + currentPosition);
    } else {
      setCurrentPosition(3);
    }
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Title style={styles.header_title}>{titulo}</Title>
      </View>

      <ComponentContainer>
        <TextInput mode="outlined" label="Domicilio" style={styles.TextInput} />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          label="Tipo de Residencia"
          style={styles.TextInput}
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          label="Condiciòn de Vivienda"
          style={styles.TextInput}
        />
      </ComponentContainer>

      <ComponentContainer>
        <Button
          mode="outlined"
          onPress={backStep}
          style={styles.SectionRight__button}>
          Anterior
        </Button>
        <Button
          mode="outlined"
          onPress={nextStep}
          style={styles.SectionRight__button}>
          Siguiente
        </Button>
      </ComponentContainer>
    </View>
  );
};

export default FormInformeSocial;
