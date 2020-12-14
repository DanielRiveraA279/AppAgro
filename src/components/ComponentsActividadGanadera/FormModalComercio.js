import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../ComponentContainer';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {
  const FormComercio = () => {
    return (
      <View>
        <Title>Comercializacion</Title>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad Faenados"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad Esquilados"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad Lana - Pelo Obtenido"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Produccion de Leche"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Destino de Leche"
            style={styles.TextInput}
          />
        </ComponentContainer>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Destino de la Lana"
            style={styles.TextInput}
          />
        </ComponentContainer>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Destino de la Piel"
            style={styles.TextInput}
          />
        </ComponentContainer>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Destino de Faenados"
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
            <FormComercio />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
