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
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {
  const [checkedOrientacion, setCheckedOrientacion] = React.useState('');
  const [checkedTipoSuelo, setCheckedTipoSuelo] = React.useState('');

  const FormCorral = () => {
    return (
      <View>
        <Title>Corral</Title>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Orientacion</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Norte"
            value="norte"
            status={checkedOrientacion === 'norte' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrientacion('norte')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Sur"
            value="sur"
            status={checkedOrientacion === 'sur' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrientacion('sur')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Este"
            value="este"
            status={checkedOrientacion === 'este' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrientacion('este')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Oeste"
            value="oeste"
            status={checkedOrientacion === 'oeste' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrientacion('oeste')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Material"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Tipo de Techo"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Tipo de Suelo</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Tierra"
            value="tierra"
            status={checkedTipoSuelo === 'tierra' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoSuelo('tierra')}
            color="#008577"
          />

          <ComponentRadioButton
            title="Contrapiso"
            value="contrapiso"
            status={checkedTipoSuelo === 'contrapiso' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoSuelo('contrapiso')}
            color="#008577"
          />

          <ComponentRadioButton
            title="Estocado"
            value="estocado"
            status={checkedTipoSuelo === 'estocado' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoSuelo('estocado')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Dimension"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Animales"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput mode="outlined" label="Latitud" style={styles.TextInput} />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Longitud"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <Button mode="text" style={styles.SectionRight__button}>
            Localizar
          </Button>
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
            <FormCorral />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
