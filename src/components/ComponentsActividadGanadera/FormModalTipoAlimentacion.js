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
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {
  const [checkedTipoAlimentacion, setCheckedTipoAlimentacion] = React.useState('');

  const FormTipoAlimento = () => {
    return (
      <View>
        <Title>Alimentacion</Title>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Alimento"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Tipo de Alimentacion</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Propia"
            value="propia"
            status={checkedTipoAlimentacion === 'propia' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoAlimentacion('propia')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Compra"
            value="compra"
            status={checkedTipoAlimentacion === 'compra' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoAlimentacion('compra')}
            color="#008577"
          />

          <ComponentRadioButton
            title="Trueque"
            value="trueque"
            status={checkedTipoAlimentacion === 'trueque' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoAlimentacion('trueque')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentRadioButton
            title="Donaciones"
            value="donaciones"
            status={checkedTipoAlimentacion === 'donaciones' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoAlimentacion('donaciones')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Naturales"
            value="naturales"
            status={checkedTipoAlimentacion === 'naturales' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoAlimentacion('naturales')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Razones Diarias"
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
            <FormTipoAlimento />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
