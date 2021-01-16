import React from 'react';
import {View} from 'react-native';

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
import MessageError from '../../MessageError';

const FormModal = ({alimentario, setAlimentario}) => {
  const [checkedOrigen, setCheckedOrigen] = React.useState('');
  const [descripcion, setDescripcion] = React.useState('');
  const [vigencia, setVigencia] = React.useState('');
  const [precio, setPrecio] = React.useState('');

  const ShowAlert = () => {
    MessageError('Datos Faltantes', 'Existe campo/s vacio/s');
  };

  const addAlementario = () => {
    if (descripcion.trim() === '') {
      ShowAlert();
    } else {
      const dataNew = {
        name_product: descripcion,
        validity: vigencia,
        origin: checkedOrigen,
        price: precio,
      };

      let dataOld = [];

      if (Object.keys(alimentario).length !== 0) {
        alimentario.map((item) => {
          dataOld.push(item);
        });

        setAlimentario([...dataOld, dataNew]);
      } else {
        setAlimentario([dataNew]);
      }

      setDescripcion('');
      setVigencia('');
      setCheckedOrigen('');
      setPrecio('');
    }
  };

  return (
    <View style={styles.container}>
      <Title>Producto Alimentario</Title>
      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Descripcion"
            style={styles.TextInput}
            value={descripcion}
            onChangeText={(value) => setDescripcion(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Vigencia Producto"
            style={styles.TextInput}
            value={vigencia}
            onChangeText={(value) => setVigencia(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Origen</Caption>
        </View>
      </View>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentRadioButton
            title="Vegetal"
            value="vegetal"
            status={checkedOrigen === 'vegetal' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrigen('vegetal')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Animal"
            value="animal"
            status={checkedOrigen === 'animal' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrigen('animal')}
            color="#008577"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Precio de lo Producido"
            style={styles.TextInput}
            value={precio}
            onChangeText={(value) => setPrecio(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={() => addAlementario()}>
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
