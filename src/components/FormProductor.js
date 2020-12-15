import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {producerPostLocal} from '../actions/index';
import {View} from 'react-native';
import {TextInput, Button, Title, Caption} from 'react-native-paper';
import ComponentContainer from './ComponentContainer';
import ComponentRadioButton from './RadioButton';

const FormProductor = ({
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
  MyListProducer,
  producerPostLocal,
}) => {
  //valor inicial
  const [nombre, setNombre] = React.useState();
  const [apellido, setApellido] = React.useState();
  const [fec_nac, setFecNac] = React.useState();
  const [documento, setDocumento] = React.useState();
  const [genero, setGenero] = React.useState();
  const [telefono, setTelefono] = React.useState();

  const [distrito, setDistrito] = React.useState();
  const [direccion, setDireccion] = React.useState();
  const [tipoResidencia, setTipoResidencia] = React.useState();
  const [estadoResidencia, setEstadoResidencia] = React.useState();

  useEffect(() => {
    //cada vez que entro a esta pantalla seteo lo que tenga redux guardado en su store
    seteoComponentes();
  }, []);

  //redux guarda estos datos y cada datos son asignados a su correspondiente campos
  const seteoComponentes = () => {
    MyListProducer.map((item) => {
      setNombre(item.producer.first_name);
      setApellido(item.producer.last_name);
      setFecNac(item.producer.date_birth);
      setDocumento(item.producer.document);
      setGenero(item.producer.gender);
      setTelefono(item.producer.phone_number);
      setDistrito(item.producer.producer_home.district);
      setDireccion(item.producer.producer_home.address);
      setTipoResidencia(item.producer.producer_home.type_recidence);
      setEstadoResidencia(item.producer.producer_home.state_recidence);
      console.log('PRODUCTOR: ', item.producer);
      
    });
  };

  const siguientePaso = () => {
    //ingreso registros y envio al store
    producerPostLocal({
      producer: {
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
      },
    });

    if (currentPosition === 0) {
      setCurrentPosition(currentPosition + 1);
    } else {
      setCurrentPosition(0);
    }
  };

  return (
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
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={apellido}
          label="Apellido"
          style={styles.TextInput}
          onChangeText={(value) => setApellido(value)}
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={fec_nac}
          label="Fecha Nac."
          style={styles.TextInput}
          onChangeText={(value) => setFecNac(value)}
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={documento}
          label="DNI"
          style={styles.TextInput}
          onChangeText={(value) => setDocumento(value)}
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
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={distrito}
          label="Distrito"
          style={styles.TextInput}
          onChangeText={(value) => setDistrito(value)}
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={direccion}
          label="Direccion"
          style={styles.TextInput}
          onChangeText={(value) => setDireccion(value)}
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={tipoResidencia}
          label="Tipo de la Residencia"
          style={styles.TextInput}
          onChangeText={(value) => setTipoResidencia(value)}
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          value={estadoResidencia}
          label="Estado de la Residencia"
          style={styles.TextInput}
          onChangeText={(value) => setEstadoResidencia(value)}
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
    MyListProducer: state.MyListProducer,
  };
};

const mapDispatchToProps = {
  producerPostLocal,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormProductor);
