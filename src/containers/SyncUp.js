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

const SyncUp = ({navigation, myList}) => {
  const [visible, setVisible] = React.useState(false);

  const {results} = myList;

  return (
    <ScrollView>
      <View>
        <View style={{width: '100%'}}>
          <Appbar.Header style={{backgroundColor: '#3399D9'}}>
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

          {results.map((item, key) => {
            const {first_name, last_name, producer_home} = item.producer; //desestructuro campos de tabla producer

            return (
              <DataTable.Row key={key} onPress={() => console.log('Nombre: ' + first_name)}>
                <DataTable.Cell>{first_name}</DataTable.Cell>
                <DataTable.Cell>{last_name}</DataTable.Cell>
                <DataTable.Cell>{producer_home.district}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>

        <Button mode="contained" onPress={() => setVisible(true)}>
          Sincronizar
        </Button>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state,
  };
};

export default connect(mapStateToProps, null)(SyncUp);
