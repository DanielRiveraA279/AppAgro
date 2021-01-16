import React from 'react';
import {View} from 'react-native';

import {
  TextInput,
  Button,
  Title,
  Caption,
  Modal,
  Portal,
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

  const addTitle = () => {
    const dataNew = {
      land_tenure: checkedTenencia,
      has_land_title: checkedTitulo,
      cadastre_registration: matricula,
      starting_number: padron,
    };

  
    setTitulos([dataNew]);
    
    setCheckedTenencia('');
    setCheckedTitulo(false);
    setMatricula('');
    setPadron('');
  };

  return (
    <Portal>
      <Modal
        animationType="slide"
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.container}>
        <View>
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
                value={checkedTenencia}
                status={
                  checkedTenencia === 'arriendatario' ? 'checked' : 'unchecked'
                }
                onPress={() => setCheckedTenencia('arriendatario')}
                color="#008577"
              />
              <ComponentRadioButton
                title="Propietario"
                value={checkedTenencia}
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
                value={checkedTitulo}
                disabled={false}
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
                keyboardType="default"
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <TextInput
                mode="outlined"
                value={padron}
                label="Padron de Riego"
                style={styles.TextInput}
                onChangeText={(value) => setPadron(value)}
                keyboardType="default"
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <Button
                mode="text"
                color="#008080"
                style={styles.SectionRight__button}
                onPress={() => addTitle()}>
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
