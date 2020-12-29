import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {producerPostLocal} from '../actions/index';
import {View, Platform} from 'react-native';
import {TextInput, Button, Title, Caption} from 'react-native-paper';
import ComponentContainer from './ComponentContainer';
import ComponentRadioButton from './RadioButton';
import Shedule from './shedule';
import MessageError from './MessageError';

const FormProductor = ({
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
  data_producer,
  producerPostLocal,
}) => {
  //valor inicial
  const [nombre, setNombre] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [fec_nac, setFecNac] = React.useState('');
  const [documento, setDocumento] = React.useState('');
  const [genero, setGenero] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  const [distrito, setDistrito] = React.useState('');
  const [direccion, setDireccion] = React.useState('');
  const [tipoResidencia, setTipoResidencia] = React.useState('');
  const [estadoResidencia, setEstadoResidencia] = React.useState('');

  const [estadoResidencia_error, setEstadoResidencia_error] = React.useState(
    false,
  );
  const [tipoResidencia_error, setTipoResidencia_error] = React.useState(false);
  const [direccion_error, setDireccion_error] = React.useState(false);
  const [distrito_error, setDistrito_error] = React.useState(false);
  const [telefono_error, setTelefono_error] = React.useState(false);
  const [dni_error, setDni_error] = React.useState(false);
  const [fec_nac_error, setFec_nac_error] = React.useState(false);
  const [apellido_error, setApellido_error] = React.useState(false);
  const [nombre_error, setNombre_error] = React.useState(false);

  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    //cada vez que entro a esta pantalla seteo lo que tenga redux guardado en su store
    if (Object.keys(data_producer).length !== 0) {
      seteoComponentes();
    }
  }, []);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setFecNac('');
  };

  //redux guarda estos datos y cada datos son asignados a su correspondiente campos
  const seteoComponentes = () => {
    data_producer.map((item) => {
      setNombre(item.first_name);
      setApellido(item.last_name);
      setFecNac(item.date_birth);
      setDocumento(item.document);
      setGenero(item.gender);
      setTelefono(item.phone_number);
      setDistrito(item.producer_home.district);
      setDireccion(item.producer_home.address);
      setTipoResidencia(item.producer_home.type_recidence);
      setEstadoResidencia(item.producer_home.state_recidence);
      console.log('PRODUCTOR: ', item);
    });
  };

  const showAlertError = () => {
    MessageError('Datos Faltantes', 'Existe campo/s vacio/s');
  };

  /*const siguientePaso = () => {

    if (nombre.trim() === '') {
      setNombre_error(true);
      showAlertError();
    } else if (apellido.trim() === '') {
      setApellido_error(true);
      showAlertError();
    } else if (fec_nac.trim() === '') {
      setFec_nac_error(true);
      showAlertError();
    } else if (documento.trim() === '') {
      setDni_error(true);
      showAlertError();
    } else if (telefono.trim() === '') {
      setTelefono_error(true);
      showAlertError();
    } else if (distrito.trim() === '') {
      setDistrito_error(true);
      showAlertError();
    } else if (direccion.trim() === '') {
      setDireccion_error(true);
      showAlertError();
    } else if (tipoResidencia.trim() === '') {
      setTipoResidencia_error(true);
      showAlertError();
    } else if (estadoResidencia.trim() === '') {
      setEstadoResidencia_error(true);
      showAlertError();
    } else if (genero.trim() === '') {
      showAlertError();
    } else {
      //ingreso registros y envio al store
      producerPostLocal({
        first_name: nombre,
        last_name: apellido,
        date_birth: fec_nac,
        document: documento,
        gender: genero,
        phone_number: telefono,
        producer_home: {
          district: distrito,
          address: direccion,
          type_recidence: tipoResidencia,
          state_recidence: estadoResidencia,
        },
      });

      setNombre_error(false);
      setApellido_error(false);
      setFec_nac_error(false);
      setDni_error(false);
      setTelefono_error(false);
      setDistrito_error(false);
      setDireccion_error(false);
      setTipoResidencia_error(false);
      setEstadoResidencia_error(false);

      if (currentPosition === 0) {
        setCurrentPosition(currentPosition + 1);
      } else {
        setCurrentPosition(0);
      }
    }
  }; */

  const siguientePaso = () => {
    if (currentPosition === 0) {
      setCurrentPosition(currentPosition + 1);
    } else {
      setCurrentPosition(0);
    }
  };

  return (
    <View>
      {show && (
        <Shedule
          mode={mode}
          setMode={setMode}
          setShow={setShow}
          setFecNac={setFecNac}
        />
      )}

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
          error={nombre_error}
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={apellido}
          label="Apellido"
          style={styles.TextInput}
          onChangeText={(value) => setApellido(value)}
          error={apellido_error}
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={fec_nac}
          label="Fecha Nac."
          style={styles.TextInput}
          onChangeText={(value) => setFecNac(value)}
          error={fec_nac_error}
        />
      </ComponentContainer>

      <ComponentContainer>
        <Button
          mode="outlined"
          onPress={() => showDatepicker()}
          style={styles.SectionRight__button}>
          Calendario
        </Button>
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={documento}
          label="DNI"
          style={styles.TextInput}
          onChangeText={(value) => setDocumento(value)}
          error={dni_error}
        />
      </ComponentContainer>

      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Caption>Sexo</Caption>
      </View>

      <ComponentContainer>
        <ComponentRadioButton
          title="Femenino"
          value={genero}
          status={genero === 'femenino' ? 'checked' : 'unchecked'}
          onPress={() => setGenero('femenino')}
          color="#008577"
        />
        <ComponentRadioButton
          title="Masculino"
          value={genero}
          status={genero === 'masculino' ? 'checked' : 'unchecked'}
          onPress={() => setGenero('masculino')}
          color="#008577"
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={telefono}
          label="Telèfono"
          style={styles.TextInput}
          onChangeText={(value) => setTelefono(value)}
          error={telefono_error}
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={distrito}
          label="Distrito"
          style={styles.TextInput}
          onChangeText={(value) => setDistrito(value)}
          error={distrito_error}
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={direccion}
          label="Direccion"
          style={styles.TextInput}
          onChangeText={(value) => setDireccion(value)}
          error={direccion_error}
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={tipoResidencia}
          label="Tipo de la Residencia"
          style={styles.TextInput}
          onChangeText={(value) => setTipoResidencia(value)}
          error={tipoResidencia_error}
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={estadoResidencia}
          label="Estado de la Residencia"
          style={styles.TextInput}
          onChangeText={(value) => setEstadoResidencia(value)}
          error={estadoResidencia_error}
        />
      </ComponentContainer>

      <ComponentContainer>
        <Button
          mode="outlined"
          onPress={() => siguientePaso()}
          style={styles.SectionRight__button}>
          Siguiente
        </Button>
      </ComponentContainer>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    data_producer: state.data_producer,
  };
};

const mapDispatchToProps = {
  producerPostLocal,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormProductor);
