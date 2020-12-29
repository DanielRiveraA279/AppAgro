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

import ComponentRadioButton from '../RadioButton';
import ComponentCheckBox from '../CheckBox';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal, titulos, setTitulos}) => {
  const [checkedTenencia, setCheckedTenencia] = React.useState('');
  const [checkedTitulo, setCheckedTitulo] = React.useState(false);
  const [matricula, setMatricula] = React.useState('');
  const [padron, setPadron] = React.useState('');

  const FormTitulo = () => {
    const addTitle = () => {
      const dataNew = {
        land_tenure: checkedTenencia,
        has_land_title: checkedTitulo,
        cadastre_registration: matricula,
        starting_number: padron,
      };

      const dataOld = [];

      if (Object.keys(titulos).length !== 0) {
        titulos.map((item) => {
          dataOld.push(item);
        });
        setTitulos([...dataOld, dataNew]);
      } else {
        setTitulos([dataNew]);
      }
      setCheckedTenencia('');
      setCheckedTitulo(false);
      setMatricula('');
      setPadron('');
    };

    return (
      <View style={styles.container}>
        <Title>Titulos</Title>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Tenencia</Caption>
        </View>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentRadioButton
              title="Arriendatario"
              value="arriendatario"
              status={
                checkedTenencia === 'arriendatario' ? 'checked' : 'unchecked'
              }
              onPress={() => setCheckedTenencia('arriendatario')}
              color="#008577"
            />
            <ComponentRadioButton
              title="Propietario"
              value="propietario"
              status={
                checkedTenencia === 'propietario' ? 'checked' : 'unchecked'
              }
              onPress={() => setCheckedTenencia('propietario')}
              color="#008577"
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="Titulo"
              disabled={false}
              value={checkedTitulo}
              onValueChange={(value) => setCheckedTitulo(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              value={matricula}
              label="Matricula Catastral"
              style={styles.TextInput}
              onChangeText={(value) => setMatricula(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Padron de Riego"
              value={padron}
              style={styles.TextInput}
              onChangeText={(value) => setPadron(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <Button
              mode="text"
              style={styles.SectionRight__button}
              onPress={() => addTitle()}>
              Guardar
            </Button>
            <Button
              mode="text"
              style={styles.SectionRight__button}
              onPress={() => hideModal()}>
              Cancelar
            </Button>
          </ComponentContainer>
        </ComponentContainerGlobal>
      </View>
    );
  };

  return (
    <>
      <Portal>
        <Modal animationType="slide" visible={visible} onDismiss={hideModal}>
          <FormTitulo />
        </Modal>
      </Portal>
    </>
  );
};

export default FormModal;
