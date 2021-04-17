import React from 'react';
import {connect} from 'react-redux';
import {RemoveResult} from '../actions/index';
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
      Sincronizacion exitosa!.
    </Banner>
  );
};

const MyNotificationRemove = ({visible, setVisible}) => {
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
      Se elimino correctamente!
    </Banner>
  );
};

const SyncUp = ({navigation, result, RemoveResult, token}) => {
  const [visible, setVisible] = React.useState(false);
  const [visibleRemove, setVisibleRemove] = React.useState(false);

  const removeProducer = (value) => {
    RemoveResult(value);
    setVisibleRemove(true);
  };

  const addProducer = (index, value) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json; charset=UTF-8');
    myHeaders.append(
      'Authorization',
      'Token ' + token, //token traido desde redux
    );
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(result[index]), //result[posicion_obj]
    };
    fetch('http://www.agrapi.com.ar/api/v1.0/producers/', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        RemoveResult(value); //elimino de la lista de sincronizacion
        setVisible(true);
        console.log(data);
      });
  };

  return (
    <ScrollView>
      <View>
        <View style={{width: '100%'}}>
          <Appbar.Header style={{backgroundColor: '#172B4D'}}>
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
        <MyNotificationRemove visible={visibleRemove} setVisible={setVisibleRemove} />

        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Nombre</DataTable.Title>
            <DataTable.Title>Apellido</DataTable.Title>
            <DataTable.Title>Localidad</DataTable.Title>
            <DataTable.Title>Sincronizacion</DataTable.Title>
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
                <DataTable.Cell>
                  <Button 
                    color="#0079BF"
                    mode="contained"
                    onPress={() => addProducer(key, item)}>
                    Sincronizar
                  </Button>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Button
                    mode="contained"
                    color="red"
                    onPress={() => removeProducer(item)}>
                    Eliminar
                  </Button>
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    result: state.result,
    token: state.token,
  };
};

const mapDispatchToProps = {
  RemoveResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(SyncUp);
