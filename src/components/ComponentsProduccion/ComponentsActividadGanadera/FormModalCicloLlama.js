import React from 'react';
import {View} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../../ComponentContainer';
import ComponentContainerGlobal from '../../ComponentContainerGlobal';

import styles from '../../../assets/styles/components/Modals';

const FormModal = ({llama, setLlama}) => {
  const [cantTekes, setCantTekes] = React.useState('');
  const [cantTekesDestetados, setCantTekesDestetados] = React.useState('');
  const [cantMaltonasMaltones, setCantMaltonasMaltones] = React.useState('');
  const [cantHembrasJovenes, setCantHembrasJovenes] = React.useState('');
  const [cantMachosJovenes, setCantMachosJovenes] = React.useState('');
  const [cantMadres, setCantMadres] = React.useState('');
  const [cantCapones, setCantCapones] = React.useState('');

  const addLlama = () => {
    const dataNew = {
      number_tekes: cantTekes,
      number_tekes_weaned: cantTekesDestetados,
      number_maltones: cantMaltonasMaltones,
      number_young_females: cantHembrasJovenes,
      number_young_males: cantMachosJovenes,
      number_llamas_mothers: cantMadres,
      number_capons: cantCapones,
    };

    setLlama([dataNew]);

    setCantTekes('');
    setCantTekesDestetados('');
    setCantMaltonasMaltones('');
    setCantHembrasJovenes('');
    setCantMachosJovenes('');
    setCantMadres('');
    setCantCapones('');
  };

  return (
    <View>
      <Title>Ciclo Camelidos</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Tekes"
            style={styles.TextInput}
            value={cantTekes}
            onChangeText={(value) => setCantTekes(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Tekes Destetados"
            style={styles.TextInput}
            value={cantTekesDestetados}
            onChangeText={(value) => setCantTekesDestetados(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad Maltonas y Maltones"
            style={styles.TextInput}
            value={cantMaltonasMaltones}
            onChangeText={(value) => setCantMaltonasMaltones(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Hembras Jovenes"
            style={styles.TextInput}
            value={cantHembrasJovenes}
            onChangeText={(value) => setCantHembrasJovenes(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Machos Jovenes"
            style={styles.TextInput}
            value={cantMachosJovenes}
            onChangeText={(value) => setCantMachosJovenes(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Madres"
            style={styles.TextInput}
            value={cantMadres}
            onChangeText={(value) => setCantMadres(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Capones"
            style={styles.TextInput}
            value={cantCapones}
            onChangeText={(value) => setCantCapones(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addLlama()}>
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
