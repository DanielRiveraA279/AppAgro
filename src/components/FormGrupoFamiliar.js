import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {familyRelationPost} from '../actions/index';

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
import MessageError from './MessageError';

const FormGrupoFamiliar = ({
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
  familyRelationPost,
  producer,
}) => {
  const [nombre, setNombre] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [lasoFamiliar, setLasoFamiliar] = React.useState('Lazo Familiar');
  const [edad, setEdad] = React.useState('');
  const [checkedActLaboral, setCheckedActLaboral] = React.useState(false);
  const [descripcion, setDescripcion] = React.useState('');
  const [
    checkedEducacionPrimaria,
    setCheckedEducacionPrimaria,
  ] = React.useState(false);
  const [
    checkedEducacionSecundaria,
    setCheckedEducacionSecundaria,
  ] = React.useState(false);
  const [
    checkedEducacionTerciaria,
    setCheckedEducacionTerciaria,
  ] = React.useState(false);
  const [
    checkedEducacionUniversitario,
    setCheckedEducacionUniversitario,
  ] = React.useState(false);
  const [grupoFamiliar, setGrupoFamiliar] = React.useState([]);
  const [nombreError, setNombreError] = React.useState(false);
  const [apellidoError, setApellidoError] = React.useState(false);
  const [edadError, setEdadError] = React.useState(false);
  const [descripcionError, setDescripcionError] = React.useState(false);

  useEffect(() => {
    if (Object.keys(producer.producer_person).length !== 0) {
      seteoComponente();
    }
  }, []);

  const seteoComponente = () => {
    const {producer_person} = producer;
    setGrupoFamiliar(producer_person);
  };

  const ValidationSuccessGroup = () => {
    //data new
    const dataNew = {
      family_relation: lasoFamiliar,
      first_name: nombre,
      last_name: apellido,
      age: edad,
      has_primary_studies: checkedEducacionPrimaria,
      has_secondary_studies: checkedEducacionSecundaria,
      has_tertiary_studies: checkedEducacionTerciaria,
      has_university_studies: checkedEducacionUniversitario,
      perform_work_activity: checkedActLaboral,
      description: descripcion,
    };

    //validate array
    if (Object.keys(grupoFamiliar).length !== 0) {
      setGrupoFamiliar([...grupoFamiliar, dataNew]);
    } else {
      setGrupoFamiliar([dataNew]);
    }
  };

  const ShowAlertError = () => {
    MessageError('Datos Faltantes', 'Existe campo/s vacio/s');
  };

  const addGroup = () => {
    if (nombre.trim() === '') {
      setNombreError(true);
      ShowAlertError();
    } else if (apellido.trim() === '') {
      setApellidoError(true);
      ShowAlertError();
    } else if (edad.trim() === '') {
      setEdadError(true);
      ShowAlertError();
    } else if (descripcion.trim() === '') {
      setDescripcion('Sin Descripcion');
    } else {
      setNombreError(false);
      setApellidoError(false);
      setEdadError(false);
      clearDate();
      ValidationSuccessGroup();
    }
  };

  const clearDate = () => {
    setNombre('');
    setApellido('');
    setLasoFamiliar('Laso Familiar');
    setEdad('');
    setCheckedActLaboral(false);
    setDescripcion('');
    setCheckedEducacionPrimaria(false);
    setCheckedEducacionSecundaria(false);
    setCheckedEducacionTerciaria(false);
    setCheckedEducacionUniversitario(false);
    setNombreError(false);
    setApellidoError(false);
    setEdadError(false);
  };

  const itemDelete = (value) => {
    setGrupoFamiliar(grupoFamiliar.filter((item) => item !== value));
  };

  //accion del boton
  const nextStep = () => {
    familyRelationPost(Object.values(grupoFamiliar));

    if (currentPosition === 1) {
      setCurrentPosition(currentPosition + 1);
      console.log('Grupo Familiar: ' + currentPosition);
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

        <ComponentContainer>
          <TextInput
            mode="outlined"
            value={nombre}
            label="Nombre"
            style={styles.TextInput}
            onChangeText={(value) => setNombre(value)}
            error={nombreError}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            value={apellido}
            label="Apellido"
            style={styles.TextInput}
            onChangeText={(value) => setApellido(value)}
            error={apellidoError}
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
              <List.Accordion
                title={lasoFamiliar}
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item
                  title="Hijo/a"
                  left={(props) => <List.Icon {...props} />}
                  onPress={() => setLasoFamiliar('Hijo/a')}
                />
                <List.Item
                  title="Esposo/a"
                  left={(props) => <List.Icon {...props} />}
                  onPress={() => setLasoFamiliar('Esposo/a')}
                />
                <List.Item
                  title="Tio/a"
                  left={(props) => <List.Icon {...props} />}
                  onPress={() => setLasoFamiliar('Tio/a')}
                />
                <List.Item
                  title="Padre"
                  left={(props) => <List.Icon {...props} />}
                  onPress={() => setLasoFamiliar('Padre')}
                />
                <List.Item
                  title="Madre"
                  left={(props) => <List.Icon {...props} />}
                  onPress={() => setLasoFamiliar('Madre')}
                />
                 <List.Item
                  title="Hermano/a"
                  left={(props) => <List.Icon {...props} />}
                  onPress={() => setLasoFamiliar('Hermano/a')}
                />
                <List.Item
                  title="Abuelo/a"
                  left={(props) => <List.Icon {...props} />}
                  onPress={() => setLasoFamiliar('Abuelo/a')}
                />
                <List.Item
                  title="Primo/a"
                  left={(props) => <List.Icon {...props} />}
                  onPress={() => setLasoFamiliar('Primo/a')}
                />
              </List.Accordion>
            </View>
          </View>
        </View>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            value={edad}
            label="Edad en años"
            style={styles.TextInput}
            onChangeText={(value) => setEdad(value)}
            error={edadError}
            keyboardType="numeric"
          />
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
            value={descripcion}
            label="Descripciòn de la actividad"
            style={styles.TextInput}
            onChangeText={(value) => setDescripcion(value)}
            error={descripcionError}
          />
        </ComponentContainer>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Caption style={{color:"#0079BF"}}>Educaciòn</Caption>
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
          <ComponentCheckBox
            title="Universitario"
            disabled={false}
            value={checkedEducacionUniversitario}
            onValueChange={(value) => setCheckedEducacionUniversitario(value)}
          />
        </ComponentContainer>
        <ComponentContainer>
          <Button color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addGroup()}>
            Guardar
          </Button>
          <Button 
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => clearDate()}>
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
            <List.Accordion
              title="Lista Grupo Familiar"
              left={(props) => <List.Icon {...props} icon="equal" />}>
              {Object.keys(grupoFamiliar).length === 0
                ? null
                : grupoFamiliar.map((item, key) => {
                    return (
                      <List.Item
                        key={key}
                        title={`${item.first_name} ${item.last_name} - ${item.family_relation}`}
                        description={`${item.description}`}
                        left={(props) => <List.Icon {...props} icon="delete" />}
                        onPress={() => itemDelete(item)}
                      />
                    );
                  })}
            </List.Accordion>
          </View>
        </View>

        <ComponentContainer>
          <Button 
            color="#0079BF"
            mode="outlined"
            onPress={backStep}
            style={styles.SectionRight__button}>
            Anterior
          </Button>
          <Button color="#0079BF"
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

const mapStateToProps = (state) => {
  return {
    producer: state.producer,
  };
};

const mapDispatchToProps = {
  familyRelationPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormGrupoFamiliar);
