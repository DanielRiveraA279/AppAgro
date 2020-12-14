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
  const [checkedTenencia, setCheckedTenencia] = React.useState('');
  const [checkedTitulo, setCheckedTitulo] = React.useState(false);

  const FormTitulo = () => {
    return (
      <View style={styles.container}>
        <Title>Titulos</Title>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Tenencia</Caption>
        </View>
        <ComponentContainer>
          <ComponentRadioButton
            title="Arriendatario"
            value="arriendatario"
            status={checkedTenencia === 'arriendatario' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTenencia('arriendatario')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Propietario"
            value="propietario"
            status={checkedTenencia === 'propietario' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTenencia('propietario')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Titulo"
            disabled={false}
            value={checkedTitulo}
            onValueChange={(value) => setCheckedTitulo(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Matricula Catastral"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Padron de Riego"
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
            <FormTitulo />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
