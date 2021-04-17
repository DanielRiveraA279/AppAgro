import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';

import ComponentContainer from '../../ComponentContainer';
import ComponentContainerGlobal from '../../ComponentContainerGlobal';
import styles from '../../../assets/styles/components/Modals';

const FormModal = ({ovino, setOvino}) => {
  const [menor6Mes, setMenor6Mes] = React.useState('');
  const [seisMesHastPart, setSeisMesHastPart] = React.useState('');
  const [seisMesHastAnio, setSeisMesHastAnio] = React.useState('');
  const [cantOvej, setCantOvej] = React.useState('');
  const [cantCapon, setCantCapon] = React.useState('');
  const [cantCarn, setCantCarn] = React.useState('');

  const addOvino = () => {
    const dataNew = {
      sheep_under_six_months: menor6Mes,
      sheep_older_six_months_to_calving: seisMesHastPart,
      sheep_older_six_months_one_year: seisMesHastAnio,
      number_sheep: cantOvej,
      number_capons: cantCapon,
      number_rams: cantCarn,
    };

    setOvino([dataNew]);

    setMenor6Mes('');
    setSeisMesHastPart('');
    setSeisMesHastAnio('');
    setCantOvej('');
    setCantCapon('');
    setCantCarn('');
  };

  return (
    <View>
      <Title>Ciclo Ovino</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Menores 6 meses"
            style={styles.TextInput}
            value={menor6Mes}
            onChangeText={(value) => setMenor6Mes(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Borregas de 6 meses hasta paricion"
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
            label="Borregos de 6 meses hasta 1 año"
            style={styles.TextInput}
            value={seisMesHastAnio}
            onChangeText={(value) => setSeisMesHastAnio(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Ovejas"
            style={styles.TextInput}
            value={cantOvej}
            onChangeText={(value) => setCantOvej(value)}
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
            label="Cantidad de Carneros"
            style={styles.TextInput}
            value={cantCarn}
            onChangeText={(value) => setCantCarn(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addOvino()}>
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
