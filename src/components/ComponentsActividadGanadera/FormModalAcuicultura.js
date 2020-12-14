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
  const [checkedOrientacion, setCheckedOrientacion] = React.useState('');
  const [checkedPacu, setCheckedPacu] = React.useState(false);
  const [checkedCarpa, setCheckedCarpa] = React.useState(false);
  const [checkedTilapia, setCheckedTilapia] = React.useState(false);
  const [checkedSabalo, setCheckedSabalo] = React.useState(false);
  const [checkedTrucha, setCheckedTrucha] = React.useState(false);

  const FormAcuicultura = () => {
    return (
      <View>
        <Title>Ciclo Acuicultura</Title>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Orientacion</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Completo"
            value="completo"
            status={checkedOrientacion === 'completo' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrientacion('completo')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Engorde"
            value="engorde"
            status={checkedOrientacion === 'engorde' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrientacion('engorde')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentRadioButton
            title="Cria de Alevinos/Juveniles"
            value="cria alevinos/juveniles"
            status={checkedOrientacion === 'cria alevinos/juveniles' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrientacion('cria alevinos/juveniles')}
            color="#008577"
          />
        </ComponentContainer>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Existencia</Caption>
        </View>

        <ComponentContainer>
          <ComponentCheckBox
            title="Pacu"
            disabled={false}
            value={checkedPacu}
            onValueChange={(value)=> setCheckedPacu(value)}
          />
          <ComponentCheckBox
            title="Carpas"
            disabled={false}
            value={checkedCarpa}
            onValueChange={(value)=> setCheckedCarpa(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Tilapia"
            disabled={false}
            value={checkedTilapia}
            onValueChange={(value)=> setCheckedTilapia(value)}
          />
          <ComponentCheckBox
            title="Sabalo"
            disabled={false}
            value={checkedSabalo}
            onValueChange={(value)=> setCheckedSabalo(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Trucha"
            disabled={false}
            value={checkedTrucha}
            onValueChange={(value)=> setCheckedTrucha(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput mode="outlined" label="Otros" style={styles.TextInput} />
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
            <FormAcuicultura />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
