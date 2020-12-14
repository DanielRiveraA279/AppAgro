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

  const FormAcuicultura = () => {
    return (
      <View>
        <Title>Ciclo Acuicultura</Title>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Orientacion</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Completo"
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Engorde"
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentRadioButton
            title="Cria de Alevinos/Juveniles"
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color="#008577"
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
            title="Pacu"
            value={true}
            onValueChange={setSelectionFemenino}
          />
          <ComponentCheckBox
            title="Carpas"
            value={true}
            onValueChange={setSelectionFemenino}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Tilapia"
            value={true}
            onValueChange={setSelectionFemenino}
          />
          <ComponentCheckBox
            title="Sabalo"
            value={true}
            onValueChange={setSelectionFemenino}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Trucha"
            value={true}
            onValueChange={setSelectionFemenino}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput mode="outlined" label="Otros" style={styles.TextInput} />
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
            <FormAcuicultura />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
