import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native'; //importamos navigation
import {connect} from 'react-redux';
import {producerPost, clearProducerForms, resultPost} from '../actions/index';

import {View, StyleSheet} from 'react-native';

import {
  Button,
  Modal,
  Portal,
  Title,
  Subheading,
  DataTable,
} from 'react-native-paper';

import styles from '../assets/styles/components/Modals';

const FormModal = ({
  visible,
  hideModal,
  producerPost,
  resultPost,
  clearProducerForms,
  producer,
  result,
  body,
  data_producer,
}) => {
  const navigation = useNavigation(); //destructuramos navigation
  const [confirmar, setConfirmar] = useState('');

  const [estadoProductor, setEstadoProductor] = useState(false);
  const [estadoProduccion, setEstadoProduccion] = useState(false);
  const [estadoGuardar, setEstadoGuardar] = useState(true);

  // const update = () => {
  //   return new Promise((resolve, reject) => {
  //     resolve(
  //       producerPost(Object.assign({}, data_producer, producer)),
  //       setCargando('CARGANDO...'),
  //     );
  //   })
  //     .then((resolve) => {
  //       return new Promise((resolve) => {
  //         setTimeout(() => {
  //           resolve(resultPost(body), setCargando('CARGANDO..'));
  //         }, 4000);
  //       });
  //     })
  //     .then((resolve) => {
  //       return new Promise((resolve) => {
  //         setTimeout(() => {
  //           resolve(setCargando('CARGANDO.'), clearProducerForms());
  //         }, 5000);
  //       });
  //     })
  //     .then((resolve) => {
  //       return new Promise((resolve) => {
  //         setTimeout(() => {
  //           resolve(navigation.navigate('Home'));
  //         }, 5000);
  //       });
  //     });
  // };

  const paso1 = () => {
    producerPost(Object.assign({}, data_producer, producer));
    estado('produccion');
  };

  const paso2 = () => {
    resultPost(body);
    estado('guardar');
  };

  const paso3 = () => {
    clearProducerForms();
    setEstadoProductor(false);
    setEstadoProduccion(false);
    setEstadoGuardar(true);

    navigation.navigate('Home');
  };

  const estado = (valor) => {
    switch (valor) {
      case 'produccion':
        setEstadoProduccion(false);
        setEstadoProductor(true);
        setEstadoGuardar(true);
        break;
      case 'guardar':
        setEstadoProduccion(true);
        setEstadoProductor(true);
        setEstadoGuardar(false);
        break;

      default:
        break;
    }
  };

  return (
    <Portal>
      <Modal
        animationType="slide"
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.container}>
        <View>
          <View style={stylesContainer.containerComponentGlobal}>
            <View style={stylesContainer.containerComponent}>
              <Title style={{color: '#333366'}}>CONFIRME SU RELEVAMIENTO</Title>
            </View>
          </View>

          <View style={stylesContainer.containerComponentGlobal}>
            <View style={stylesContainer.containerComponent}>
              <Subheading style={{color: '#333366'}}>
                Secretaria de Produccion
              </Subheading>
            </View>
          </View>

          <View style={styles.containerComponentGlobal}>
            <View style={styles.containerComponent}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>
                    <Title style={{color: '#333366'}}>
                      Paso 1: Datos del Productor
                    </Title>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Title style={{color: '#333366'}}>
                      Paso 2: Datos de su Produccion
                    </Title>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell>
                    <Button
                      color="#0079BF"
                      mode="outlined"
                      onPress={paso1}
                      disabled={estadoProductor}>
                      {estadoProductor ? 'Confirmado' : 'Confirmar'}
                    </Button>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Button
                      color="#0079BF"
                      mode="outlined"
                      onPress={paso2}
                      disabled={estadoProduccion}>
                      {estadoProduccion ? 'Confirmado' : 'Confirmar'}
                    </Button>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
          </View>

          <View style={styles.containerComponentGlobal}>
            <View style={styles.containerComponent}>
              <Button
                color="#0079BF"
                mode="contained"
                onPress={paso3}
                disabled={estadoGuardar}>
                Nuevo
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const stylesContainer = StyleSheet.create({
  containerComponent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 7,
  },

  containerComponentGlobal: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    producer: state.producer,
    body: state.body,
    data_producer: state.data_producer,
    result: state.result,
  };
};

const mapDispatchToProps = {
  producerPost,
  clearProducerForms,
  resultPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormModal);
