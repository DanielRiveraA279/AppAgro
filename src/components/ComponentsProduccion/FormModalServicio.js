import React from 'react';
import {View, ScrollView} from 'react-native';

import {
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
  const [checkedAgua, setCheckedAgua] = React.useState(false);
  const [checkedLuz, setCheckedLuz] = React.useState(false);
  const [checkedRedElectrica, setCheckedRedElectrica] = React.useState(false);
  const [checkedGrupElectrogeno, setCheckedGrupElectrogeno] = React.useState(false);
  const [checkedGereradorHidraulico, setCheckedGereradorHidraulico] = React.useState(false);
  const [checkedPanelesSolares, setCheckedPanelesSolares] = React.useState(false);
 
  const FormServicio = () => {
    return (
      <View style={styles.container}>
        <Title>Servicios</Title>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Tipos de Servicios</Caption>
        </View>
        <ComponentContainer>
          <ComponentCheckBox
            title="Agua"
            disabled={false}
            value={checkedAgua}
            onValueChange={(value) => setCheckedAgua(value)}
          />
          <ComponentCheckBox
            title="Luz"
            disabled={false}
            value={checkedLuz}
            onValueChange={(value) => setCheckedLuz(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Red Electrica Rural"
            disabled={false}
            value={checkedRedElectrica}
            onValueChange={(value) => setCheckedRedElectrica(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Grupo Electrogeno"
            disabled={false}
            value={checkedGrupElectrogeno}
            onValueChange={(value) => setCheckedGrupElectrogeno(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Generador Hidraulico"
            disabled={false}
            value={checkedGereradorHidraulico}
            onValueChange={(value) => setCheckedGereradorHidraulico(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Paneles Solares"
            disabled={false}
            value={checkedPanelesSolares}
            onValueChange={(value) => setCheckedPanelesSolares(value)}
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
            <FormServicio />
          </Modal>
        </Portal>
  );
};

export default FormModal;
