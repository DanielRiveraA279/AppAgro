import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../ComponentContainer';
import ComponentContainerGlobal from '../ComponentContainerGlobal';

import ComponentCheckBox from '../CheckBox';
import styles from '../../assets/styles/components/Modals';
import MessageError from '../MessageError';

const FormModal = ({visible, hideModal, cultural, setCultural}) => {
  const [
    checkedAplicacionFertilizante,
    setCheckedAplicacionFertilizante,
  ] = React.useState(false);
  const [checkedAbonoOrganico, setCheckedAbonoOrganico] = React.useState(false);
  const [checkedUtilFeromonas, setCheckedUtilFeromonas] = React.useState(false);
  const [checkedContrHeladas, setCheckedContrHeladas] = React.useState(false);
  const [checkMallaAntiGranizo, setCheckMallaAntiGranizo] = React.useState(
    false,
  );
  const [otro, setOtro] = React.useState('');

  const FormInstalacion = () => {
    const addProducAgricultural = () => {
      if (checkedAbonoOrganico === false) {
        MessageError('Datos Faltantes', 'Existe campo/s vacio/s');
      } else {
        const dataNew = {
          use_fertilizers: checkedAplicacionFertilizante,
          use_food_organic: checkedAbonoOrganico,
          use_pheromones: checkedUtilFeromonas,
          use_hail_mesh: checkMallaAntiGranizo,
          make_frost_control: checkedContrHeladas,
          other_practices: otro,
        };

        const dataOld = [];

        if (Object.keys(cultural).length !== 0) {
          cultural.map((item) => {
            dataOld.push(item);
          });
          setCultural([...dataOld, dataNew]);
        } else {
          setCultural([dataNew]);
        }

        setCheckedAplicacionFertilizante(false);
        setCheckedAbonoOrganico(false);
        setCheckedUtilFeromonas(false);
        setCheckMallaAntiGranizo(false);
        setCheckedContrHeladas(false);
        setOtro('');
      }
    };

    return (
      <View style={styles.container}>
        <Title>Labor Cultural</Title>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="Aplicacion de Fertilizantes"
              disabled={false}
              value={checkedAplicacionFertilizante}
              onValueChange={(value) => setCheckedAplicacionFertilizante(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="Abono Organico"
              disabled={false}
              value={checkedAbonoOrganico}
              onValueChange={(value) => setCheckedAbonoOrganico(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="Utiliz. de Feromonas"
              disabled={false}
              value={checkedUtilFeromonas}
              onValueChange={(value) => setCheckedUtilFeromonas(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="Malla Anti Granizo"
              value={checkMallaAntiGranizo}
              onValueChange={(value) => setCheckMallaAntiGranizo(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="Control de Heladas"
              value={checkedContrHeladas}
              onValueChange={(value) => setCheckedContrHeladas(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Otros"
              style={styles.TextInput}
              value={otro}
              onChangeText={(value) => setOtro(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <Button
              mode="text"
              style={styles.SectionRight__button}
              onPress={() => addProducAgricultural()}>
              Guardar
            </Button>
            <Button
              mode="text"
              style={styles.SectionRight__button}
              onPress={hideModal}>
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
        <FormInstalacion />
      </Modal>
    </Portal>
  );
};

export default FormModal;
