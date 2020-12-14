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
  const [checkedOrigen, setCheckedOrigen] = React.useState('');
  const [checkedMateriaPrima, setCheckedMateriaPrima] = React.useState('');

  const FormAlimentario = () => {
    return (
      <View style={styles.container}>
        <Title>Producto Alimentario</Title>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Descripcion"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Vigencia Producto"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Caption>Origen</Caption>
          </View>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Vegetal"
            value="vegetal"
            status={checkedOrigen === 'vegetal' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrigen('vegetal')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Animal"
            value="animal"
            status={checkedOrigen === 'animal' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrigen('animal')}
            color="#008577"
          />
        </ComponentContainer>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Caption>Materia Prima</Caption>
          </View>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Propia"
            value="propia"
            status={checkedMateriaPrima === 'propia' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedMateriaPrima('propia')}
            color="#008577"
          />

          <ComponentRadioButton
            title="Local"
            value="local"
            status={checkedMateriaPrima === 'local' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedMateriaPrima('local')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentRadioButton
            title="Externa"
            value="externa"
            status={checkedMateriaPrima === 'externa' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedMateriaPrima('externa')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Precio de lo Producido"
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
        <FormAlimentario />
      </Modal>
    </Portal>
  );
};

export default FormModal;
