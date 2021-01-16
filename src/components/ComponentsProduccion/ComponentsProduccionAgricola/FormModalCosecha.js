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

import ComponentContainer from '../../ComponentContainer';
import ComponentContainerGlobal from '../../ComponentContainerGlobal';

import ComponentCheckBox from '../../CheckBox';
import styles from '../../../assets/styles/components/Modals';

const FormModal = ({cosecha, setCosecha}) => {
  const [checkedCortinas, setCheckedCortinas] = React.useState(false);
  const [superficie, setSuperficie] = React.useState('');
  const [rendimiento, setRemdimiento] = React.useState('');
  const [lonPlanta, setLonPlanta] = React.useState('');
  const [espcie, setEspecie] = React.useState('');
  const [epoca, setEpoca] = React.useState('');

  const addAgriculturalHarvest = () => {
    const dataNew = {
      harvest_surface: superficie,
      tons_production: rendimiento,
      has_curtains_insulated: checkedCortinas,
      plant_length_curtains: lonPlanta,
      plant_species_curtains: espcie,
      harvest_time: epoca,
    };

    setCosecha([dataNew]);
  };

  return (
    <View style={styles.container}>
      <Title>Cosecha</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Superficie Cosecha(Hectarias)"
            style={styles.TextInput}
            value={superficie}
            onChangeText={(value) => setSuperficie(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Rendimiento (Toneladas)"
            style={styles.TextInput}
            value={rendimiento}
            onChangeText={(value) => setRemdimiento(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentCheckBox
            title="Cortinas y Aislada"
            disabled={false}
            value={checkedCortinas}
            onValueChange={(value) => setCheckedCortinas(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Caption>Nivel de Daño</Caption>
      </View>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Longitud de Plantas"
            style={styles.TextInput}
            value={lonPlanta}
            onChangeText={(value) => setLonPlanta(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Especie de Plantas"
            style={styles.TextInput}
            value={espcie}
            onChangeText={(value) => setEspecie(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Epoca de Cosecha"
            style={styles.TextInput}
            value={epoca}
            onChangeText={(value) => setEpoca(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={() => addAgriculturalHarvest()}>
            Guardar
          </Button>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}>
            Cancelar
          </Button>
        </ComponentContainer>
      </ComponentContainerGlobal>
    </View>
  );
};

export default FormModal;
