import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {productionPost} from '../actions/index';

import {View, ScrollView, SafeAreaView, Dimensions} from 'react-native';
import {
  Card,
  Paragraph,
  TextInput,
  Button,
  Title,
  List,
  Provider,
} from 'react-native-paper';
import FormModalTitulo from './ComponentsProduccion/FormModalTitulo.js';
import FormModalServicio from './ComponentsProduccion/FormModalServicio.js';
import FormModalMaquinaria from './ComponentsProduccion/FormModalMaquinaria.js';
import FormModalInstalacion from './ComponentsProduccion/FormModalInstalacion.js';
import FormModalRiego from './ComponentsProduccion/FormModalRiego.js';
import ComponentContainer from './ComponentContainer';
import ComponentCheckBox from './CheckBox';
import MessageError from './MessageError';
import Geolocation from '@react-native-community/geolocation';

const FormProduccion = ({
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
  productionPost,
  production,
}) => {
  const [visible, setVisible] = React.useState(false);
  const [visibleServicio, setVisibleServicio] = React.useState(false);
  const [visibleMaquinaria, setVisibleMaquinaria] = React.useState(false);
  const [visibleInstalacion, setVisibleInstalacion] = React.useState(false);
  const [visibleRiego, setVisibleRiego] = React.useState(false);
  const [checkedResidente, setCheckedResidente] = React.useState(false);

  const [lat, setLat] = React.useState('');
  const [lon, setLon] = React.useState('');
  const [condCamino, setCondCamino] = React.useState('');
  const [distrito, setDistrito] = React.useState('Seleccione un Distrito');
  const [superficie, setSuperficie] = React.useState('');
  const [checkedRenspa, setCheckedRenspa] = React.useState(false);

  const [titulos, setTitulos] = React.useState([]);
  const [maquinaria, setMaquinaria] = React.useState([]);
  const [instalacion, setInstalacion] = React.useState([]);
  const [servicio, setServicio] = React.useState([]);
  const [riego, setRiego] = React.useState([]);

  //DIMENSIONS
  const CARD_WIDTH = Dimensions.get('window').width * 0.8;

  //recolector de todas las producciones
  const [dataProduc, setDataProduc] = React.useState([]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const showModalServicio = () => setVisibleServicio(true);
  const hideModalServicio = () => setVisibleServicio(false);

  const showModalMaquinaria = () => setVisibleMaquinaria(true);
  const hideModalMaquinaria = () => setVisibleMaquinaria(false);

  const showModalInstalacion = () => setVisibleInstalacion(true);
  const hideModalInstalacion = () => setVisibleInstalacion(false);

  const showModalRiego = () => setVisibleRiego(true);
  const hideModalRiego = () => setVisibleRiego(false);

  const data = [];
  const [geo, setGeo] = React.useState([]);

  useEffect(() => {
    GeoProduction();
  }, []);

  const addProduc = () => {
    if (distrito.trim() === 'Seleccione un Distrito') {
      ShowAlert();
    } else {
      const dataNew = {
        is_resident: checkedResidente,
        district: distrito,
        surface: superficie,
        road_state: condCamino,
        lat: lat,
        lng: lon,
        has_renspa: checkedRenspa,
        production_property: titulos,
        production_service: servicio,
        production_installation: instalacion,
        production_machine: maquinaria,
        production_irrigation: riego,
      };

      const dataOld = [];

      if (Object.keys(dataProduc).length !== 0) {
        dataProduc.map((item) => {
          dataOld.push(item);
        });
        setDataProduc([...dataOld, dataNew]);
      } else {
        setDataProduc([dataNew]);
      }

      setCheckedResidente(false);
      setDistrito('Seleccione un Distrito');
      setSuperficie('');
      setCondCamino('');
      setLat('');
      setLon('');
      setCheckedRenspa(false);
      setTitulos([]);
      setServicio([]);
      setInstalacion([]);
      setMaquinaria([]);
      setRiego([]);
    }
  };

  const cancelar = () => {
    setCheckedResidente(false);
    setDistrito('Seleccione un Distrito');
    setSuperficie('');
    setCondCamino('');
    setLat('');
    setLon('');
    setCheckedRenspa(false);
    setTitulos([]);
    setServicio([]);
    setInstalacion([]);
    setMaquinaria([]);
    setRiego([]);
  };

  const GeoProduction = () => {
    Geolocation.getCurrentPosition((info) => data.push(info));

    setGeo(data);

    geo.map((item) => {
      console.log('Lat:', item.coords.latitude);
      console.log('Lon:', item.coords.longitude);

      setLat(String(item.coords.latitude));
      setLon(String(item.coords.longitude));
    });
  };

  const ShowAlert = () => {
    MessageError('Datos Faltantes', 'Existe campo/s vacio/s');
  };

  //accion del boton
  const nextStep = () => {
    productionPost({dataProduc});

    production.map((item) => {
      console.log(item.dataProduc);
    });

    if (currentPosition === 4) {
      setCurrentPosition(currentPosition + 1);
      console.log('Produccion: ' + currentPosition);
    } else {
      setCurrentPosition(4);
    }
  };

  const backStep = () => {
    if (currentPosition === 4) {
      setCurrentPosition(currentPosition - 1);
    } else {
      setCurrentPosition(4);
    }
  };

  const itemDeleteProduction = (value) => {
    setDataProduc(dataProduc.filter((item) => item !== value));
  };

  return (
    <Provider>
      <View>
        <FormModalTitulo
          visible={visible}
          hideModal={hideModal}
          titulos={titulos}
          setTitulos={setTitulos}
        />

        <FormModalServicio
          visible={visibleServicio}
          hideModal={hideModalServicio}
          servicio={servicio}
          setServicio={setServicio}
        />

        <FormModalMaquinaria
          visible={visibleMaquinaria}
          hideModal={hideModalMaquinaria}
          maquinaria={maquinaria}
          setMaquinaria={setMaquinaria}
        />
        <FormModalInstalacion
          visible={visibleInstalacion}
          hideModal={hideModalInstalacion}
          instalacion={instalacion}
          setInstalacion={setInstalacion}
        />

        <FormModalRiego
          visible={visibleRiego}
          hideModal={hideModalRiego}
          riego={riego}
          setRiego={setRiego}
        />

        <View
          style={{
            flexDirection: 'row',
          }}>
          <Title style={styles.header_title}>{titulo}</Title>
        </View>

        <ComponentContainer>
          <ComponentCheckBox
            title="Reside"
            disabled={false}
            value={checkedResidente}
            onValueChange={(value) => setCheckedResidente(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Lat"
            style={styles.TextInput}
            value={lat}
            onChangeText={(value) => setLat(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Long"
            style={styles.TextInput}
            value={lon}
            onChangeText={(value) => setLon(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text"
            onPress={nextStep}
            style={styles.SectionRight__button}
            onPress={() => GeoProduction()}>
            Localizar
          </Button>
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Condiciòn del Camino"
            style={styles.TextInput}
            value={condCamino}
            onChangeText={(value) => setCondCamino(value)}
          />
        </ComponentContainer>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <List.Accordion
              title={distrito}
              left={(props) => <List.Icon {...props} icon="equal" />}>
              <List.Item
                title="Tinogasta"
                left={(props) => <List.Icon {...props} />}
                onPress={() => setDistrito('Tinogasta')}
              />
              <List.Item
                title="Santa Rosa"
                left={(props) => <List.Icon {...props} />}
                onPress={() => setDistrito('Santa Rosa')}
              />
              <List.Item
                title="Villa San Roque"
                left={(props) => <List.Icon {...props} />}
                onPress={() => setDistrito('Villa San Roque')}
              />
              <List.Item
                title="El puesto"
                left={(props) => <List.Icon {...props} />}
                onPress={() => setDistrito('El Puesto')}
              />
              <List.Item
                title="San Josè"
                left={(props) => <List.Icon {...props} />}
                onPress={() => setDistrito('San Jose')}
              />
              <List.Item
                title="Salado"
                left={(props) => <List.Icon {...props} />}
                onPress={() => setDistrito('Salado')}
              />
              <List.Item
                title="La puntilla"
                left={(props) => <List.Icon {...props} />}
                onPress={() => setDistrito('La Puntilla')}
              />
              <List.Item
                title="Rio Colorado"
                left={(props) => <List.Icon {...props} />}
                onPress={() => setDistrito('Rio Colorado')}
              />
              <List.Item
                title="Cerro Negro"
                left={(props) => <List.Icon {...props} />}
                onPress={() => setDistrito('Cerro Negro')}
              />
              <List.Item
                title="Costa de Reyes"
                left={(props) => <List.Icon {...props} />}
                onPress={() => setDistrito('Costa de Reyes')}
              />
              <List.Item
                title="Copacabana"
                left={(props) => <List.Icon {...props} />}
                onPress={() => setDistrito('Copacabana')}
              />
              <List.Item
                title="Banda de Lucero"
                left={(props) => <List.Icon {...props} />}
                onPress={() => setDistrito('Banda de Lucero')}
              />
              <List.Item
                title="Anillaco"
                left={(props) => <List.Icon {...props} />}
                onPress={() => setDistrito('Anillaco')}
              />
              <List.Item
                title="El Durazno"
                left={(props) => <List.Icon {...props} />}
                onPress={() => setDistrito('El Durazno')}
              />
            </List.Accordion>
          </View>
        </View>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Superficie"
            style={styles.TextInput}
            value={superficie}
            onChangeText={(value) => setSuperficie(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="RENSPA"
            disabled={false}
            value={checkedRenspa}
            onValueChange={(value) => setCheckedRenspa(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModal}>
            Titulos
          </Button>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalMaquinaria}>
            Maquinaria
          </Button>
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalInstalacion}>
            Instalacion
          </Button>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalServicio}>
            Servicio
          </Button>
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalRiego}>
            Riego
          </Button>
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addProduc()}>
            Agregar
          </Button>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => cancelar()}>
            Cancelar
          </Button>
        </ComponentContainer>

        <SafeAreaView
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ScrollView horizontal>
            {Object.keys(dataProduc).length === 0
              ? null
              : dataProduc.map((item, key) => {
                  return (
                    <Card
                      elevation={10}
                      style={{
                        backgroundColor: '#fff5ee',
                        width: CARD_WIDTH,
                      }}>
                      <Card.Content style={{width: CARD_WIDTH}} key={key}>
                        <Title>Prod. {item.district}</Title>
                        <Paragraph>
                          Reside: {item.is_resident ? 'Si' : 'No'}
                        </Paragraph>
                        <List.Accordion
                          title="Titulo"
                          left={(props) => (
                            <List.Icon {...props} icon="equal" />
                          )}>
                          {Object.keys(item.production_property).length === 0
                            ? null
                            : item.production_property.map((item, key) => {
                                return (
                                  <List.Item
                                    key={key}
                                    title={
                                      'Mtr. Catastr. ' +
                                      item.cadastre_registration
                                    }
                                    description={item.land_tenure}
                                    left={(props) => <List.Icon {...props} />}
                                  />
                                );
                              })}
                        </List.Accordion>
                        <List.Accordion
                          title="Maquinaria"
                          left={(props) => (
                            <List.Icon {...props} icon="equal" />
                          )}>
                          {Object.keys(item.production_machine).length === 0
                            ? null
                            : item.production_machine.map((item, key) => {
                                return (
                                  <List.Item
                                    key={key}
                                    title={item.name_machine}
                                    description={'Destino: ' + item.destination}
                                    left={(props) => <List.Icon {...props} />}
                                  />
                                );
                              })}
                        </List.Accordion>
                        <List.Accordion
                          title="Instalacion"
                          left={(props) => (
                            <List.Icon {...props} icon="equal" />
                          )}>
                          {Object.keys(item.production_installation).length ===
                          0
                            ? null
                            : item.production_installation.map((item, key) => {
                                return (
                                  <List.Item
                                    key={key}
                                    title={
                                      Object.values(item.installation_well)
                                        .length !== 0
                                        ? 'Pozo/s de Agua?: Si'
                                        : 'Pozo/s ?: No'
                                    }
                                    description={
                                      Object.values(item.installation_barn)
                                        .length !== 0
                                        ? 'Galpon?: Si'
                                        : 'Galpon?: No'
                                    }
                                    left={(props) => <List.Icon {...props} />}
                                  />
                                );
                              })}
                        </List.Accordion>
                        <List.Accordion
                          title="Servicio"
                          left={(props) => (
                            <List.Icon {...props} icon="equal" />
                          )}>
                          {Object.keys(item.production_service).length === 0
                            ? null
                            : item.production_service.map((item, key) => {
                                return (
                                  <List.Item
                                    key={key}
                                    title={
                                      item.has_service_aqua
                                        ? 'Servicio de Agua?: Si'
                                        : 'Servicio de Agua?: No'
                                    }
                                    description={
                                      item.has_service_energy
                                        ? 'Servicio de Luz?: Si'
                                        : 'Servicio de Luz?: No'
                                    }
                                    left={(props) => <List.Icon {...props} />}
                                  />
                                );
                              })}
                        </List.Accordion>
                        <List.Accordion
                          title="Riego"
                          left={(props) => (
                            <List.Icon {...props} icon="equal" />
                          )}>
                          {Object.keys(item.production_irrigation).length === 0
                            ? null
                            : item.production_irrigation.map((item, key) => {
                                return (
                                  <List.Item
                                    key={key}
                                    title={item.type_irrigation}
                                    description={item.surface_irrigation}
                                    left={(props) => <List.Icon {...props} />}
                                  />
                                );
                              })}
                        </List.Accordion>
                      </Card.Content>

                      <Card.Actions>
                        <Button
                          color="red"
                          onPress={() => itemDeleteProduction(item)}>
                          Quitar
                        </Button>
                      </Card.Actions>
                    </Card>
                  );
                })}
          </ScrollView>
        </SafeAreaView>

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
    production: state.production,
  };
};

const mapDispatchToProps = {
  productionPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormProduccion);
