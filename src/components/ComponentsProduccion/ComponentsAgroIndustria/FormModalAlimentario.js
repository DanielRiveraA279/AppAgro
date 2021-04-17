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
  const [cantidad, setCantidad] = React.useState('');

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
        quantity: cantidad,
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
      setCantidad('');
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
          <Caption style={{color: '#0079BF'}}>Origen</Caption>
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
          <TextInput
            mode="outlined"
            label="Cantidad"
            style={styles.TextInput}
            value={cantidad}
            onChangeText={(value) => setCantidad(value)}
            keyboardType="numeric"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addAlementario()}>
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
