import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../../ComponentContainer';
import ComponentContainerGlobal from '../../ComponentContainerGlobal';
import styles from '../../../assets/styles/components/Modals';

const FormModal = ({
  visible,
  hideModal,
  comercializacion,
  setComercializacion,
}) => {
  const [cantFaenados, setCantFaenados] = React.useState('');
  const [cantEsquilado, setCantEsquilado] = React.useState('');
  const [cantLanaPelo, setCantLanaPelo] = React.useState('');
  const [cantPiel, setCantPiel] = React.useState('');
  const [prodLeche, setProdLeche] = React.useState('');
  const [destinoLeche, setDestinoLeche] = React.useState('');
  const [destinoLana, setDestinoLana] = React.useState('');
  const [destinoPiel, setDestinoPiel] = React.useState('');
  const [destinoFaenados, setDestinoFaenados] = React.useState('');

  const addComercio = () => {
    const dataNew = {
      number_slaughtered: cantFaenados,
      number_shorn: cantEsquilado,
      amount_wool_hair: cantLanaPelo,
      amount_leather: cantPiel,
      liters_milk: prodLeche,
      milk_destination: destinoLeche,
      wool_hair_destination: destinoLana,
      leather_destination: destinoPiel,
      slaughter_destination: destinoFaenados,
    };

    setComercializacion([dataNew]);

    setCantFaenados('');
    setCantEsquilado('');
    setCantLanaPelo('');
    setCantPiel('');
    setProdLeche('');
    setDestinoLeche('');
    setDestinoLana('');
    setDestinoPiel('');
    setDestinoFaenados('');
  };

  return (
    <View>
      <Title>Comercializacion</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad Faenados"
            style={styles.TextInput}
            value={cantFaenados}
            onChangeText={(value) => setCantFaenados(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad Esquilados"
            style={styles.TextInput}
            value={cantEsquilado}
            onChangeText={(value) => setCantEsquilado(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad Lana - Pelo Obtenido"
            style={styles.TextInput}
            value={cantLanaPelo}
            onChangeText={(value) => setCantLanaPelo(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Piel"
            style={styles.TextInput}
            value={cantPiel}
            onChangeText={(value) => setCantPiel(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Produccion de Leche"
            style={styles.TextInput}
            value={prodLeche}
            onChangeText={(value) => setProdLeche(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Destino de Leche"
            style={styles.TextInput}
            value={destinoLeche}
            onChangeText={(value) => setDestinoLeche(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Destino de Pelo Lana"
            style={styles.TextInput}
            value={destinoLana}
            onChangeText={(value) => setDestinoLana(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Destino de la Piel"
            style={styles.TextInput}
            value={destinoPiel}
            onChangeText={(value) => setDestinoPiel(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Destino de Faenados"
            style={styles.TextInput}
            value={destinoFaenados}
            onChangeText={(value) => setDestinoFaenados(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={() => addComercio()}>
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
