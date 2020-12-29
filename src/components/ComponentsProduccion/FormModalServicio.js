import React from 'react';
import {View} from 'react-native';

import {
  Button,
  Modal,
  Portal,
  Title,
  Caption,
  TextInput,
} from 'react-native-paper';
import ComponentContainer from '../ComponentContainer';
import ComponentContainerGlobal from '../ComponentContainerGlobal';
import ComponentCheckBox from '../CheckBox';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal, servicio, setServicio}) => {
  const [checkedAgua, setCheckedAgua] = React.useState(false);
  const [checkedLuz, setCheckedLuz] = React.useState(false);
  const [checkedRedElectrica, setCheckedRedElectrica] = React.useState(false);
  const [checkedGrupElectrogeno, setCheckedGrupElectrogeno] = React.useState(
    false,
  );
  const [
    checkedGereradorHidraulico,
    setCheckedGereradorHidraulico,
  ] = React.useState(false);
  const [checkedPanelesSolares, setCheckedPanelesSolares] = React.useState(
    false,
  );

  const [tipoAgua, setTipoAgua] = React.useState('');
  const [tipoLuz, setTipoLuz] = React.useState('');

  const FormServicio = () => {
    const addProductionService = () => {
      const dataNew = {
        has_service_aqua: checkedAgua,
        type_service_aqua: tipoAgua,
        has_service_energy: checkedLuz,
        type_service_energy: tipoLuz,
        has_rural_energy: checkedRedElectrica,
        has_generator: checkedGrupElectrogeno,
        has_hydraulic_generator: checkedGereradorHidraulico,
        has_solar_panels: checkedPanelesSolares,
      };

      const dataOld = [];
      if (Object.keys(servicio).length !== 0) {
        servicio.map((item) => {
          dataOld.push(item);
        });
        setServicio([...dataOld, dataNew]);
      } else {
        setServicio([dataNew]);
      }

      setCheckedAgua(false);
      setCheckedLuz(false);
      setTipoLuz('');
      setTipoAgua('');
      setCheckedRedElectrica(false);
      setCheckedGrupElectrogeno(false);
      setCheckedGereradorHidraulico(false);
      setCheckedPanelesSolares(false);
    };

    return (
      <View style={styles.container}>
        <Title>Servicios</Title>
        <ComponentContainerGlobal>
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
        </ComponentContainerGlobal>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Tipos de Servicios</Caption>
        </View>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Luz"
              style={styles.TextInput}
              value={tipoLuz}
              onChangeText={(value) => setTipoLuz(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Agua"
              style={styles.TextInput}
              value={tipoAgua}
              onChangeText={(value) => setTipoAgua(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="Red Electrica Rural"
              disabled={false}
              value={checkedRedElectrica}
              onValueChange={(value) => setCheckedRedElectrica(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="Grupo Electrogeno"
              disabled={false}
              value={checkedGrupElectrogeno}
              onValueChange={(value) => setCheckedGrupElectrogeno(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="Generador Hidraulico"
              disabled={false}
              value={checkedGereradorHidraulico}
              onValueChange={(value) => setCheckedGereradorHidraulico(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="Paneles Solares"
              disabled={false}
              value={checkedPanelesSolares}
              onValueChange={(value) => setCheckedPanelesSolares(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <Button
              mode="text"
              style={styles.SectionRight__button}
              onPress={() => addProductionService()}>
              Guardar
            </Button>
            <Button
              mode="text"
              style={styles.SectionRight__button}
              onPress={() => hideModal()}>
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
        <FormServicio />
      </Modal>
    </Portal>
  );
};

export default FormModal;
