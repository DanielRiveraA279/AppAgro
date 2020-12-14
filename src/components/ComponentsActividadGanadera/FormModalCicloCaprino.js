import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../ComponentContainer';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {
  const FormCicloCaprino = () => {
    return (
      <View>
        <Title>Ciclo Caprino</Title>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Cabritas/os Menor 6 meses"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad Cabrillas 6 meses hasta paricion"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Cabras"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Capones"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad Machos Cabrios y Chivos"
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
    <>
      <ScrollView>
        <Portal>
          <Modal
            animationType="slide"
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.container}>
            <FormCicloCaprino />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
