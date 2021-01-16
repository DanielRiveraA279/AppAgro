import React from 'react';
import {View, ScrollView} from 'react-native';

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
import ComponentRadioButton from '../../RadioButton';
import styles from '../../../assets/styles/components/Modals';

const FormModal = ({alimentacion, setAlimentacion}) => {
  const [checkedTipoAlimentacion, setCheckedTipoAlimentacion] = React.useState(
    '',
  );
  const [alimento, setAlimento] = React.useState('');
  const [razon, setRazon] = React.useState('');

  const addAlimento = () => {
    const dataNew = {
      feeding: alimento,
      type_feeding: checkedTipoAlimentacion,
      daily_rations: razon,
    };
    let dataOld = [];

    if (Object.keys(alimentacion).length !== 0) {
      alimentacion.map((item) => {
        dataOld.push(item);
      });
      setAlimentacion([...dataOld, dataNew]);
    } else {
      setAlimentacion([dataNew]);
    }

    setAlimento('');
    setCheckedTipoAlimentacion('');
    setRazon('');
  };

  return (
    <View>
      <Title>Alimentacion</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Alimento"
            style={styles.TextInput}
            value={alimento}
            onChangeText={(value) => setAlimento(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Caption>Tipo de Alimentacion</Caption>
      </View>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentRadioButton
            title="Propia"
            value="propia"
            status={
              checkedTipoAlimentacion === 'propia' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedTipoAlimentacion('propia')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Compra"
            value="compra"
            status={
              checkedTipoAlimentacion === 'compra' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedTipoAlimentacion('compra')}
            color="#008577"
          />

          <ComponentRadioButton
            title="Trueque"
            value="trueque"
            status={
              checkedTipoAlimentacion === 'trueque' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedTipoAlimentacion('trueque')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Donaciones"
            value="donaciones"
            status={
              checkedTipoAlimentacion === 'donaciones' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedTipoAlimentacion('donaciones')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Naturales"
            value="naturales"
            status={
              checkedTipoAlimentacion === 'naturales' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedTipoAlimentacion('naturales')}
            color="#008577"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Razones Diarias"
            style={styles.TextInput}
            value={razon}
            onChangeText={(value) => setRazon(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={() => addAlimento()}>
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
