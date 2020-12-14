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
import ComponentCheckBox from '../CheckBox';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {
  const [checkedEnfermedad, setCheckedEnfermedad] = React.useState(false);
  const [checkedPlagas, setCheckedPlagas] = React.useState(false);
  const [checkedMaleza, setCheckedMaleza] = React.useState(false);
  const [checkedContrPlaga, setCheckedContrPlaga] = React.useState(false);
  const [checkedPlaguicida, setCheckedPlaguicida] = React.useState(false);

  const FormPlaga = () => {
    return (
      <View style={styles.container}>
        <Title>Plagas/Enfermedades/Maleza</Title>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Tipo</Caption>
        </View>
        <ComponentContainer>
          <ComponentCheckBox
            title="Enfermedad"
            disabled={false}
            value={checkedEnfermedad}
            onValueChange={(value) => setCheckedEnfermedad(value)}
          />
          <ComponentCheckBox
            title="Plagas"
            disabled={false}
            value={checkedPlagas}
            onValueChange={(value) => setCheckedPlagas(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Maleza"
            disabled={false}
            value={checkedMaleza}
            onValueChange={(value) => setCheckedMaleza(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Descripcion"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Control de Plaga"
            disabled={false}
            value={checkedContrPlaga}
            onValueChange={(value) => setCheckedContrPlaga(value)}
          />
          <ComponentCheckBox
            title="Plaguicida"
            disabled={false}
            value={checkedPlaguicida}
            onValueChange={(value) => setCheckedPlaguicida(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Tipo de Plaguicida"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Otras Practicas"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <Button mode="text" style={styles.SectionRight__button}>
            Guardar
          </Button>
          <Button mode="text" style={styles.SectionRight__button}>
            Cancelar
          </Button>
        </ComponentContainer>
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
        <FormPlaga />
      </Modal>
    </Portal>
  );
};

export default FormModal;
