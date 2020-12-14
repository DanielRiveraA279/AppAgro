import React from 'react';
import {View, ScrollView} from 'react-native';

import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../ComponentContainer';
import ComponentCheckBox from '../CheckBox';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {
  const [checkedManejoReproduct, setCheckedManejoReproduct] = React.useState(
    false,
  );
  const [checkedManejoContinuo, setCheckedManejoContinuo] = React.useState(
    false,
  );
  const [checkedServCorral, setCheckedServCorral] = React.useState(false);
  const [checkedInseminArtif, setCheckedInseminArtif] = React.useState(false);
  const [
    checkedTransplEmbrionario,
    setCheckedTransplEmbrionario,
  ] = React.useState(false);

  const FormReproduccion = () => {
    return (
      <View>
        <Title>Reproduccion</Title>

        <ComponentContainer>
          <ComponentCheckBox
            title="Manejo Reproductivo"
            disabled={false}
            value={checkedManejoReproduct}
            onValueChange={(value) => setCheckedManejoReproduct(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Servicio Continuo"
            disabled={false}
            value={checkedManejoContinuo}
            onValueChange={(value) => setCheckedManejoContinuo(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Servicio al Corral"
            disabled={false}
            value={checkedServCorral}
            onValueChange={(value) => setCheckedServCorral(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Inseminacion Artificial"
            disabled={false}
            value={checkedInseminArtif}
            onValueChange={(value) => setCheckedInseminArtif(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Transplante Embrionario"
            disabled={false}
            value={checkedTransplEmbrionario}
            onValueChange={(value)=> setCheckedTransplEmbrionario(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Otras Practicas"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <Button mode="text" style={styles.SectionRight__button}>
            Guardar
          </Button>
          <Button mode="text" style={styles.SectionRight__button}>
            Cancelar
          </Button>
        </ComponentContainer>
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
            <FormReproduccion />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
