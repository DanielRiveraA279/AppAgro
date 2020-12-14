import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../ComponentContainer';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {
  const FormHerramienta = () => {
    return (
      <View style={styles.container}>
        <Title>Herramientas</Title>
        <ComponentContainer>
          <TextInput mode="outlined" label="Nombre" style={styles.TextInput} />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput mode="outlined" label="Tipo" style={styles.TextInput} />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad"
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
        <FormHerramienta />
      </Modal>
    </Portal>
  );
};

export default FormModal;
