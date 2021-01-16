import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, ScrollView} from 'react-native';
import {DataTable, Button, Banner, Appbar} from 'react-native-paper';

const MyNotification = ({visible, setVisible}) => {
  return (
    <Banner
      visible={visible}
      icon="cloud"
      actions={[
        {
          label: 'Aceptar',
          onPress: () => setVisible(false),
        },
      ]}>
      La sincronizacion fue realizada con exito, felicidades.
    </Banner>
  );
};

const SyncUp = ({navigation, MyListProducer, result}) => {
  const [visible, setVisible] = React.useState(false);

  const show = () => {
    //console.log(result);

    result.map((item) => {
      console.log(JSON.stringify(Object.assign({}, item)));
    });

    // result.map((item) => {

    //   console.log(JSON.stringify(Object.assign({}, item))); //convertir array a string
    // });
  };

  const addProducer = () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: 'e791816aba638d22c132b84ceee5792d21820de2',
      },
      body: JSON.stringify(Object.assign({}, result)),
    };

    fetch('http://www.agrapi.com.ar/api/v1.0/producers/?fbclid=IwAR0VqJWG3zfytXw3ti3T-lx_RHKSQZVOORtH5rvPU-4pZyey9JDSR6eVVFw', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log('RESULTADO: ' + data));
  };

  return (
    <ScrollView>
      <View>
        <View style={{width: '100%'}}>
          <Appbar.Header style={{backgroundColor: '#333366'}}>
            <Appbar.BackAction
              color="white"
              onPress={() => navigation.goBack()}
            />
            <Appbar.Content
              color="white"
              title="Sincronizacion"
              subtitle={'Registros de Productores'}
            />
          </Appbar.Header>
        </View>
        <MyNotification visible={visible} setVisible={setVisible} />

        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Nombre</DataTable.Title>
            <DataTable.Title>Apellido</DataTable.Title>
            <DataTable.Title>Localidad</DataTable.Title>
          </DataTable.Header>

          {result.map((item, key) => {
            const {first_name, last_name} = item.producer;
            const {district} = item.producer.producer_home;
            return (
              <DataTable.Row
                key={key}
                onPress={() => console.log('Nombre: ' + first_name)}>
                <DataTable.Cell>{first_name}</DataTable.Cell>
                <DataTable.Cell>{last_name}</DataTable.Cell>
                <DataTable.Cell>{district}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>

        <Button mode="contained" color="#008080" onPress={() => addProducer()}>
          Sincronizar
        </Button>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    result: state.result,
  };
};

export default connect(mapStateToProps)(SyncUp);
