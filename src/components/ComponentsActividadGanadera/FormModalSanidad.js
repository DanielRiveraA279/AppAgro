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

const FormModal = ({visible, hideModal}) => {
  const [
    checkedTipoAsesoramiento,
    setCheckedTipoAsesoramiento,
  ] = React.useState('');
  const [
    checkedDesparacitExterna,
    setCheckedDesparacitExterna,
  ] = React.useState(false);
  const [
    checkedDesparacitInterna,
    setCheckedDesparacitInterna,
  ] = React.useState(false);
  const [checkedTipoEnfermedad, setCheckedTipoEnfermedad] = React.useState('');
  const [checkedVacunacion, setCheckedVacunacion] = React.useState(false);

  const FormSanidad = () => {
    return (
      <View>
        <Title>Sanidad</Title>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Tipo de Acesoramiento</Caption>
        </View>
        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentRadioButton
              title="Privado"
              value="privado"
              status={
                checkedTipoAsesoramiento === 'privado' ? 'checked' : 'unchecked'
              }
              onPress={() => setCheckedTipoAsesoramiento('privado')}
              color="#008577"
            />
            <ComponentRadioButton
              title="Publico"
              value="publico"
              status={
                checkedTipoAsesoramiento === 'publico' ? 'checked' : 'unchecked'
              }
              onPress={() => setCheckedTipoAsesoramiento('publico')}
              color="#008577"
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Aplicacion Complejo Vitaminico"
              style={styles.TextInput}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Desparacitacion</Caption>
        </View>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="externa"
              disabled={false}
              value={checkedDesparacitExterna}
              onValueChange={(value) => setCheckedDesparacitExterna(value)}
            />
            <ComponentCheckBox
              title="interna"
              disabled={false}
              value={checkedDesparacitInterna}
              onValueChange={(value) => setCheckedDesparacitInterna(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Tipo de Antiparasitario"
              style={styles.TextInput}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Tipo de Enfermedad</Caption>
        </View>
        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentRadioButton
              title="Zoonotica"
              value="zoonotica"
              status={
                checkedTipoEnfermedad === 'zoonotica' ? 'checked' : 'unchecked'
              }
              onPress={() => setCheckedTipoEnfermedad('zoonotica')}
              color="#008577"
            />
            <ComponentRadioButton
              title="Propia"
              value="propia"
              status={
                checkedTipoEnfermedad === 'propia' ? 'checked' : 'unchecked'
              }
              onPress={() => setCheckedTipoEnfermedad('propia')}
              color="#008577"
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="Vacunacion"
              disabled={false}
              value={checkedVacunacion}
              onValueChange={(value) => setCheckedVacunacion(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Tipo de Vacuna"
              style={styles.TextInput}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Otras Practicas"
              style={styles.TextInput}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <Button mode="text" style={styles.SectionRight__button}>
              Guardar
            </Button>
            <Button mode="text" style={styles.SectionRight__button}>
              Cancelar
            </Button>
          </ComponentContainer>
        </ComponentContainerGlobal>
      </View>
    );
  };

  return (
    <>
      <ScrollView>
        <Portal>
          <Modal
            animationType="slide"
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.container}>
            <FormSanidad />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
