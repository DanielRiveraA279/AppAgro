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
  const [checkedMateriaPrima, setCheckedMateriaPrima] = React.useState('');
 
  const FormArtesanal = () => {
    return (
      <View style={styles.container}>
        <Title>Producto Artesanal</Title>
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
            label="Cantidad"
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
            <Caption>Materia Prima</Caption>
          </View>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Local"
            value="local"
            status={checkedMateriaPrima === 'local' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedMateriaPrima('local')}
            color="#008577"
          />
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
            label="Precio Artesania"
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
        <FormArtesanal />
      </Modal>
    </Portal>
  );
};

export default FormModal;
