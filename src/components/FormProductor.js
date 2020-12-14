import React from 'react';
import {View} from 'react-native';
import {TextInput, Button, Title, Caption} from 'react-native-paper';
import ComponentContainer from './ComponentContainer';
import ComponentRadioButton from './RadioButton';

const FormProductor = ({
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
}) => {
  const [checked, setChecked] = React.useState('');

  //accion del boton
  const siguientePaso = () => {
    if (currentPosition === 0) {
      setCurrentPosition(currentPosition + 1);
    } else {
      setCurrentPosition(0);
    }
  };

  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <Title style={styles.header_title}>{titulo}</Title>
      </View>

      <ComponentContainer>
        <TextInput mode="outlined" label="Nombre" style={styles.TextInput} />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput mode="outlined" label="Apellido" style={styles.TextInput} />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          label="Fecha Nac."
          style={styles.TextInput}
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput mode="outlined" label="DNI" style={styles.TextInput} />
      </ComponentContainer>

      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Caption>Sexo</Caption>
      </View>

      <ComponentContainer>
        <ComponentRadioButton
          title="Femenino"
          value="femenino"
          status={checked === 'femenino' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('femenino')}
          color="#008577"
        />
        <ComponentRadioButton
          title="Masculino"
          value="masculino"
          status={checked === 'masculino' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('masculino')}
          color="#008577"
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput mode="outlined" label="Telèfono" style={styles.TextInput} />
      </ComponentContainer>

      <ComponentContainer>
        <Button
          mode="outlined"
          onPress={() => siguientePaso()}
          style={styles.SectionRight__button}>
          Siguiente
        </Button>
      </ComponentContainer>
    </View>
  );
};

export default FormProductor;
