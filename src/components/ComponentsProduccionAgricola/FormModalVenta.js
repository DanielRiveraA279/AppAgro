import React from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../ComponentContainer';
import ComponentCheckBox from '../CheckBox';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {
  const [checkedAcopiador, setCheckedAcopiador] = React.useState(false);
  const [checkedCooperativa, setCheckedCooperativa] = React.useState(false);
  const [checkedExportacion, setCheckedExportacion] = React.useState(false);
  const [checkedEmpacadora, setCheckedEmpacadora] = React.useState(false);
  const [checkedFeria, setCheckedFeria] = React.useState(false);
  const [checkedIndustria, setCheckedIndustria] = React.useState(false);
  const [checkedFrigorifico, setCheckedFrigorifico] = React.useState(false);
 
  const FormVenta = () => {
    return (
      <View style={styles.container}>
        <Title>Canal de Venta</Title>

        <ComponentContainer>
          <ComponentCheckBox
            title="Acopiador"
            disabled={false}
            value={checkedAcopiador}
            onValueChange={(value) => setCheckedAcopiador(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Cooperativa"
            disabled={false}
            value={checkedCooperativa}
            onValueChange={(value) => setCheckedCooperativa(value)}
          />
          <ComponentCheckBox
            title="Exportacion"
            disabled={false}
            value={checkedExportacion}
            onValueChange={(value) => setCheckedExportacion(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Empacadora"
            disabled={false}
            value={checkedEmpacadora}
            onValueChange={(value) => setCheckedEmpacadora(value)}
          />
          <ComponentCheckBox
            title="Por Feria"
            disabled={false}
            value={checkedFeria}
            onValueChange={(value) => setCheckedFeria(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Industria"
            disabled={false}
            value={checkedIndustria}
            onValueChange={(value)=> setCheckedIndustria(value)}
          />
          <ComponentCheckBox
            title="Frigorifico"
            disabled={false}
            value={checkedFrigorifico}
            onValueChange={(value) => setCheckedFrigorifico(value)}
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
        <FormVenta />
      </Modal>
    </Portal>
  );
};

export default FormModal;
