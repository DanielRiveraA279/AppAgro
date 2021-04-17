import React from 'react';
import {View} from 'react-native';

import {TextInput, Button, Title} from 'react-native-paper';

import ComponentContainer from '../../ComponentContainer';
import ComponentContainerGlobal from '../../ComponentContainerGlobal';
import styles from '../../../assets/styles/components/Modals';
import MessageError from '../../MessageError';

const FormModal = ({clima, setClima}) => {
  const [descripcion, setDescripcion] = React.useState('');
  const [factor, setFactor] = React.useState('');
  const [riesgo, setRiesgo] = React.useState('bajo');

  const ShowAlert = () => {
    MessageError('Datos Faltantes', 'Existe campo/s vacio/s');
  };

  const addAgriculturalClimatic = () => {
    if (factor.trim() === '') {
      ShowAlert();
    } else {
      const dataNew = {
        factor: factor,
        risk: riesgo,
        description: descripcion,
      };

      let dataOld = [];

      if (Object.keys(clima).length !== 0) {
        clima.map((item) => {
          dataOld.push(item);
        });
        setClima([...dataOld, dataNew]);
      } else {
        setClima([dataNew]);
      }
      setFactor('');
      setRiesgo('bajo');
      setCheckedNivel('');
    }
  };

  return (
    <View style={styles.container}>
      <Title>Factores Climaticos</Title>
      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            value={factor}
            label="Factor Climatico"
            style={styles.TextInput}
            onChangeText={(value) => setFactor(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>
      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            value={riesgo}
            label="Riesgo"
            style={styles.TextInput}
            onChangeText={(value) => setRiesgo(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            value={descripcion}
            label="Descripcion"
            style={styles.TextInput}
            onChangeText={(value) => setDescripcion(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addAgriculturalClimatic()}>
            Guardar
          </Button>
          <Button
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}>
            Cancelar
          </Button>
        </ComponentContainer>
      </ComponentContainerGlobal>
    </View>
  );
};

export default FormModal;
