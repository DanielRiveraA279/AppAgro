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
  producer,
}) => {
  const [checkedTipoVehiculo, setCheckedTipoVehiculo] = React.useState('');
  const [tipoVehiculo, setTipoVehiculo] = React.useState('');

  const [checkedSemiRemolque, setCheckedSemiRemolque] = React.useState(false);
  const [tipoAcoplado, setTipoAcoplado] = React.useState('');
  const [checkedAcoplado, setCheckedAcoplado] = React.useState(false);

  const [vehicle, setVehicle] = React.useState([]);

  const [tipoAcopladoError, setTipoAcopladoError] = React.useState(false);

  useEffect(() => {
    if (Object.keys(producer.producer_vehicle).length !== 0) {
      seteoComponente();
    }
  }, []);

  const seteoComponente = () => {
    const {producer_vehicle} = producer;
    setVehicle(producer_vehicle);
  };

  const ValidationSuccess = () => {
    const dataNew = {
      name_vehicle: tipoVehiculo,
      use_trailer: checkedAcoplado,
      type_trailer: tipoAcoplado,
      use_semitrailer: checkedSemiRemolque,
    };

    if (Object.keys(vehicle).length !== 0) {
      setVehicle([...vehicle, dataNew]);
    } else {
      setVehicle([dataNew]);
    }
  };

  const ShowAlertError = () => {
    MessageError('Datos Faltantes', 'Existe campo/s vacio/s');
  };

  const addVehicle = () => {
    setTipoAcopladoError(false);
    setTipoVehiculo('');
    setCheckedAcoplado(false);
    setTipoAcoplado('');
    setCheckedSemiRemolque(false);
    ValidationSuccess(); //aqui guardo
  };

  const itemDelete = (value) => {
    setVehicle(vehicle.filter((item) => item !== value));
  };

  //accion del boton
  const nextStep = () => {
    producerVehiclePost(Object.values(vehicle));

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
        <Caption style={{color: '#0079BF'}}>Tipo Vehiculo</Caption>
      </View>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          label="Tipo de Vehículo"
          style={styles.TextInput}
          value={tipoVehiculo}
          onChangeText={(value) => setTipoVehiculo(value)}
        />
      </ComponentContainer>

      <ComponentContainer>
        <ComponentCheckBox
          title="Acoplado"
          disabled={false}
          value={checkedAcoplado}
          onValueChange={(value) => setCheckedAcoplado(value)}
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
          disabled={checkedAcoplado ? false : true}
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
          color="#0079BF"
          mode="text"
          style={styles.SectionRight__button}
          onPress={() => addVehicle()}>
          Guardar
        </Button>
        <Button color="#0079BF" mode="text" style={styles.SectionRight__button}>
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
            title="Lista de Vehículos"
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
  );
};

const mapStateToProps = (state) => {
  return {
    producer: state.producer,
  };
};

const mapDispatchToProps = {
  producerVehiclePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormVehiculo);
