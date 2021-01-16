import React from 'react';
import {View} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../../ComponentContainer';
import ComponentContainerGlobal from '../../ComponentContainerGlobal';

import styles from '../../../assets/styles/components/Modals';

const FormModal = ({llama, setLlama}) => {
  const [cantChitTeq, setCantChitTeq] = React.useState('');
  const [cantMalt, setCantMalt] = React.useState('');
  const [cantJanach, setCantJanach] = React.useState('');
  const [cantLlamMadr, setCantLlamMadr] = React.useState('');
  const [cantCapon, setCantCapon] = React.useState('');

  const addLlama = () => {
    const dataNew = {
      number_chitas_teques: cantChitTeq,
      number_maltones: cantMalt,
      number_janachos: cantJanach,
      number_llamas_mothers: cantLlamMadr,
      number_capons: cantCapon,
    };

   
    setLlama([dataNew]);
    

    setCantChitTeq('');
    setCantMalt('');
    setCantJanach('');
    setCantLlamMadr('');
    setCantCapon('');
  };

  return (
    <View>
      <Title>Ciclo Llamas</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Chitas y Tekes"
            style={styles.TextInput}
            value={cantChitTeq}
            onChangeText={(value) => setCantChitTeq(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Maltonas y Maltones"
            style={styles.TextInput}
            value={cantMalt}
            onChangeText={(value) => setCantMalt(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Janachos"
            style={styles.TextInput}
            value={cantJanach}
            onChangeText={(value) => setCantJanach(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de llamas madres"
            style={styles.TextInput}
            value={cantLlamMadr}
            onChangeText={(value) => setCantLlamMadr(value)}
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
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={() => addLlama()}>
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
