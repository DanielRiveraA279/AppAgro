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
import ComponentRadioButton from '../RadioButton';

import styles from '../../assets/styles/components/Modals';
import MessageError from '../MessageError';

const FormModal = ({visible, hideModal, plaga, setPlaga}) => {
  const [checkedTipoEnfermedad, setCheckedTipoEnfermedad] = React.useState('');

  const [checkedContrPlaga, setCheckedContrPlaga] = React.useState(false);
  const [checkedPlaguicida, setCheckedPlaguicida] = React.useState(false);

  const [descripcion, setDescripcion] = React.useState('');
  const [tipoPlaguicida, setTipoPlaguicida] = React.useState('');
  const [otro, setOtro] = React.useState('');

  const ShowAlert = () => {
    MessageError('Datos Faltantes', 'Existe campo/s vacio/s');
  };

  const FormPlaga = () => {
    const addAgricultPests = () => {
      if (checkedTipoEnfermedad.trim() === '') {
        ShowAlert();
      } else {
        const dataNew = {
          type_pests: checkedTipoEnfermedad,
          pests_description: descripcion,
          make_pests_control: checkedContrPlaga,
          make_pesticide: checkedPlaguicida,
          type_pesticide: tipoPlaguicida,
          other_practices: otro,
        };

        const dataOld = [];

        if (Object.keys(plaga).length !== 0) {
          plaga.map((item) => {
            dataOld.push(item);
          });
          setPlaga([...dataOld, dataNew]);
        } else {
          setPlaga([dataNew]);
        }

        setCheckedTipoEnfermedad(false);
        setDescripcion('');
        setCheckedContrPlaga(false);
        setCheckedPlaguicida(false);
        setTipoPlaguicida('');
        setOtro('');
      }
    };

    return (
      <View style={styles.container}>
        <Title>Plagas/Enfermedades/Maleza</Title>
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
              title="Enfermedad"
              value="enfermedad"
              status={
                checkedTipoEnfermedad === 'enfermedad' ? 'checked' : 'unchecked'
              }
              onPress={() => setCheckedTipoEnfermedad('enfermedad')}
              color="#008577"
            />

            <ComponentRadioButton
              title="Plaga"
              value="plaga"
              status={
                checkedTipoEnfermedad === 'plaga' ? 'checked' : 'unchecked'
              }
              onPress={() => setCheckedTipoEnfermedad('plaga')}
              color="#008577"
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentRadioButton
              title="Maleza"
              value="maleza"
              status={
                checkedTipoEnfermedad === 'maleza' ? 'checked' : 'unchecked'
              }
              onPress={() => setCheckedTipoEnfermedad('maleza')}
              color="#008577"
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

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
            <ComponentCheckBox
              title="Control de Plaga"
              disabled={false}
              value={checkedContrPlaga}
              onValueChange={(value) => setCheckedContrPlaga(value)}
            />
            <ComponentCheckBox
              title="Plaguicida"
              disabled={false}
              value={checkedPlaguicida}
              onValueChange={(value) => setCheckedPlaguicida(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              disabled={!checkedPlaguicida}
              label="Tipo de Plaguicida"
              style={styles.TextInput}
              value={tipoPlaguicida}
              onChangeText={(value) => setTipoPlaguicida(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Otras Practicas"
              style={styles.TextInput}
              value={otro}
              onChangeText={(value) => setOtro(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <Button
              mode="text"
              style={styles.SectionRight__button}
              onPress={() => addAgricultPests()}>
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
        <FormPlaga />
      </Modal>
    </Portal>
  );
};

export default FormModal;
