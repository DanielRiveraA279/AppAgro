import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../../ComponentContainer';
import ComponentContainerGlobal from '../../ComponentContainerGlobal';

import ComponentCheckBox from '../../CheckBox';
import styles from '../../../assets/styles/components/Modals';
import MessageError from '../../MessageError';

const FormModal = ({cultural, setCultural}) => {
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

  const addProducAgricultural = () => {
    const dataNew = {
      use_fertilizers: checkedAplicacionFertilizante,
      use_food_organic: checkedAbonoOrganico,
      use_pheromones: checkedUtilFeromonas,
      use_hail_mesh: checkMallaAntiGranizo,
      make_frost_control: checkedContrHeladas,
      other_practices: otro,
    };

    setCultural([dataNew]);

    setCheckedAplicacionFertilizante(false);
    setCheckedAbonoOrganico(false);
    setCheckedUtilFeromonas(false);
    setCheckMallaAntiGranizo(false);
    setCheckedContrHeladas(false);
    setOtro('');
  };

  return (
    <View style={styles.container}>
      <Title>Labor Cultural</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentCheckBox
            title="Aplicación de Fertilizantes"
            disabled={false}
            value={checkedAplicacionFertilizante}
            onValueChange={(value) => setCheckedAplicacionFertilizante(value)}
          />
          <ComponentCheckBox
            title="Abono Orgánico"
            disabled={false}
            value={checkedAbonoOrganico}
            onValueChange={(value) => setCheckedAbonoOrganico(value)}
          />
          <ComponentCheckBox
            title="Utiliz. de Hormonas"
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
          <Button color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addProducAgricultural()}>
            Guardar
          </Button>
          <Button color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}>
            Cancelar
          </Button>
        </ComponentContainer>
      </ComponentContainerGlobal>
    </View>
  );
};

export default FormModal;
