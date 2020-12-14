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
  const [checked, setChecked] = React.useState('first');
  const [isSelectedFemenino, setSelectionFemenino] = React.useState(true);

  const FormAvicultura = () => {
    return (
      <View>
        <Title>Ciclo Avicultura</Title>

        <ComponentContainer>
          <ComponentCheckBox
            title="Avicultura Intensiva"
            value={true}
            onValueChange={setSelectionFemenino}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Planta de Incuvacion"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Machos Reproductores"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Huevos incubables y Pollos bebes"
            value={true}
            onValueChange={setSelectionFemenino}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Incubadoras"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Parrillero en Engorde"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Ponedores Reproductores"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Existencia</Caption>
        </View>

        <ComponentContainer>
          <ComponentCheckBox
            title="Gallinas"
            value={true}
            onValueChange={setSelectionFemenino}
          />
          <ComponentCheckBox
            title="Gallos"
            value={true}
            onValueChange={setSelectionFemenino}
          />
          <ComponentCheckBox
            title="Pollos"
            value={true}
            onValueChange={setSelectionFemenino}
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
            <FormAvicultura />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
