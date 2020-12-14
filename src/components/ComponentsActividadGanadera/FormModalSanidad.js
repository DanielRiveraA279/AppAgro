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
import ComponentRadioButton from '../RadioButton';
import ComponentCheckBox from '../CheckBox';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {
  const [checked, setChecked] = React.useState('first');
  const [isSelectedFemenino, setSelectionFemenino] = React.useState(true);

  const FormSanidad = () => {
    return (
      <View>
        <Title>Sanidad</Title>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Tipo de Acesoramiento</Caption>
        </View>
        <ComponentContainer>
          <ComponentRadioButton
            title="Privado"
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Publico"
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Aplicacion Complejo Vitaminico"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Desparacitacion</Caption>
        </View>

        <ComponentContainer>
          <ComponentCheckBox
            title="externa"
            CheckBox
            value={true}
            onValueChange={setSelectionFemenino}
          />
          <ComponentCheckBox
            title="interna"
            CheckBox
            value={true}
            onValueChange={setSelectionFemenino}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Tipo de Antiparasitario"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Tipo de Enfermedad</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Zoonotica"
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Propia"
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Vacunacion"
            value={true}
            onValueChange={setSelectionFemenino}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Tipo de Vacuna"
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
    <>
      <ScrollView>
        <Portal>
          <Modal
            animationType="slide"
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.container}>
            <FormSanidad />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
