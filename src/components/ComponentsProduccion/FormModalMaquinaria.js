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
import ComponentCheckBox from '../CheckBox';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {
  const [checkedAgricola, setCheckedAgricola] = React.useState(false);
  const [checkedGanadera, setCheckedGanadera] = React.useState(false);
  const [checkedAgroIndustria, setCheckedAgroIndustria] = React.useState(false);
  const [checkedPropia, setCheckedPropia] = React.useState(false);
  const [checkedAlquilada, setCheckedAlquilada] = React.useState(false);
  const [checkedPrestada, setCheckedPrestada] = React.useState(false);

  const FormMaquinaria = () => {
    return (
      <View style={styles.container}>
        <Title>Maquinaria</Title>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Destino</Caption>
        </View>
        <ComponentContainer>
          <ComponentCheckBox
            title="Agricola"
            disabled={false}
            value={checkedAgricola}
            onValueChange={(value) => setCheckedAgricola(value)}
          />
          <ComponentCheckBox
            title="Ganadera"
            disabled={false}
            value={checkedGanadera}
            onValueChange={(value) => setCheckedGanadera(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Agro-Industria"
            disabled={false}
            value={checkedAgroIndustria}
            onValueChange={(value) => setCheckedAgroIndustria(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Maquinaria"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Propia"
            disabled={false}
            value={checkedPropia}
            onValueChange={(value) => setCheckedPropia(value)}
          />
          <ComponentCheckBox
            title="Alquilada"
            disabled={false}
            value={checkedAlquilada}
            onValueChange={(value) => setCheckedAlquilada(value)}
          />
        </ComponentContainer>
        <ComponentContainer>
          <ComponentCheckBox
            title="Prestada"
            disabled={false}
            value={checkedPrestada}
            onValueChange={(value) => setCheckedPrestada(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput mode="outlined" label="Modelo" style={styles.TextInput} />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Antiguedad"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput mode="outlined" label="Estado" style={styles.TextInput} />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Observacion"
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
            <FormMaquinaria />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
