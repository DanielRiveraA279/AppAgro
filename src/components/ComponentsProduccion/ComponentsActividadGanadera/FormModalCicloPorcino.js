import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../../ComponentContainer';
import ComponentContainerGlobal from '../../ComponentContainerGlobal';
import styles from '../../../assets/styles/components/Modals';

const FormModal = ({porcino, setPorcino}) => {
  const [hast2Mes, setHast2Mes] = React.useState('');
  const [may2Mes, setMay2Mes] = React.useState('');
  const [men4Mes, setMen4Mes] = React.useState('');
  const [may4Mes, setMay4Mes] = React.useState('');
  const [totalCerd, setTotalCerd] = React.useState('');
  const [totalPadr, setTotalPadr] = React.useState('');

  const addPorcino = () => {
    const dataNew = {
      up_two_months: hast2Mes,

      older_two_months: may2Mes,

      less_four_months: men4Mes,

      older_four_months: may4Mes,

      number_pigs: totalCerd,
      number_stallions: totalPadr,
    };

   
    setPorcino([dataNew]);
    

    setHast2Mes('');
    setMay2Mes('');
    setMen4Mes('');
    setMay4Mes('');
    setTotalCerd('');
    setTotalPadr('');
  };

  return (
    <View>
      <Title>Ciclo Porcino</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Lechones hasta 2 meses"
            style={styles.TextInput}
            value={hast2Mes}
            onChangeText={(value) => setHast2Mes(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Mayor de 2 meses"
            style={styles.TextInput}
            value={may2Mes}
            onChangeText={(value) => setMay2Mes(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Menor de 4 meses"
            style={styles.TextInput}
            value={men4Mes}
            oonChangeText={(value) => setMen4Mes(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Mayor de 4 meses"
            style={styles.TextInput}
            value={may4Mes}
            onChangeText={(value) => setMay4Mes(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Total de Cerdos"
            style={styles.TextInput}
            value={totalCerd}
            onChangeText={(value) => setTotalCerd(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Total de Padrillos"
            style={styles.TextInput}
            value={totalPadr}
            onChangeText={(value) => setTotalPadr(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={() => addPorcino()}>
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
