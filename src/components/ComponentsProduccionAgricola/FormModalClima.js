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
  const [checkedNulo, setCheckedNulo] = React.useState(false);
  const [checkedBajo, setCheckedBajo] = React.useState(false);
  const [checkedMedio, setCheckedMedio] = React.useState(false);
  const [checkedAlto, setCheckedAlto] = React.useState(false);

  const FormClima = () => {
    return (
      <View style={styles.container}>
        <Title>Factores Climaticos</Title>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Factor Climatico"
            style={styles.TextInput}
          />
        </ComponentContainer>
        <ComponentContainer>
          <TextInput mode="outlined" label="Riesgo" style={styles.TextInput} />
        </ComponentContainer>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Nivel de Daño</Caption>
        </View>

        <ComponentContainer>
          <ComponentCheckBox
            title="Nulo"
            disabled={false}
            value={checkedNulo}
            onValueChange={(value) => setCheckedNulo(value)}
          />
          <ComponentCheckBox
            title="Bajo"
            disabled={false}
            value={checkedBajo}
            onValueChange={(value) => setCheckedBajo(value)}
          />
          <ComponentCheckBox
            title="Medio"
            disabled={false}
            value={checkedMedio}
            onValueChange={(value) => setCheckedMedio(value)}
          />
        </ComponentContainer>
        <ComponentContainer>
          <ComponentCheckBox
            title="Alto"
            disabled={false}
            value={checkedAlto}
            onValueChange={(value) => setCheckedAlto(value)}
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
        <FormClima />
      </Modal>
    </Portal>
  );
};

export default FormModal;
