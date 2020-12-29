import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {producerVehiclePost} from '../actions/index';

import {View} from 'react-native';
import {TextInput, Button, Title, Caption, List} from 'react-native-paper';

import ComponentContainer from './ComponentContainer';
import ComponentRadioButton from './RadioButton';
import ComponentCheckBox from './CheckBox';
import MessageError from './MessageError';

const FormVehiculo = ({
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
  producerVehiclePost,
  producer_vehicle,
}) => {
  const [checkedTipoVehiculo, setCheckedTipoVehiculo] = React.useState('');
  const [checkedSemiRemolque, setCheckedSemiRemolque] = React.useState(false);
  const [tipoAcoplado, setTipoAcoplado] = React.useState('');
  const [vehicle, setVehicle] = React.useState([]);

  const [tipoAcopladoError, setTipoAcopladoError] = React.useState(false);

  useEffect(() => {
    if (Object.keys(producer_vehicle).length !== 0) {
      let dataOld = [];
      producer_vehicle.map((item) => {
        item.vehicle.map((item) => {
          dataOld.push(item);
        });
      });
      setVehicle(dataOld);
    }
  }, []);

  const ValidationSuccess = () => {
    const dataNew = {
      name_vehicle: checkedTipoVehiculo,
      type_trailer: tipoAcoplado,
      use_semitrailer: checkedSemiRemolque,
    };
    const dataOld = [];

    let i = 1;

    if (Object.keys(vehicle).length !== 0) {
      vehicle.map((item) => {
        i += 1;
        dataOld.push(item);
      });

      setVehicle([...dataOld, dataNew]);
    } else {
      setVehicle([dataNew]);
    }

    console.log('COUNT: ', i);
  };

  const ShowAlertError = () => {
    MessageError('Datos Faltantes', 'Existe campo/s vacio/s');
  };

  const addVehicle = () => {
    if (checkedTipoVehiculo.trim() === '') {
      ShowAlertError();
    } else if (
      checkedTipoVehiculo.trim() === 'acoplado' &&
      tipoAcoplado.trim() === ''
    ) {
      setTipoAcopladoError(true);
      ShowAlertError();
    } else {
      setTipoAcopladoError(false);
      setCheckedTipoVehiculo('');
      setTipoAcoplado('');
      setCheckedSemiRemolque(false);
      ValidationSuccess();
    }
  };

  const itemDelete = (value) => {
    setVehicle(vehicle.filter((item) => item !== value));
  };

  //accion del boton
  const nextStep = () => {
    producerVehiclePost({vehicle});

    if (currentPosition === 3) {
      setCurrentPosition(currentPosition + 1);
      console.log('Vehiculo: ' + currentPosition);
    } else {
      setCurrentPosition(3);
    }
  };

  const backStep = () => {
    if (currentPosition === 3) {
      setCurrentPosition(currentPosition - 1);
    } else {
      setCurrentPosition(3);
    }
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Title style={styles.header_title}>{titulo}</Title>
      </View>

      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Caption>Tipo Vehiculo</Caption>
      </View>

      <ComponentContainer>
        <ComponentRadioButton
          title="Camioneta"
          value="camioneta"
          status={checkedTipoVehiculo === 'camioneta' ? 'checked' : 'unchecked'}
          onPress={() => setCheckedTipoVehiculo('camioneta')}
          color="#008577"
        />
        <ComponentRadioButton
          title="Camion"
          value="camion"
          status={checkedTipoVehiculo === 'camion' ? 'checked' : 'unchecked'}
          onPress={() => setCheckedTipoVehiculo('camion')}
          color="#008577"
        />
        <ComponentRadioButton
          title="Acoplado"
          value="acoplado"
          status={checkedTipoVehiculo === 'acoplado' ? 'checked' : 'unchecked'}
          onPress={() => setCheckedTipoVehiculo('acoplado')}
          color="#008577"
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          label="Tipo de Acoplado"
          style={styles.TextInput}
          value={tipoAcoplado}
          onChangeText={(value) => setTipoAcoplado(value)}
          error={tipoAcopladoError}
          disabled={checkedTipoVehiculo.trim() === 'acoplado' ? false : true}
        />
      </ComponentContainer>

      <ComponentContainer>
        <ComponentCheckBox
          title="Semi Remolque"
          disabled={false}
          value={checkedSemiRemolque}
          onValueChange={(value) => setCheckedSemiRemolque(value)}
        />
      </ComponentContainer>

      <ComponentContainer>
        <Button
          mode="text"
          style={styles.SectionRight__button}
          onPress={() => addVehicle()}>
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
          <List.Accordion
            title="Lista de Vehiculos"
            left={(props) => <List.Icon {...props} icon="equal" />}>
            {Object.keys(vehicle).length === 0
              ? null
              : vehicle.map((item, key) => {
                  return (
                    <List.Item
                      key={key}
                      title={`${item.name_vehicle}`}
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
  );
};

const mapStateToProps = (state) => {
  return {
    producer_vehicle: state.producer_vehicle,
  };
};

const mapDispatchToProps = {
  producerVehiclePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormVehiculo);
