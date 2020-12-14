import React from 'react';
import {View} from 'react-native';
import {
  TextInput,
  Button,
  Title,
  List,
  Caption,
  Provider,
} from 'react-native-paper';

import ComponentContainer from './ComponentContainer';
import ComponentCheckBox from './CheckBox';

const FormGrupoFamiliar = ({
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
}) => {
  const [checkedActLaboral, setCheckedActLaboral] = React.useState(false);
  const [checkedEducacionPrimaria, setCheckedEducacionPrimaria] = React.useState(false);
  const [checkedEducacionSecundaria, setCheckedEducacionSecundaria] = React.useState(false);
  const [checkedEducacionTerciaria, setCheckedEducacionTerciaria] = React.useState(false);
  const [checkedEducacionUniversitario, setCheckedEducacionUniversitario] = React.useState(false);

  //accion del boton
  const nextStep = () => {
    if (currentPosition === 2) {
      setCurrentPosition(currentPosition + 1);
      console.log('Grupo Familiar: ' + currentPosition);
    } else {
      setCurrentPosition(2);
    }
  };

  const backStep = () => {
    if (currentPosition === 2) {
      setCurrentPosition(currentPosition - 1);
    } else {
      setCurrentPosition(2);
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

        <ComponentContainer>
          <TextInput mode="outlined" label="Nombre" style={styles.TextInput} />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Apellido"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <List.AccordionGroup>
                <List.Accordion
                  title="Seleccione Laso Familiar"
                  id="0"
                  left={(props) => <List.Icon {...props} icon="equal" />}>
                  <List.Item
                    title="Hijo/a"
                    left={(props) => <List.Icon {...props} icon="delete" />}
                    onPress={() => console.log('ELiminado')}
                  />
                  <List.Item
                    title="Esposo/a"
                    left={(props) => <List.Icon {...props} icon="delete" />}
                    onPress={() => console.log('ELiminado')}
                  />
                  <List.Item
                    title="Tio/a"
                    left={(props) => <List.Icon {...props} icon="delete" />}
                    onPress={() => console.log('ELiminado')}
                  />
                  <List.Item
                    title="Padre"
                    left={(props) => <List.Icon {...props} icon="delete" />}
                    onPress={() => console.log('ELiminado')}
                  />
                  <List.Item
                    title="Madre"
                    left={(props) => <List.Icon {...props} icon="delete" />}
                    onPress={() => console.log('ELiminado')}
                  />
                  <List.Item
                    title="Abuelo/a"
                    left={(props) => <List.Icon {...props} icon="delete" />}
                    onPress={() => console.log('ELiminado')}
                  />
                  <List.Item
                    title="Primo/a"
                    left={(props) => <List.Icon {...props} icon="delete" />}
                    onPress={() => console.log('ELiminado')}
                  />
                </List.Accordion>
              </List.AccordionGroup>
            </View>
          </View>
        </View>

        <ComponentContainer>
          <TextInput mode="outlined" label="Edad" style={styles.TextInput} />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Actividad Laboral"
            disabled={false}
            value={checkedActLaboral}
            onValueChange={(value) => setCheckedActLaboral(value)}
          />
        </ComponentContainer>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Descripciòn de la actividad"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Caption>Educaciòn</Caption>
        </View>

        <ComponentContainer>
          <ComponentCheckBox
            title="Primario"
            disabled={false}
            value={checkedEducacionPrimaria}
            onValueChange={(value) => setCheckedEducacionPrimaria(value)}
          />
          <ComponentCheckBox
            title="Secundario"
            disabled={false}
            value={checkedEducacionSecundaria}
            onValueChange={(value) => setCheckedEducacionSecundaria(value)}
          />
          <ComponentCheckBox
            title="Terciario"
            disabled={false}
            value={checkedEducacionTerciaria}
            onValueChange={(value) => setCheckedEducacionTerciaria(value)}
          />
        </ComponentContainer>
        <ComponentContainer>
          <ComponentCheckBox
            title="Universitario"
            disabled={false}
            value={checkedEducacionUniversitario}
            onValueChange={(value) => setCheckedEducacionUniversitario(value)}
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

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <List.AccordionGroup>
              <List.Accordion
                title="Lista Grupo Familiar"
                id="0"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item
                  title="First Item"
                  left={(props) => <List.Icon {...props} icon="delete" />}
                  onPress={() => console.log('ELiminado')}
                />
              </List.Accordion>
            </List.AccordionGroup>
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

export default FormGrupoFamiliar;
