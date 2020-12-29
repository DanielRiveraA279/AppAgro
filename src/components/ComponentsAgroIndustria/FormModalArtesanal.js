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
import ComponentContainer from '../ComponentContainer';
import ComponentContainerGlobal from '../ComponentContainerGlobal';
import ComponentRadioButton from '../RadioButton';
import styles from '../../assets/styles/components/Modals';
import MessageError from '../MessageError';

const FormModal = ({visible, hideModal, artesanal, setArtesanal}) => {
  const [descripcion, setDescripcion] = React.useState('');
  const [cantidad, setCantidad] = React.useState('');
  const [precio, setPrecio] = React.useState('');

  const FormArtesanal = () => {
    const ShowAlert = () => {
      MessageError('Datos Faltantes', 'Existe campo/s vacio/s');
    };
    const addArtesanal = () => {
      if (descripcion.trim() === '') {
        ShowAlert();
      } else {
        const dataNew = {
          name_product: descripcion,
          quantity: cantidad,
          price: precio,
        };
        let dataOld = [];

        if (Object.keys(artesanal).length !== 0) {
          artesanal.map((item) => {
            dataOld.push(item);
          });
          setArtesanal([...dataOld, dataNew]);
        } else {
          setArtesanal([dataNew]);
        }

        setDescripcion('');
        setCantidad('');
        setPrecio('');
      }
    };
    return (
      <View style={styles.container}>
        <Title>Producto Artesanal</Title>
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
              label="Cantidad"
              style={styles.TextInput}
              value={cantidad}
              onChangeText={(value) => setCantidad(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Precio Artesania"
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
              style={styles.SectionRight__button}
              onPress={() => addArtesanal()}>
              Guardar
            </Button>
            <Button
              mode="text"
              style={styles.SectionRight__button}
              onPress={hideModal}>
              Cancelar
            </Button>
          </ComponentContainer>
        </ComponentContainerGlobal>
      </View>
    );
  };

  return (
    <Portal>
      <Modal
        animationType="slide"
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.container}>
        <FormArtesanal />
      </Modal>
    </Portal>
  );
};

export default FormModal;
