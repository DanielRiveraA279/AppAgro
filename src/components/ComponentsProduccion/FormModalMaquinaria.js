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
import ComponentContainer from '../ComponentContainer';
import ComponentContainerGlobal from '../ComponentContainerGlobal';

import ComponentCheckBox from '../CheckBox';
import styles from '../../assets/styles/components/Modals';
import ComponentRadioButton from '../RadioButton';

const FormModal = ({visible, hideModal, maquinaria, setMaquinaria}) => {
  const [checkedDestino, setCheckedDestino] = React.useState('');
  const [checkedTipoMaquina, setCheckedTipoMaquina] = React.useState('');

  const [nombre, setNombre] = React.useState('');
  const [modelo, setModelo] = React.useState('');
  const [antiguedad, setAntiguedad] = React.useState('');
  const [estado, setEstado] = React.useState('');
  const [observacion, setObservacion] = React.useState('');

  const addProductionMachine = () => {
    const dataNew = {
      destination: checkedDestino,
      name_machine: nombre,
      type_maquinary: checkedTipoMaquina,
      model: modelo,
      state_machine: estado,
      age: antiguedad,
      observation: observacion,
    };

    const dataOld = [];

    if (Object.keys(maquinaria).length !== 0) {
      maquinaria.map((item) => {
        dataOld.push(item);
      });
      setMaquinaria([...dataOld, dataNew]);
    } else {
      setMaquinaria([dataNew]);
    }

    setCheckedDestino('');
    setNombre('');
    setCheckedTipoMaquina('');
    setModelo('');
    setAntiguedad('');
    setEstado('');
    setObservacion('');
  };

  return (
    <Portal>
      <Modal
        animationType="slide"
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Title>Maquinaria</Title>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Caption>Destino</Caption>
          </View>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <ComponentRadioButton
                title="Agricola"
                value="agricola"
                status={checkedDestino === 'agricola' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedDestino('agricola')}
                color="#008577"
              />
              <ComponentRadioButton
                title="Ganadera"
                value="ganadera"
                status={checkedDestino === 'ganadera' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedDestino('ganadera')}
                color="#008577"
              />
              <ComponentRadioButton
                title="Agro-Industria"
                value="agroindustria"
                status={
                  checkedDestino === 'agroindustria' ? 'checked' : 'unchecked'
                }
                onPress={() => setCheckedDestino('agroindustria')}
                color="#008577"
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <TextInput
                mode="outlined"
                label="Maquinaria"
                style={styles.TextInput}
                value={nombre}
                onChangeText={(value) => setNombre(value)}
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Caption>Tipo</Caption>
          </View>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <ComponentRadioButton
                title="Propia"
                value="propia"
                status={
                  checkedTipoMaquina === 'propia' ? 'checked' : 'unchecked'
                }
                onPress={() => setCheckedTipoMaquina('propia')}
                color="#008577"
              />
              <ComponentRadioButton
                title="Alquilada"
                value="alquilada"
                status={
                  checkedTipoMaquina === 'alquilada' ? 'checked' : 'unchecked'
                }
                onPress={() => setCheckedTipoMaquina('alquilada')}
                color="#008577"
              />

              <ComponentRadioButton
                title="Prestada"
                value="prestada"
                status={
                  checkedTipoMaquina === 'prestada' ? 'checked' : 'unchecked'
                }
                onPress={() => setCheckedTipoMaquina('prestada')}
                color="#008577"
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <TextInput
                mode="outlined"
                label="Modelo"
                value={modelo}
                style={styles.TextInput}
                onChangeText={(value) => setModelo(value)}
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <TextInput
                mode="outlined"
                value={antiguedad}
                label="Antiguedad"
                style={styles.TextInput}
                onChangeText={(value) => setAntiguedad(value)}
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <TextInput
                mode="outlined"
                value={estado}
                label="Estado"
                style={styles.TextInput}
                onChangeText={(value) => setEstado(value)}
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <TextInput
                mode="outlined"
                value={observacion}
                label="Observacion"
                style={styles.TextInput}
                onChangeText={(value) => setObservacion(value)}
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <Button
                mode="text"
                color="#008080"
                style={styles.SectionRight__button}
                onPress={() => addProductionMachine()}>
                Guardar
              </Button>
              <Button
                mode="text"
                color="#008080"
                style={styles.SectionRight__button}
                onPress={() => hideModal()}>
                Cancelar
              </Button>
            </ComponentContainer>
          </ComponentContainerGlobal>
        </View>
      </Modal>
    </Portal>
  );
};

export default FormModal;
