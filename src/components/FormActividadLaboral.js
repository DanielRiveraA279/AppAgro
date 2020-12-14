import React from 'react';
import {View} from 'react-native';
import {
  TextInput,
  Button,
  Title,
  List,
  Caption,
  Divider,
  Provider,
} from 'react-native-paper';
import ComponentContainer from './ComponentContainer';
import ComponentCheckBox from './CheckBox';
import ComponentRadioButton from './RadioButton';

const FormGrupoActividadLaboral = ({
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
}) => {

  const [checkedTrabajoInformal, setCheckedTrabajoInformal] = React.useState(
    false,
  );
  const [
    checkedTrabajoBajoDependencia,
    setCheckedTrabajoBajoDependencia,
  ] = React.useState(false);
  const [
    checkedTrabajoMonotributo,
    setCheckedTrabajoMonotributo,
  ] = React.useState(false);
  const [checkedContrObrExt, setCheckedContrObrExt] = React.useState(false);
  const [checkedTipoPersona, setCheckedTipoPersona] = React.useState('');
  const [
    checkedResidente,
    setCheckedResidente,
  ] = React.useState(false);
  const [checkedSexo, setCheckedSexo] = React.useState('');
  const [checkedRemuneracion, setCheckedRemuneracion] = React.useState(false);

  //accion del boton
  const nextStep = () => {
    if (currentPosition === 1) {
      setCurrentPosition(currentPosition + 1);
      console.log('Actividad Laboral: ' + currentPosition);
    } else {
      setCurrentPosition(1);
    }
  };

  const backStep = () => {
    if (currentPosition === 1) {
      setCurrentPosition(currentPosition - 1);
    } else {
      setCurrentPosition(1);
    }
  };

  return (
    <Provider>
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <Title style={styles.header_title}>{titulo}</Title>
        </View>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Caption>Trabajo</Caption>
        </View>

        <ComponentContainer>
          <ComponentCheckBox
            title="Informal"
            disabled={false}
            value={checkedTrabajoInformal}
            onValueChange={(value) => setCheckedTrabajoInformal(value)}
          />
          <ComponentCheckBox
            title="Bajo Dependencia"
            disabled={false}
            value={checkedTrabajoBajoDependencia}
            onValueChange={(value) => setCheckedTrabajoBajoDependencia(value)}
          />
        </ComponentContainer>
        <ComponentContainer>
          <ComponentCheckBox
            title="Monotributista"
            disabled={false}
            value={checkedTrabajoMonotributo}
            onValueChange={(value) => setCheckedTrabajoMonotributo(value)}
          />
        </ComponentContainer>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <List.AccordionGroup>
                <List.Accordion
                  title="Selecciona un Categoria"
                  id="0"
                  left={(props) => <List.Icon {...props} />}>
                  <List.Item
                    title="A"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => console.log('ELiminado')}
                  />
                  <List.Item
                    title="B"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => console.log('ELiminado')}
                  />
                  <List.Item
                    title="C"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => console.log('ELiminado')}
                  />
                  <List.Item
                    title="D"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => console.log('ELiminado')}
                  />
                  <List.Item
                    title="E"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => console.log('ELiminado')}
                  />
                </List.Accordion>
              </List.AccordionGroup>
            </View>
          </View>
        </View>

        <ComponentContainer>
          <ComponentCheckBox
            title="Contr. Obr. Exter."
            disabled={false}
            value={checkedContrObrExt}
            onValueChange={(value) => setCheckedContrObrExt(value)}
          />
        </ComponentContainer>

        <Divider />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Tipo de Persona</Caption>
        </View>
        <ComponentContainer>
          <ComponentRadioButton
            title="Trabajador"
            value="trabajador"
            status={checkedTipoPersona === 'trabajador' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoPersona('trabajador')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Familiar"
            value="familiar"
            status={checkedTipoPersona === 'familiar' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoPersona('familiar')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Residente"
            disabled={false}
            value={checkedResidente}
            onValueChange={(value) => setCheckedResidente(value)}
          />
        </ComponentContainer>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Sexo</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Femenino"
            value="femenino"
            status={checkedSexo === 'femenino' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedSexo('femenino')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Masculino"
            value="masculino"
            status={checkedSexo === 'masculino' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedSexo('masculino')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Remuneracion"
            disabled={false}
            value={checkedRemuneracion}
            onValueChange={(value) => setCheckedRemuneracion(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput mode="outlined" label="Cargo" style={styles.TextInput} />
        </ComponentContainer>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <List.AccordionGroup>
                <List.Accordion
                  title="Seleccionar"
                  id="0"
                  left={(props) => <List.Icon {...props} />}>
                  <List.Item
                    title="Residente"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => console.log('ELiminado')}
                  />
                  <List.Item
                    title="Permanente"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => console.log('ELiminado')}
                  />
                  <List.Item
                    title="Transitorio"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => console.log('ELiminado')}
                  />
                </List.Accordion>
              </List.AccordionGroup>
            </View>
          </View>
        </View>

        <ComponentContainer>
          <Button mode="text" style={styles.SectionRight__button}>
            Guardar
          </Button>
          <Button mode="text" style={styles.SectionRight__button}>
            Cancelar
          </Button>
        </ComponentContainer>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <List.AccordionGroup>
                <List.Accordion
                  title="Trabajador"
                  id="0"
                  left={(props) => <List.Icon {...props} />}>
                  <List.Item
                    title="Datos 1"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => console.log('ELiminado')}
                  />
                  <List.Item
                    title="Datos 2"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => console.log('ELiminado')}
                  />
                  <List.Item
                    title="Datos 3"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => console.log('ELiminado')}
                  />
                </List.Accordion>
              </List.AccordionGroup>
            </View>
          </View>
        </View>

        <ComponentContainer>
          <Button
            mode="outlined"
            onPress={backStep}
            style={styles.SectionRight__button}>
            Anterior
          </Button>
          <Button
            mode="outlined"
            onPress={nextStep}
            style={styles.SectionRight__button}>
            Siguiente
          </Button>
        </ComponentContainer>
      </View>
    </Provider>
  );
};

export default FormGrupoActividadLaboral;
