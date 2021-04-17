import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../../ComponentContainer';
import ComponentContainerGlobal from '../../ComponentContainerGlobal';
import styles from '../../../assets/styles/components/Modals';

const FormModal = ({porcino, setPorcino}) => {
  const [lechonesHast3Mes, setLechonesHast3Mes] = React.useState('');
  const [lechones3a8Mes, setLechones3a8Mes] = React.useState('');
  const [machosMay8Mes, setMachosMay8Mes] = React.useState('');
  const [hembraMay8Mes, setHembraMay8Mes] = React.useState('');
  const [cantCapon, setCantCapon] = React.useState('');
  const [cantPadrill, setCantPadrill] = React.useState('');

  const addPorcino = () => {
    //todos son integer
    const dataNew = {
      up_three_months: lechonesHast3Mes,
      three_eight_months: lechones3a8Mes,
      males_older_eight_months: machosMay8Mes,
      females_older_eight_months: hembraMay8Mes,
      number_pigs: cantCapon,
      number_stallions: cantPadrill,
    };

    setPorcino([dataNew]);

    setLechonesHast3Mes('');
    setLechones3a8Mes('');
    setMachosMay8Mes('');
    setHembraMay8Mes('');
    setCantCapon('');
    setCantPadrill('');
  };

  return (
    <View>
      <Title>Ciclo Porcino</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Lechones hasta 3 meses"
            style={styles.TextInput}
            value={lechonesHast3Mes}
            onChangeText={(value) => setLechonesHast3Mes(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Lechones de 3 a 8 Meses"
            style={styles.TextInput}
            value={lechones3a8Mes}
            onChangeText={(value) => setLechones3a8Mes(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Machos Mayor a 8 Meses"
            style={styles.TextInput}
            value={machosMay8Mes}
            oonChangeText={(value) => setMachosMay8Mes(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Hembras Mayor a 8 Meses"
            style={styles.TextInput}
            value={hembraMay8Mes}
            onChangeText={(value) => setHembraMay8Mes(value)}
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
            label="Cantidad de Padrillos"
            style={styles.TextInput}
            value={cantPadrill}
            onChangeText={(value) => setCantPadrill(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addPorcino()}>
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
