import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {producerPostActivity} from '../actions/index';
import {View} from 'react-native';
import {
  TextInput,
  Button,
  Title,
  List,
  Caption,
  Divider,
  Provider,
  Subheading,
} from 'react-native-paper';
import ComponentContainer from './ComponentContainer';
import ComponentCheckBox from './CheckBox';
import ComponentRadioButton from './RadioButton';
import MessageError from './MessageError';

const FormGrupoActividadLaboral = ({
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
  producer,
  producerPostActivity,
}) => {
  const [checkedTrabajoFormal, setCheckedTrabajoFormal] = React.useState(false);
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
  const [checkedResidente, setCheckedResidente] = React.useState(false);
  const [checkedSexo, setCheckedSexo] = React.useState('');
  const [checkedRemuneracion, setCheckedRemuneracion] = React.useState(false);
  const [cargo, setCargo] = React.useState('');
  const [checkTipo, setcheckTipo] = React.useState('');
  const [checkCategoria, setcheckCategoria] = React.useState('');
  const [errorCargo, setErrorCargo] = React.useState(false);
  //list for map ListAccordion
  const [listWorker, setListWorker] = React.useState([]);

  useEffect(() => {
    if (Object.keys(producer.producer_activity).length !== 0) {
      seteoComponente();
    }
  }, []);

  const seteoComponente = () => {
    const {producer_activity} = producer;

    //setCheckedTrabajoFormal(producer_activity.is_formal_worker);

    setCheckedTrabajoBajoDependencia(producer_activity.works_under_dependency);
    setCheckedTrabajoMonotributo(producer_activity.is_monotributista);
    setcheckCategoria(producer_activity.category);
    setCheckedContrObrExt(producer_activity.use_external_labor);
    setListWorker(producer_activity.activity_worker);
  };

  const clearData = () => {
    setCheckedTrabajoFormal(false);
    setCheckedTipoPersona('');
    setCheckedResidente(false);
    setCheckedSexo('');
    setCheckedRemuneracion(false);
    setCargo('');
    setcheckTipo('');
  };

  const ShowAlert = () => {
    setErrorCargo(true);
    MessageError('Datos Faltante', 'Existe campo/s vacio/s');
  };

  const addProducerActivity = () => {
    //data nuew
    const dataNew = {
      is_formal_worker: checkedTrabajoFormal, //trabajo formal
      type_person: checkedTipoPersona,
      is_resident: checkedResidente,
      gender: checkedSexo,
      receive_remuneration: checkedRemuneracion,
      work_position: cargo,
      type_job: checkTipo,
    };

    //alidate array
    if (Object.keys(listWorker).length !== 0) {
      //add dataOld and dataNew
      setListWorker([...listWorker, dataNew]); //si listWorker esta vacio lo mismo agrega el dato nuevo solo eso
    } else {
      //add dataNew
      setListWorker([dataNew]);
    }
    //5-validate
    setErrorCargo(false);

    clearData();
  };

  //delete item of listAccordion
  const itemDelete = (value) => {
    //setter of new list array
    setListWorker(listWorker.filter((item) => item !== value));
  };

  //accion del boton
  const nextStep = () => {
    //setter in action
    producerPostActivity({
      works_under_dependency: checkedTrabajoBajoDependencia,
      is_monotributista: checkedTrabajoMonotributo,
      category: checkCategoria,
      use_external_labor: checkedContrObrExt,
      activity_worker: Object.values(listWorker),
    });

    //---------------------------------------------------------------
    if (currentPosition === 2) {
      setCurrentPosition(currentPosition + 1);
      console.log('Actividad Laboral: ' + currentPosition);
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

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Caption style={{color: '#0079BF'}}>Trabajo</Caption>
        </View>

        <ComponentContainer>
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
            value={checkedTrabajoMonotributo}
            onValueChange={(value) => setCheckedTrabajoMonotributo(value)}
          />
        </ComponentContainer>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption style={{color: '#0079BF'}}>Categoria</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="A"
            disabled={!checkedTrabajoMonotributo}
            value={checkCategoria}
            status={checkCategoria === 'A' ? 'checked' : 'unchecked'}
            onPress={() => setcheckCategoria('A')}
            color="#008577"
          />
          <ComponentRadioButton
            title="B"
            disabled={!checkedTrabajoMonotributo}
            value={checkCategoria}
            status={checkCategoria === 'B' ? 'checked' : 'unchecked'}
            onPress={() => setcheckCategoria('B')}
            color="#008577"
          />
          <ComponentRadioButton
            title="C"
            disabled={!checkedTrabajoMonotributo}
            value={checkCategoria}
            status={checkCategoria === 'C' ? 'checked' : 'unchecked'}
            onPress={() => setcheckCategoria('C')}
            color="#008577"
          />
          <ComponentRadioButton
            title="D"
            disabled={!checkedTrabajoMonotributo}
            value={checkCategoria}
            status={checkCategoria === 'D' ? 'checked' : 'unchecked'}
            onPress={() => setcheckCategoria('D')}
            color="#008577"
          />
          <ComponentRadioButton
            title="E"
            disabled={!checkedTrabajoMonotributo}
            value={checkCategoria}
            status={checkCategoria === 'E' ? 'checked' : 'unchecked'}
            onPress={() => setcheckCategoria('E')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Contr. Obr. Exter."
            disabled={false}
            value={checkedContrObrExt}
            onValueChange={(value) => setCheckedContrObrExt(value)}
          />
        </ComponentContainer>

        <Divider />

        <ComponentContainer>
          <Subheading>Trabajador</Subheading>
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Trabajo Formal?"
            disabled={false}
            value={checkedTrabajoFormal}
            onValueChange={(value) => setCheckedTrabajoFormal(value)}
          />
        </ComponentContainer>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption style={{color: '#0079BF'}}>Tipo de Persona</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Trabajador"
            value={checkedTipoPersona}
            status={
              checkedTipoPersona === 'trabajador' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedTipoPersona('trabajador')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Familiar"
            value={checkedTipoPersona}
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
          <Caption style={{color: '#0079BF'}}>Sexo</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Femenino"
            value={checkedSexo}
            status={checkedSexo === 'femenino' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedSexo('femenino')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Masculino"
            value={checkedSexo}
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
          <TextInput
            mode="outlined"
            label="Cargo"
            style={styles.TextInput}
            onChangeText={(value) => setCargo(value)}
            error={errorCargo}
          />
        </ComponentContainer>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption style={{color: '#0079BF'}}>Estadia</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Permanente"
            value={checkTipo}
            status={checkTipo === 'permanente' ? 'checked' : 'unchecked'}
            onPress={() => setcheckTipo('permanente')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Transitorio"
            value={checkTipo}
            status={checkTipo === 'transitorio' ? 'checked' : 'unchecked'}
            onPress={() => setcheckTipo('transitorio')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <Button
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addProducerActivity()}>
            Guardar
          </Button>
          <Button
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => clearData()}>
            Cancelar
          </Button>
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
                title="Lista de Trabajadores"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                {Object.keys(listWorker).length === 0
                  ? null
                  : listWorker.map((item, key) => {
                      return (
                        <List.Item
                          key={key}
                          title={`${item.work_position} - ${item.type_job}`}
                          description={` ${item.type_person} - ${item.gender}`}
                          left={(props) => (
                            <List.Icon {...props} icon="delete" />
                          )}
                          onPress={() => itemDelete(item)}
                        />
                      );
                    })}
              </List.Accordion>
            </View>
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
          <Button
            color="#0079BF"
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
  producerPostActivity,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormGrupoActividadLaboral);
