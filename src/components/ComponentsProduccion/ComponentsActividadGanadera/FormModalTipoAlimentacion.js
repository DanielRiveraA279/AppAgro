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
  const [descripcion, setDescripcion] = React.useState('');

  const addAlimento = () => {
    const dataNew = {
      feeding: alimento,
      type_feeding: checkedTipoAlimentacion,
      daily_rations: razon,
      description: descripcion,
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
      <Title>Alimentación</Title>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Caption style={{color: '#0079BF'}}>Tipo de Alimentación</Caption>
      </View>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentRadioButton
            title="Propia"
            value="propia"
            status={checkedTipoAlimentacion === 'propia' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoAlimentacion('pripia')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Proveedor"
            value="proveedor"
            status={checkedTipoAlimentacion === 'proveedor' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoAlimentacion('proveedor')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Pastoreo"
            value="pastoreo"
            status={checkedTipoAlimentacion === 'pastoreo' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoAlimentacion('pastoreo')}
            color="#008577"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

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

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Raciones Diarias (Kg.)"
            style={styles.TextInput}
            value={razon}
            onChangeText={(value) => setRazon(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addAlimento()}>
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
