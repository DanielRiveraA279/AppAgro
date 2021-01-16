import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../../ComponentContainer';
import ComponentContainerGlobal from '../../ComponentContainerGlobal';

import styles from '../../../assets/styles/components/Modals';

const FormModal = ({bovino, setBovino}) => {
  const [ternMen1Anio, setTernMen1Anio] = React.useState('');
  const [vaqui1a2Anios, setVaqui1a2Anios] = React.useState('');
  const [vaquiMay2Anios, setVaquiMay2Anios] = React.useState('');
  const [cantVaca, setCantVaca] = React.useState('');
  const [novi1a2anios, setNovi1a2anios] = React.useState('');
  const [novMay2anios, setNovMay2anios] = React.useState('');
  const [torito1a2anios, setTorito1a2anios] = React.useState('');
  const [toritoMay2anios, setToritoMay2anios] = React.useState('');
  const [bueyesTorunos, setBueyesTorunos] = React.useState('');

  const addBovino = () => {
    const dataNew = {
      calves_under_one_year: ternMen1Anio,
      heifers_one_to_two_years: vaqui1a2Anios,
      heifers_over_two_years: vaquiMay2Anios,
      number_cows: cantVaca,
      steers_one_to_two_years: novi1a2anios,
      steers_older_two_years: novMay2anios,
      bulls_one_to_two_years: torito1a2anios,
      bulls_older_two_years: toritoMay2anios,
      number_oxen_torunos: bueyesTorunos,
    };

  
    setBovino([dataNew]);
    

    setTernMen1Anio('');
    setVaqui1a2Anios('');
    setVaquiMay2Anios('');
    setCantVaca('');
    setNovi1a2anios('');
    setNovMay2anios('');
    setTorito1a2anios('');
    setToritoMay2anios('');
    setBueyesTorunos('');
  };

  return (
    <View>
      <Title>Ciclo Bovino</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Terneros Menores de 1 año"
            style={styles.TextInput}
            value={ternMen1Anio}
            onChangeText={(value) => setTernMen1Anio(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Vaquillonas 1 a 2 años"
            style={styles.TextInput}
            value={vaqui1a2Anios}
            onChangeText={(value) => setVaqui1a2Anios(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Vaquillonas mas de 2 años"
            style={styles.TextInput}
            value={vaquiMay2Anios}
            onChangeText={(value) => setVaquiMay2Anios(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Vacas"
            style={styles.TextInput}
            value={cantVaca}
            onChangeText={(value) => setCantVaca(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Novillos de 1 a 2 años"
            style={styles.TextInput}
            value={novi1a2anios}
            onChangeText={(value) => setNovi1a2anios(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Novillos mas de 2 años"
            style={styles.TextInput}
            value={novMay2anios}
            onChangeText={(value) => setNovMay2anios(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Toritos de 1 a 2 años"
            style={styles.TextInput}
            value={torito1a2anios}
            onChangeText={(value) => setTorito1a2anios(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Toros mas de 2 años"
            style={styles.TextInput}
            value={toritoMay2anios}
            onChangeText={(value) => setToritoMay2anios(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>
      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Bueyes y Torunos"
            style={styles.TextInput}
            value={bueyesTorunos}
            onChangeText={(value) => setBueyesTorunos(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={() => addBovino()}>
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
