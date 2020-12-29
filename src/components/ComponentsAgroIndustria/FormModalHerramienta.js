import React from 'react';
import {View} from 'react-native';
import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../ComponentContainer';
import ComponentContainerGlobal from '../ComponentContainerGlobal';
import styles from '../../assets/styles/components/Modals';
import MessageError from '../MessageError';

const FormModal = ({visible, hideModal, herramienta, setHerramienta}) => {
  const [nombre, setNombre] = React.useState('');
  const [tipo, setTipo] = React.useState('');
  const [cantidad, setCantidad] = React.useState('');

  const FormHerramienta = () => {
    const ShowAlert = () => {
      MessageError('Datos Faltantes', 'Existe campo/s vacio/s');
    };
    const addHerramienta = () => {
      if (nombre.trim() === '') {
        ShowAlert();
      } else {
        const dataNew = {
          name_tool: nombre,
          type_tool: tipo,
          number_tools: cantidad,
        };

        let dataOld = [];

        if (Object.keys(herramienta).length !== 0) {
          herramienta.map((item) => {
            dataOld.push(item);
          });

          setHerramienta([...dataOld, dataNew]);
        } else {
          setHerramienta([dataNew]);
        }

        setNombre('');
        setTipo('');
        setCantidad('');
      }
    };
    return (
      <View style={styles.container}>
        <Title>Herramientas</Title>
        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Nombre"
              style={styles.TextInput}
              value={nombre}
              onChangeText={(value) => setNombre(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Tipo"
              style={styles.TextInput}
              value={tipo}
              onChangeText={(value) => setTipo(value)}
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
            <Button mode="text" style={styles.SectionRight__button} onPress={() => addHerramienta()}>
              Guardar
            </Button>
            <Button mode="text" style={styles.SectionRight__button} onPress={hideModal}>
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
        <FormHerramienta />
      </Modal>
    </Portal>
  );
};

export default FormModal;
