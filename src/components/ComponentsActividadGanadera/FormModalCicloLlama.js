import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../ComponentContainer';
import ComponentContainerGlobal from '../ComponentContainerGlobal';

import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {
  const FormCicloLlama = () => {
    return (
      <View>
        <Title>Ciclo Llamas</Title>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Cantidad de Chitas y Tekes"
              style={styles.TextInput}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Cantidad de Maltonas y Maltones"
              style={styles.TextInput}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Cantidad de Janachos"
              style={styles.TextInput}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Cantidad de llamas madres"
              style={styles.TextInput}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Cantidad de Capones"
              style={styles.TextInput}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <Button mode="text" style={styles.SectionRight__button}>
              Guardar
            </Button>
            <Button mode="text" style={styles.SectionRight__button}>
              Cancelar
            </Button>
          </ComponentContainer>
        </ComponentContainerGlobal>
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
            <FormCicloLlama />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
