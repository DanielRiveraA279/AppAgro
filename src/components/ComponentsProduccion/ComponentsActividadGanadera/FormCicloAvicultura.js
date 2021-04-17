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
  const [checkAvicIntensiva, setCheckAvicIntensiva] = useState(false);
  const [checkPlantIncuvacion, setCheckPlantIncuvacion] = useState(false);

  const [cantIncuvadora, setCantIncuvadora] = useState('');
  const [huevosIncuvables, setHuevosIncuvables] = useState('');
  const [polloUnoaDosMeses, setPolloUnoaDosMeses] = useState('');
  const [polloReCriaTresaCincoMeses, setPolloReCriaTresaCincoMeses] = useState(
    '',
  );
  const [hembraMaySeisMeses, setHembraMaySeisMeses] = useState('');
  const [parillerosEngorde, setParillerosEngorde] = useState('');
  const [ponedorasReproductoras, setPonedorasReproductoras] = useState('');
  const [machosReproductores, setMachosReproductores] = useState('');

  const addAvicultura = () => {
    const dataNew = {
      is_intensive_poultry: checkAvicIntensiva,
      has_hatchery: checkPlantIncuvacion,
      number_incubators: cantIncuvadora,
      number_hatching_eggs: huevosIncuvables,
      chicks_one_two_months: polloUnoaDosMeses,
      chicks_three_five_months: polloReCriaTresaCincoMeses,
      females_older_six_months: hembraMaySeisMeses,
      number_broiler_chickens: parillerosEngorde,
      number_breeder_layers: ponedorasReproductoras,
      number_breeding_males: machosReproductores,
    };

    setAvicultura([dataNew]);

    setCheckAvicIntensiva(false);
    setCheckPlantIncuvacion(false);
    setCantIncuvadora('');
    setHuevosIncuvables('');
    setPolloUnoaDosMeses('');
    setPolloReCriaTresaCincoMeses('');
    setHembraMaySeisMeses('');
    setParillerosEngorde('');
    setPonedorasReproductoras('');
    setMachosReproductores('');
  };

  return (
    <View>
      <Title>Ciclo Avicultura</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentCheckBox
            title="Avicultura Intensiva"
            disabled={false}
            value={checkAvicIntensiva}
            onValueChange={(value) => setCheckAvicIntensiva(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentCheckBox
            title="Planta de Incuvacion"
            disabled={false}
            value={checkPlantIncuvacion}
            onValueChange={(value) => setCheckPlantIncuvacion(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Icuvadoras"
            style={styles.TextInput}
            value={cantIncuvadora}
            onChangeText={(value) => setCantIncuvadora(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Huevos Incuvables"
            style={styles.TextInput}
            value={huevosIncuvables}
            onChangeText={(value) => setHuevosIncuvables(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentCheckBox
            title="Pollitos Uno a Dos Meses"
            disabled={false}
            value={polloUnoaDosMeses}
            onValueChange={(value) => setPolloUnoaDosMeses(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Pollos de Recria de Tres a Cinco Meses"
            style={styles.TextInput}
            value={polloReCriaTresaCincoMeses}
            onChangeText={(value) => setPolloReCriaTresaCincoMeses(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Hembras Mayor a Seis Meses"
            style={styles.TextInput}
            value={hembraMaySeisMeses}
            onChangeText={(value) => setHembraMaySeisMeses(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Parrilleros Engorde"
            style={styles.TextInput}
            value={parillerosEngorde}
            onChangeText={(value) => setParillerosEngorde(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Ponedoras Reproductoras"
            style={styles.TextInput}
            value={ponedorasReproductoras}
            onChangeText={(value) => setPonedorasReproductoras(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Machos Reproductores"
            style={styles.TextInput}
            value={machosReproductores}
            onChangeText={(value) => setMachosReproductores(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addAvicultura()}>
            Guardar
          </Button>
          <Button
            color="#0079BF"
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
