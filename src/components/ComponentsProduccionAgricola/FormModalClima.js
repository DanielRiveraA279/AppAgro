import React from 'react';
import {View, ScrollView} from 'react-native';

import {
  TextInput,
  Button,
  Modal,
  Portal,
  Title,
  Caption,
} from 'react-native-paper';

import ComponentContainer from '../ComponentContainer';
import ComponentContainerGlobal from '../ComponentContainerGlobal';
import ComponentRadioButton from '../RadioButton';
import styles from '../../assets/styles/components/Modals';
import MessageError from '../MessageError';

const FormModal = ({visible, hideModal, clima, setClima}) => {
  const [checkedNivel, setCheckedNivel] = React.useState(false);
  const [factor, setFactor] = React.useState('');
  const [riesgo, setRiesgo] = React.useState('');

  const FormClima = () => {
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
          damange_level: checkedNivel,
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
        setRiesgo('');
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Nivel de Daño</Caption>
        </View>
        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentRadioButton
              title="Nulo"
              value={checkedNivel}
              status={checkedNivel === 'nulo' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedNivel('nulo')}
              color="#008577"
            />
            <ComponentRadioButton
              title="Bajo"
              value={checkedNivel}
              status={checkedNivel === 'bajo' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedNivel('bajo')}
              color="#008577"
            />

            <ComponentRadioButton
              title="Medio"
              value={checkedNivel}
              status={checkedNivel === 'medio' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedNivel('medio')}
              color="#008577"
            />

            <ComponentRadioButton
              title="Alto"
              value={checkedNivel}
              status={checkedNivel === 'alto' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedNivel('alto')}
              color="#008577"
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <Button
              mode="text"
              style={styles.SectionRight__button}
              onPress={() => addAgriculturalClimatic()}>
              Guardar
            </Button>
            <Button
              mode="text"
              style={styles.SectionRight__button}
              onPress={hideModal}>
              Cancelar
            </Button>
          </ComponentContainer>
        </ComponentContainerGlobal>
      </View>
    );
  };

  return (
    <Portal>
      <Modal
        animationType="slide"
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.container}>
        <FormClima />
      </Modal>
    </Portal>
  );
};

export default FormModal;
