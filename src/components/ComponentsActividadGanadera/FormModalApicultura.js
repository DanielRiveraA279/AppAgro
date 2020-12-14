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
import ComponentRadioButton from '../RadioButton';
import ComponentCheckBox from '../CheckBox';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {
  const [checkedEspecie, setCheckedEspecie] = React.useState('');
  const [checkedExistColmena, setCheckedExistColmena] = React.useState(false);
  const [checkedTipo, setCheckedTipo] = React.useState('');
  const [checkedCajones, setCheckedCajones] = React.useState('');
  const [checkedTipoFlor, setCheckedTipoFlor] = React.useState('');
  const [checkedRenapa, setCheckedRenapa] = React.useState(false);

  const FormApicultura = () => {
    return (
      <View>
        <Title>Ciclo Apicultura</Title>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Caption>Especie</Caption>
          </View>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Especie 1"
            value="especia 1"
            status={checkedEspecie === 'especia 1' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedEspecie('especia 1')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Especie 2"
            value="Especie 2"
            status={checkedEspecie === 'Especie 2' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedEspecie('Especie 2')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Existencia Colmena"
            disabled={false}
            value={checkedExistColmena}
            onValueChange={(value) => setCheckedExistColmena(value)}
          />
        </ComponentContainer>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Tipo</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Propias"
            value="propias"
            status={checkedTipo === 'propias' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipo('propias')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Terceros"
            value="terceros"
            status={checkedTipo === 'terceros' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipo('terceros')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Cajones"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cant. Alsas por Cajones"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Caption>Cajones</Caption>
          </View>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Fijos"
            value="fijos"
            status={checkedCajones === 'fijos' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedCajones('fijos')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Moviles"
            value="moviles"
            status={checkedCajones === 'moviles' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedCajones('moviles')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Litros por Cajon"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Periodo de Ponilizacion"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Tipo de Flor</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Tipo 1"
            value="Tipo 1"
            status={checkedTipoFlor === 'Tipo 1' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoFlor('Tipo 1')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Tipo 2"
            value="Tipo 2"
            status={checkedTipoFlor === 'Tipo 2' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoFlor('Tipo 2')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="RENAPA"
            disabled={false}
            value={checkedRenapa}
            onValueChange={(value) => setCheckedRenapa(value)}
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
            <FormApicultura />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
