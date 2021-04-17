import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {producerPostLocal, producerHomePost} from '../actions/index';
import {View} from 'react-native';
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
  producer,
  data_producer,
  producerPostLocal,
  producerHomePost,
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
      seteoComponentesProducer();
    }
    if (Object.keys(producer.producer_home).length !== 0) {
      seteoComponentesHome();
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
  const seteoComponentesProducer = () => {
    setNombre(data_producer.first_name);
    setApellido(data_producer.last_name);
    setFecNac(data_producer.date_birth);
    setDocumento(data_producer.document);
    setGenero(data_producer.gender);
    setTelefono(data_producer.phone_number);
  };

  const seteoComponentesHome = () => {
    const {producer_home} = producer;
    setDistrito(producer_home.district);
    setDireccion(producer_home.address);
    setTipoResidencia(producer_home.type_recidence);
    setEstadoResidencia(producer_home.state_recidence);
  };

  const showAlertError = () => {
    MessageError('Datos Faltantes', 'Existe campo/s vacio/s');
  };

  const siguientePaso = () => {
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
      });

      producerHomePost({
        district: distrito,
        address: direccion,
        type_recidence: tipoResidencia,
        state_recidence: estadoResidencia,
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
        <Button color="#0079BF"
          mode="outlined"
          color="#008080"
          onPress={() => showDatepicker()}
          style={styles.SectionRight__button}>
          Calendario
        </Button>
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={documento}
          label="DNI (Sin Puntos)"
          style={styles.TextInput}
          onChangeText={(value) => setDocumento(value)}
          error={dni_error}
          keyboardType="numeric"
        />
      </ComponentContainer>

      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Caption style={{color:"#0079BF"}}>Sexo</Caption>
      </View>

      <ComponentContainer>
        <ComponentRadioButton
          title="Femenino"
          value={genero}
          status={genero === 'Femenino' ? 'checked' : 'unchecked'}
          onPress={() => setGenero('Femenino')}
          color="#008577"
        />
        <ComponentRadioButton
          title="Masculino"
          value={genero}
          status={genero === 'Masculino' ? 'checked' : 'unchecked'}
          onPress={() => setGenero('Masculino')}
          color="#008577"
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={telefono}
          label="Celular (Sin 0 y 15)"
          style={styles.TextInput}
          onChangeText={(value) => setTelefono(value)}
          error={telefono_error}
          keyboardType="numeric"
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
          label="Dirección"
          style={styles.TextInput}
          onChangeText={(value) => setDireccion(value)}
          error={direccion_error}
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={tipoResidencia}
          label="Material de construcción de la vivienda y techo"
          style={styles.TextInput}
          onChangeText={(value) => setTipoResidencia(value)}
          error={tipoResidencia_error}
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={estadoResidencia}
          label="Estado de la Vivienda (Malo, Regular, Bueno)"
          style={styles.TextInput}
          onChangeText={(value) => setEstadoResidencia(value)}
          error={estadoResidencia_error}
        />
      </ComponentContainer>

      <ComponentContainer>
        <Button 
          color="#0079BF"
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
    producer: state.producer,
    data_producer: state.data_producer,
  };
};

const mapDispatchToProps = {
  producerPostLocal,
  producerHomePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormProductor);
