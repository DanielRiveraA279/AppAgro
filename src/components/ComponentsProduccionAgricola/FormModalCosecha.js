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
  const [checkedCortinas, setCheckedCortinas] = React.useState(false);

  const FormCosecha = () => {
    return (
      <View style={styles.container}>
        <Title>Cosecha</Title>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Superficie Cosecha(Hectarias)"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Rendimiento (Toneladas)"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Cortinas y Aislada"
            disabled={false}
            value={checkedCortinas}
            onValueChange={(value) => setCheckedCortinas(value)}
          />
        </ComponentContainer>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Nivel de Daño</Caption>
        </View>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Longitud de Plantas"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Especie de Plantas"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Epoca de Cosecha"
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
        <FormCosecha />
      </Modal>
    </Portal>
  );
};

export default FormModal;
