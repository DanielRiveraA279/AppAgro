import React from 'react';
import {View} from 'react-native';
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
import ComponentRadioButton from '../../RadioButton';
import styles from '../../../assets/styles/components/Modals';

const FormModal = ({avicultura, setAvicultura}) => {
  const [checkedAviCultIntensiva, setCheckedAviCultIntensiva] = React.useState(
    false,
  );

  const [
    checkedHuvosIncubPollosBebes,
    setCheckedHuvosIncubPollosBebes,
  ] = React.useState(false);
  const [existencia, setExistencia] = React.useState(
    'Gallinas, Gallos y Pollos',
  );
  const [plantIncuvac, setPlantIncuvac] = React.useState('');
  const [machReprod, setMachReprod] = React.useState('');
  const [cantIncub, setCantIncub] = React.useState('');
  const [parrillEngord, setParrillEngord] = React.useState('');
  const [ponedReprod, setPonedReprod] = React.useState('');

  const addAvicultura = () => {
    const dataNew = {
      is_intensive_poultry: checkedAviCultIntensiva,
      number_broilers_incubated: plantIncuvac,
      breeding_males: machReprod,
      number_eggs_chickens_babies: checkedHuvosIncubPollosBebes,
      number_incubators: cantIncub,
      number_broilers_fattening: parrillEngord,
      number_breeding_layers: ponedReprod,
      existence: existencia,
    };

   
    setAvicultura([dataNew]);
    

    setCheckedAviCultIntensiva(false);
    setPlantIncuvac('');
    setMachReprod('');
    setCheckedHuvosIncubPollosBebes(false);
    setCantIncub('');
    setParrillEngord('');
    setPonedReprod('');
    setExistencia('Gallinas, Gallos y Pollos');
  };

  return (
    <View>
      <Title>Ciclo Avicultura</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentCheckBox
            title="Avicultura Intensiva"
            disabled={false}
            value={checkedAviCultIntensiva}
            onValueChange={(value) => setCheckedAviCultIntensiva(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Planta de Incuvacion"
            style={styles.TextInput}
            value={plantIncuvac}
            onChangeText={(value) => setPlantIncuvac(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Machos Reproductores"
            style={styles.TextInput}
            value={machReprod}
            onChangeText={(value) => setMachReprod(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentCheckBox
            title="Huevos incubables y Pollos bebes"
            disabled={false}
            value={checkedHuvosIncubPollosBebes}
            onValueChange={(value) => setCheckedHuvosIncubPollosBebes(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Incubadoras"
            style={styles.TextInput}
            value={cantIncub}
            onChangeText={(value) => setCantIncub(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Parrillero en Engorde"
            style={styles.TextInput}
            value={parrillEngord}
            onChangeText={(value) => setParrillEngord(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Ponedores Reproductores"
            style={styles.TextInput}
            value={ponedReprod}
            onChangeText={(value) => setPonedReprod(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Existencia"
            style={styles.TextInput}
            value={existencia}
            onChangeText={(value) => setExistencia(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={() => addAvicultura()}>
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
