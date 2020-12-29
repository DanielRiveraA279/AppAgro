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
import ComponentContainerGlobal from '../ComponentContainerGlobal';
import ComponentRadioButton from '../RadioButton';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {
  const [checkedOrientacion, setCheckedOrientacion] = React.useState(false);

  const FormCicloCunicultura = () => {
    return (
      <View>
        <Title>Ciclos Cunicultura</Title>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Orientacion</Caption>
        </View>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentRadioButton
              title="Carne"
              value="carne"
              status={checkedOrientacion === 'carne' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedOrientacion('carne')}
              color="#008577"
            />
            <ComponentRadioButton
              title="Pelo"
              value="pelo"
              status={checkedOrientacion === 'pelo' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedOrientacion('pelo')}
              color="#008577"
            />
            <ComponentRadioButton
              title="Piel"
              value="piel"
              status={checkedOrientacion === 'piel' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedOrientacion('piel')}
              color="#008577"
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Reproductores Machos"
              style={styles.TextInput}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Reproductores Hembra"
              style={styles.TextInput}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Cantidad Gazapos"
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
            <FormCicloCunicultura />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
