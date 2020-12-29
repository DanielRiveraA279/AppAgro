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

const FormModal = ({visible, hideModal}) => {
  const [checkedAviCultIntensiva, setCheckedAviCultIntensiva] = React.useState(
    false,
  );
  const [checked, setChecked] = React.useState(false);
  const [
    checkedHuvosIncubPollosBebes,
    setCheckedHuvosIncubPollosBebes,
  ] = React.useState(false);
  const [checkedGallinas, setCheckedGallinas] = React.useState(false);
  const [checkedGallos, setCheckedGallos] = React.useState(false);
  const [checkedPollos, setCheckedPollos] = React.useState(false);

  const FormAvicultura = () => {
    return (
      <View>
        <Title>Ciclo Avicultura</Title>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="Avicultura Intensiva"
              disabled={false}
              value={checkedAviCultIntensiva}
              onValueChange={(value) => setCheckedAviCultIntensiva(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Planta de Incuvacion"
              style={styles.TextInput}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Machos Reproductores"
              style={styles.TextInput}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="Huevos incubables y Pollos bebes"
              disabled={false}
              value={checkedHuvosIncubPollosBebes}
              onValueChange={(value) => setCheckedHuvosIncubPollosBebes(value)}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Cantidad de Incubadoras"
              style={styles.TextInput}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Parrillero en Engorde"
              style={styles.TextInput}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Ponedores Reproductores"
              style={styles.TextInput}
            />
          </ComponentContainer>
        </ComponentContainerGlobal>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Existencia</Caption>
        </View>

        <ComponentContainerGlobal>
          <ComponentContainer>
            <ComponentCheckBox
              title="Gallinas"
              disabled={false}
              value={checkedGallinas}
              onValueChange={(value) => setCheckedGallinas(value)}
            />
            <ComponentCheckBox
              title="Gallos"
              disabled={false}
              value={checkedGallos}
              onValueChange={(value) => setCheckedGallos(value)}
            />
            <ComponentCheckBox
              title="Pollos"
              disabled={false}
              value={checkedPollos}
              onValueChange={(value) => setCheckedPollos(value)}
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
            <FormAvicultura />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
