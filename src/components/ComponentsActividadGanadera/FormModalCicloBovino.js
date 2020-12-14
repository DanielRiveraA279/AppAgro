import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../ComponentContainer';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {
  const FormCicloBovino = () => {
    return (
      <ScrollView>
        <View>
          <Title>Ciclo Bovino</Title>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Terneros Menores de 1 año"
              style={styles.TextInput}
            />
          </ComponentContainer>

          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Vaquillonas 1 a 2 años"
              style={styles.TextInput}
            />
          </ComponentContainer>

          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Vaquillonas mas de 2 años"
              style={styles.TextInput}
            />
          </ComponentContainer>

          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Cantidad de Vacas"
              style={styles.TextInput}
            />
          </ComponentContainer>

          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Novillos de 1 a 2 años"
              style={styles.TextInput}
            />
          </ComponentContainer>

          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Novillos mas de 2 años"
              style={styles.TextInput}
            />
          </ComponentContainer>

          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Toritos de 1 a 2 años"
              style={styles.TextInput}
            />
          </ComponentContainer>

          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Toros mas de 2 años"
              style={styles.TextInput}
            />
          </ComponentContainer>

          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Bueyes y Torunos"
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
      </ScrollView>
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
            <FormCicloBovino />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
