import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../../ComponentContainer';
import ComponentContainerGlobal from '../../ComponentContainerGlobal';

import styles from '../../../assets/styles/components/Modals';

const FormModal = ({caprino, setCaprino}) => {
  const [men6mes, setmen6mes] = React.useState('');
  const [seisMesHastPart, setSeisMesHastPart] = React.useState('');
  const [cantCabra, setCantCabra] = React.useState('');
  const [cantCapon, setCantCapon] = React.useState('');
  const [cantMachCabrChiv, setCantMachCabrChiv] = React.useState('');

  const addCaprino = () => {
    const dataNew = {
      goats_under_six_months: men6mes,
      goats_six_months_to_first_calving: seisMesHastPart,
      number_goats: cantCabra,
      number_capons: cantCapon,
      number_stallions: cantMachCabrChiv,
    };

    setCaprino([dataNew]);

    setmen6mes('');
    setSeisMesHastPart('');
    setCantCabra('');
    setCantCapon('');
    setCantMachCabrChiv('');
  };

  return (
    <View>
      <Title>Ciclo Caprino</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Cabritas/os Menor 6 meses"
            style={styles.TextInput}
            value={men6mes}
            onChangeText={(value) => setmen6mes(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad Cabrillas 6 meses hasta paricion"
            style={styles.TextInput}
            value={seisMesHastPart}
            onChangeText={(value) => setSeisMesHastPart(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Cabras"
            style={styles.TextInput}
            value={cantCabra}
            onChangeText={(value) => setCantCabra(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Capones"
            style={styles.TextInput}
            value={cantCapon}
            onChangeText={(value) => setCantCapon(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad Machos Cabrios y Chivos"
            style={styles.TextInput}
            value={cantMachCabrChiv}
            onChangeText={(value) => setCantMachCabrChiv(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button 
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addCaprino()}>
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
