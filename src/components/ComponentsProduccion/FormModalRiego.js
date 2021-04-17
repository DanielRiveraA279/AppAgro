import React from 'react';
import {View} from 'react-native';

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
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal, riego, setRiego}) => {
  const [checkedTipoRiego, setCheckedTipoRiego] = React.useState('');
  const [checkedRiegoPresurizado, setCheckedRiegoPresurizado] = React.useState(
    '',
  );
  const [checkedRiegoSuperficial, setCheckedRiegoSuperficial] = React.useState(
    '',
  );

  const [tomaSeccion, setTomaSeccion] = React.useState('');
  const [horaAgua, setHoraAgua] = React.useState('');
  const [condAseqCan, setCondAseCan] = React.useState('');
  const [checkedDerecho, setCheckedDerecho] = React.useState('');
  const [checkedTurnos, setCheckedTurnos] = React.useState('');

  const addProductionIrrigation = () => {
    const dataNew = {
      type_irrigation: checkedTipoRiego,
      pressurized_irrigation: checkedRiegoPresurizado,
      surface_irrigation: checkedRiegoSuperficial,
      take_section: tomaSeccion,
      watering_hours: horaAgua,
      channel_conditions: condAseqCan,
      right: checkedDerecho,
      shifts: checkedTurnos,
    };
  
    setRiego([dataNew]);
    

    setCheckedTipoRiego('');
    setCheckedRiegoPresurizado('');
    setCheckedRiegoSuperficial('');
    setTomaSeccion('');
    setHoraAgua('');
    setCondAseCan('');
    setCheckedDerecho('');
    setCheckedTurnos('');
  };

  return (
    <Portal>
      <Modal
        animationType="slide"
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Title>Riego</Title>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Caption style={{color:"#0079BF"}}>Tipo de Riego</Caption>
          </View>

          <ComponentContainerGlobal>
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
                status={
                  checkedTipoRiego === 'superficial' ? 'checked' : 'unchecked'
                }
                onPress={() => setCheckedTipoRiego('superficial')}
                color="#008577"
              />
              <ComponentRadioButton
                title="Ambos"
                value="ambos"
                status={checkedTipoRiego === 'ambos' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedTipoRiego('ambos')}
                color="#008577"
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Caption style={{color:"#0079BF"}}>Riego Presurizado</Caption>
          </View>

          <ComponentContainerGlobal>
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
                title="Asperción"
                value="aspercion"
                status={
                  checkedRiegoPresurizado === 'aspercion'
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => setCheckedRiegoPresurizado('aspercion')}
                color="#008577"
              />
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
          </ComponentContainerGlobal>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Caption style={{color:"#0079BF"}}>Riego Superficial</Caption>
          </View>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <ComponentRadioButton
                title="Inundación"
                value="inundacion"
                status={
                  checkedRiegoSuperficial === 'inundacion'
                    ? 'checked'
                    : 'unchecked'
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
              <ComponentRadioButton
                title="Caracol"
                value="caracol"
                status={
                  checkedRiegoSuperficial === 'caracol'
                    ? 'checked'
                    : 'unchecked'
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
              <ComponentRadioButton
                title="Terrazas"
                value="terrazas"
                status={
                  checkedRiegoSuperficial === 'terrazas'
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => setCheckedRiegoSuperficial('terrazas')}
                color="#008577"
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <TextInput
                mode="outlined"
                label="Toma/Sección"
                style={styles.TextInput}
                value={tomaSeccion}
                onChangeText={(value) => setTomaSeccion(value)}
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <TextInput
                mode="outlined"
                label="Horas de Agua"
                style={styles.TextInput}
                value={horaAgua}
                onChangeText={(value) => setHoraAgua(value)}
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <TextInput
                mode="outlined"
                label="Condición de Acequias y Canales"
                style={styles.TextInput}
                value={condAseqCan}
                onChangeText={(value) => setCondAseCan(value)}
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Caption style={{color:"#0079BF"}}>Derecho</Caption>
          </View>

          <ComponentContainerGlobal>
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
          </ComponentContainerGlobal>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Caption style={{color:"#0079BF"}}>Turnos</Caption>
          </View>
          <ComponentContainerGlobal>
            <ComponentContainer>
              <ComponentRadioButton
                title="Cortos (7 dias)"
                value="cortos"
                status={checkedTurnos === 'cortos' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedTurnos('cortos')}
                color="#008577"
              />
              <ComponentRadioButton
                title="Medios (14 dias)"
                value="medios"
                status={checkedTurnos === 'medios' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedTurnos('medios')}
                color="#008577"
              />
              <ComponentRadioButton
                title="Largos (30 dias)"
                value="largos"
                status={checkedTurnos === 'largos' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedTurnos('largos')}
                color="#008577"
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <Button color="#0079BF"
                mode="text"
                style={styles.SectionRight__button}
                onPress={() => addProductionIrrigation()}>
                Guardar
              </Button>
              <Button color="#0079BF"
                mode="text"
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
