import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {producerPostLocal} from '../actions/index';
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
  const [checkedResidente, setCheckedResidente] = React.useState(false);
  const [checkedSexo, setCheckedSexo] = React.useState('');
  const [checkedRemuneracion, setCheckedRemuneracion] = React.useState(false);
  const [cargo, setCargo] = React.useState();
  const [checkTipo, setcheckTipo] = React.useState('');
  const [checkCategoria, setcheckCategoria] = React.useState('');
  const [formList, setFormList] = React.useState([]);

  //list for map ListAccordion
  const [listWorker, setListWorker] = React.useState([]);

  const addProducerActivity = () => {
    //2- data nuew
    const dataNew = {
      type_person: checkedTipoPersona,
      is_resident: checkedResidente,
      gender: checkedSexo,
      receive_remuneration: checkedRemuneracion,
      work_position: cargo,
      type_job: checkTipo,
    };
    //3- array
    let dataOld = [];
    //4- count of list
    let i = 0;

    //5- map of listWorker
    listWorker.map((item)=> {
      i += 1;
      //>>> add register
      dataOld.push(item);
    })

    //6- add dataOld and dataNew
    setListWorker([...dataOld, dataNew]);

    //7- update listWorker
    setFormList([
      {
        data: {
          is_informal_worker: checkedTrabajoInformal,
          works_under_dependency: checkedTrabajoBajoDependencia,
          is_monotributista: checkedTrabajoMonotributo,
          category: checkCategoria,
          use_external_labor: checkedContrObrExt,
          activity_worker: listWorker,
        },
      },
    ]);

    //Show Count Registers
    console.log('COUNT: ', i);
  };

  //delete item of listAccordion
  const itemDelete = (value) => {
    //setter of new list array
    setListWorker(listWorker.filter((item) => item !== value));

    //setter
    setFormList([
      {
        data: {
          is_informal_worker: checkedTrabajoInformal,
          works_under_dependency: checkedTrabajoBajoDependencia,
          is_monotributista: checkedTrabajoMonotributo,
          category: checkCategoria,
          use_external_labor: checkedContrObrExt,
          activity_worker: listWorker,
        },
      },
    ]);
  };

  //accion del boton
  const nextStep = () => {
    //compruebo si contene datos un array de objeto y viceversa
    // Object.keys(formList).length === 0
    //   ? console.log('No contiene datos')
    //   : console.log('Si contiene datos');

    console.log(listWorker);

    // {
    //   Object.keys(formList).length === 0
    //     ? console.log('No contiene datos')
    //     : formList.map((item) => {
    //         //>> map of activity_worker
    //         item.data.activity_worker.map((item) => {
    //           console.log(item.gender);
    //         });
    //       });
    // }

    // formList.map((item) => {
    //   //>> map of activity_worker
    //   item.data.activity_worker.map((item) => {
    //     console.log(item);
    //   });
    // });

    //---------------------------------------------------------------

    // if (currentPosition === 1) {
    //   setCurrentPosition(currentPosition + 1);
    //   console.log('Actividad Laboral: ' + currentPosition);
    // } else {
    //   setCurrentPosition(1);
    // }

    // let i = 0;

    // formList.map((item) => {
    //   i++;
    //   console.log('Registro: ' + i, item.data.activity_worker);
    // });
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

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Categoria</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="A"
            value={checkCategoria}
            status={checkCategoria === 'A' ? 'checked' : 'unchecked'}
            onPress={() => setcheckCategoria('A')}
            color="#008577"
          />
          <ComponentRadioButton
            title="B"
            value={checkCategoria}
            status={checkCategoria === 'B' ? 'checked' : 'unchecked'}
            onPress={() => setcheckCategoria('B')}
            color="#008577"
          />
          <ComponentRadioButton
            title="C"
            value={checkCategoria}
            status={checkCategoria === 'C' ? 'checked' : 'unchecked'}
            onPress={() => setcheckCategoria('C')}
            color="#008577"
          />
          <ComponentRadioButton
            title="D"
            value={checkCategoria}
            status={checkCategoria === 'D' ? 'checked' : 'unchecked'}
            onPress={() => setcheckCategoria('D')}
            color="#008577"
          />
          <ComponentRadioButton
            title="E"
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
          <Caption>Sexo</Caption>
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
          />
        </ComponentContainer>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Tipo</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Residente"
            value={checkTipo}
            status={checkTipo === 'residente' ? 'checked' : 'unchecked'}
            onPress={() => setcheckTipo('residente')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Permanente"
            value={checkTipo}
            status={checkTipo === 'permanente' ? 'checked' : 'unchecked'}
            onPress={() => setcheckTipo('permanente')}
            color="#008577"
          />
        </ComponentContainer>
        <ComponentContainer>
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
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addProducerActivity()}>
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
              <List.Accordion
                title="Trabajador"
                left={(props) => <List.Icon {...props} />}>
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

const mapStateToProps = (state) => {
  return {
    MyListProducer: state.MyListProducer,
  };
};

const mapDispatchToProps = {
  producerPostLocal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormGrupoActividadLaboral);
