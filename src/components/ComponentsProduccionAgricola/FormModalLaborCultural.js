import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../ComponentContainer';
import ComponentCheckBox from '../CheckBox';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {
  const [checkedAplicacionFertilizante, setCheckedAplicacionFertilizante] = React.useState(false);
  const [checkedAbonoOrganico, setCheckedAbonoOrganico] = React.useState(false);
  const [checkedUtilFeromonas, setCheckedUtilFeromonas] = React.useState(false);
  const [checkedContrHeladas, setCheckedContrHeladas] = React.useState(false);

  const FormInstalacion = () => {
    return (
      <View style={styles.container}>
        <Title>Labor Cultural</Title>
        <ComponentContainer>
          <ComponentCheckBox
            title="Aplicacion de Fertilizantes"
            disabled={false}
            value={checkedAplicacionFertilizante}
            onValueChange={(value) => setCheckedAplicacionFertilizante(value)}
          />
        </ComponentContainer>
        <ComponentContainer>
          <ComponentCheckBox
            title="Abono Organico"
            disabled={false}
            value={checkedAbonoOrganico}
            onValueChange={(value) => setCheckedAbonoOrganico(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Utiliz. de Feromonas"
            disabled={false}
            value={checkedUtilFeromonas}
            onValueChange={(value) => setCheckedUtilFeromonas(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Control de Heladas"
            value={checkedContrHeladas}
            onValueChange={(value) => setCheckedContrHeladas(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput mode="outlined" label="Otros" style={styles.TextInput} />
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={hideModal}>
            Guardar
          </Button>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={hideModal}>
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
        <FormInstalacion />
      </Modal>
    </Portal>
  );
};

export default FormModal;
