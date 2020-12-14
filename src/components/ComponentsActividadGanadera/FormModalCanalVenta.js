import React from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../ComponentContainer';
import ComponentCheckBox from '../CheckBox';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {
  const [checked, setChecked] = React.useState('first');
  const [isSelectedFemenino, setSelectionFemenino] = React.useState(true);

  const FormCanalVenta = () => {
    return (
      <View>
        <Title>Canal de Venta</Title>
        <ComponentContainer>
          <ComponentCheckBox
            title="Acopiador"
            value={true}
            onValueChange={setSelectionFemenino}
          />
          <ComponentCheckBox
            title="Cooperativa"
            value={true}
            onValueChange={setSelectionFemenino}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Exportacion"
            value={true}
            onValueChange={setSelectionFemenino}
          />
          <ComponentCheckBox
            title="Empacadora"
            value={true}
            onValueChange={setSelectionFemenino}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Por Feria"
            value={true}
            onValueChange={setSelectionFemenino}
          />
          <ComponentCheckBox
            title="Industria"
            value={true}
            onValueChange={setSelectionFemenino}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Frigorifico"
            value={true}
            onValueChange={setSelectionFemenino}
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
            <FormCanalVenta />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
