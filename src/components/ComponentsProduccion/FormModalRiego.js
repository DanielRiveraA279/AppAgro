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
  const [checkedTipoRiego, setCheckedTipoRiego] = React.useState('');
  const [checkedRiegoPresurizado, setCheckedRiegoPresurizado] = React.useState(
    '',
  );
  const [checkedRiegoSuperficial, setCheckedRiegoSuperficial] = React.useState(
    '',
  );
  const [checkedDerecho, setCheckedDerecho] = React.useState('');
  const [checkedTurnos, setCheckedTurnos] = React.useState('');

  const FormRiego = () => {
    return (
      <View style={styles.container}>
        <Title>Riego</Title>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Tipo de Riego</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Presurizado"
            value="presurizado"
            status={
              checkedTipoRiego === 'presurizado' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedTipoRiego('presurizado')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Superficial"
            value="superficial"
            status={checkedTipoRiego === 'superficial' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoRiego('superficial')}
            color="#008577"
          />
        </ComponentContainer>
        <ComponentContainer>
          <ComponentRadioButton
            title="Ambos"
            value="ambos"
            status={checkedTipoRiego === 'ambos' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoRiego('ambos')}
            color="#008577"
          />
        </ComponentContainer>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Riego Presurizado</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Goteo"
            value="goteo"
            status={
              checkedRiegoPresurizado === 'goteo' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedRiegoPresurizado('goteo')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Aspercion"
            value="aspercion"
            status={
              checkedRiegoPresurizado === 'aspercion' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedRiegoPresurizado('aspercion')}
            color="#008577"
          />
        </ComponentContainer>
        <ComponentContainer>
          <ComponentRadioButton
            title="Micro Aspercion"
            value="microAspercion"
            status={
              checkedRiegoPresurizado === 'microAspercion'
                ? 'checked'
                : 'unchecked'
            }
            onPress={() => setCheckedRiegoPresurizado('microAspercion')}
            color="#008577"
          />
        </ComponentContainer>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Riego Superficial</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Inundacion"
            value="inundacion"
            status={
              checkedRiegoSuperficial === 'inundacion' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedRiegoSuperficial('inundacion')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Melga"
            value="melga"
            status={
              checkedRiegoSuperficial === 'melga' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedRiegoSuperficial('melga')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentRadioButton
            title="Caracol"
            value="caracol"
            status={
              checkedRiegoSuperficial === 'caracol' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedRiegoSuperficial('caracol')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Surco"
            value="surco"
            status={
              checkedRiegoSuperficial === 'surco' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedRiegoSuperficial('surco')}
            color="#008577"
          />
        </ComponentContainer>
        <ComponentContainer>
          <ComponentRadioButton
            title="Terrazas"
            value="terrazas"
            status={
              checkedRiegoSuperficial === 'terrazas' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedRiegoSuperficial('terrazas')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Toma/Seccion"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Horas de Agua"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Condicion de Asequias y Canales"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Derecho</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Agua"
            value="agua"
            status={checkedDerecho === 'agua' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedDerecho('agua')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Eventualmente"
            value="eventualmente"
            status={
              checkedDerecho === 'eventualmente' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedDerecho('eventualmente')}
            color="#008577"
          />
        </ComponentContainer>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Turnos</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Cortos"
            value="cortos"
            status={checkedTurnos === 'cortos' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTurnos('cortos')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Medios"
            value="medios"
            status={checkedTurnos === 'medios' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTurnos('medios')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentRadioButton
            title="Largos"
            value="largos"
            status={checkedTurnos === 'largos' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTurnos('largos')}
            color="#008577"
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
            <FormRiego />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
