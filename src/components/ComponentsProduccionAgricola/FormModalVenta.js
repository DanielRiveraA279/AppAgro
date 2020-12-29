import React from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../ComponentContainer';
import ComponentContainerGlobal from '../ComponentContainerGlobal';
import ComponentCheckBox from '../CheckBox';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal, venta, setVenta}) => {
  const [checkedAcopiador, setCheckedAcopiador] = React.useState(false);
  const [checkedCooperativa, setCheckedCooperativa] = React.useState(false);
  const [checkedExportacion, setCheckedExportacion] = React.useState(false);
  const [checkedEmpacadora, setCheckedEmpacadora] = React.useState(false);
  const [checkedFeria, setCheckedFeria] = React.useState(false);
  const [checkedIndustria, setCheckedIndustria] = React.useState(false);
  const [checkedFrigorifico, setCheckedFrigorifico] = React.useState(false);

  const FormVenta = () => {
    const addSalesChannel = () => {
      const dataNew = {
        is_collector: checkedAcopiador,
        is_cooperative: checkedCooperativa,
        is_exporter: checkedExportacion,
        use_baler: checkedEmpacadora,
        use_fair: checkedFeria,
        use_industry: checkedIndustria,
        use_fridge: checkedFrigorifico,
      };

      const dataOld = [];

      if (Object.keys(venta).length !== 0) {
        venta.map((item) => {
          dataOld.push(item);
        });
        setVenta([...dataOld, dataNew]);
      } else {
        setVenta([dataNew]);
      }

      setCheckedAcopiador(false);
      setCheckedCooperativa(false);
      setCheckedExportacion(false);
      setCheckedEmpacadora(false);
      setCheckedFeria(false);
      setCheckedIndustria(false);
      setCheckedFrigorifico(false);
      
    };

    return (
      <View style={styles.container}>
        <Title>Canal de Venta</Title>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="Acopiador"
              disabled={false}
              value={checkedAcopiador}
              onValueChange={(value) => setCheckedAcopiador(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
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
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
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
        </ComponentContainerGlobal>
        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="Industria"
              disabled={false}
              value={checkedIndustria}
              onValueChange={(value) => setCheckedIndustria(value)}
            />
            <ComponentCheckBox
              title="Frigorifico"
              disabled={false}
              value={checkedFrigorifico}
              onValueChange={(value) => setCheckedFrigorifico(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <Button
              mode="text"
              style={styles.SectionRight__button}
              onPress={() => addSalesChannel()}>
              Guardar
            </Button>
            <Button mode="text" style={styles.SectionRight__button} onPress={hideModal}>
              Cancelar
            </Button>
          </ComponentContainer>
        </ComponentContainerGlobal>
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
