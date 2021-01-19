import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
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

import FormModalActividadGanadera from './ComponentsProduccion/FormModalActividadGanadera';
import FormModalAgroindustria from './ComponentsProduccion/FormModalAgroindustria';
import FormModalProduccionAgricola from './ComponentsProduccion/FormModalProduccionAgricola';

import FormModalGuardarRedux from './FormGuardarRedux';

import ComponentContainer from './ComponentContainer';
import ComponentCheckBox from './CheckBox';
import MessageError from './MessageError';

const FormProduccion = ({
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
  productionPost,
  producer,
}) => {
  const [visible, setVisible] = React.useState(false);
  const [visibleTitulo, setVisibleTitulo] = React.useState(false);
  const [visibleServicio, setVisibleServicio] = React.useState(false);
  const [visibleMaquinaria, setVisibleMaquinaria] = React.useState(false);
  const [visibleInstalacion, setVisibleInstalacion] = React.useState(false);
  const [visibleRiego, setVisibleRiego] = React.useState(false);
  const [visibleGuardarRedux, setVisibleGuardarRedux] = React.useState(false);

  const [visibleActGanadera, setVisibleActGanadera] = React.useState(false);
  const [visibleAgroindustria, setVisibleAgroindustria] = React.useState(false);
  const [visibleProdAgricola, setVisibleProdAgricola] = React.useState(false);

  const [checkedResidente, setCheckedResidente] = React.useState(false);

  const [lat, setLat] = React.useState('');
  const [lon, setLon] = React.useState('');
  const [condCamino, setCondCamino] = React.useState('');
  const [distrito, setDistrito] = React.useState('Seleccione un Distrito');
  const [superficie, setSuperficie] = React.useState('');
  const [checkedRenspa, setCheckedRenspa] = React.useState(false);
  const [checkedRenaf, setCheckedRenaf] = React.useState(false);

  const [titulos, setTitulos] = React.useState([]);
  const [maquinaria, setMaquinaria] = React.useState([]);
  const [instalacion, setInstalacion] = React.useState([]);
  const [servicio, setServicio] = React.useState([]);
  const [riego, setRiego] = React.useState([]);
  const [actGanadera, setActGanadera] = React.useState([]);
  const [agroIndustria, setAgroIndustria] = React.useState([]);
  const [prodAgricola, setProdAgricola] = React.useState([]);

  //DIMENSIONS
  const CARD_WIDTH = Dimensions.get('window').width * 0.8;

  //recolector de todas las producciones
  const [dataProduc, setDataProduc] = React.useState([]);

  const showModal = () => setVisible(true);
  const showModalTitulo = () => setVisibleTitulo(true);
  const hideModalTitulo = () => setVisibleTitulo(false);
  const showModalServicio = () => setVisibleServicio(true);
  const hideModalServicio = () => setVisibleServicio(false);
  const showModalMaquinaria = () => setVisibleMaquinaria(true);
  const hideModalMaquinaria = () => setVisibleMaquinaria(false);
  const showModalInstalacion = () => setVisibleInstalacion(true);
  const hideModalInstalacion = () => setVisibleInstalacion(false);
  const showModalRiego = () => setVisibleRiego(true);
  const hideModalRiego = () => setVisibleRiego(false);

  const showModalActGanadera = () => setVisibleActGanadera(true);
  const hideModalActGanadera = () => setVisibleActGanadera(false);
  const showModalAgroindustria = () => setVisibleAgroindustria(true);
  const hideModalAgroindustria = () => setVisibleAgroindustria(false);

  const showModalProdAgricola = () => setVisibleProdAgricola(true);
  const hideModalProdAgricola = () => setVisibleProdAgricola(false);

  const showModalGuardarRedux = () => setVisibleGuardarRedux(true);
  const hideModalGuardarRedux = () => setVisibleGuardarRedux(false);

  const data = [];
  const [geo, setGeo] = React.useState([]);

  useEffect(() => {
    dataProduc.map((item) => {
      item.production_installation.map((item) => {
        if (Object.values(item.installation_barn).length !== 0) {
          console.log('Si tiene galpon');
        } else {
          console.log('No contiene galpon');
        }

        if (Object.values(item.installation_well).length !== 0) {
          console.log('si contiene pozos de agus');
        } else {
          console.log('No contene pozos');
        }
      });
    });
  }, []);
  useEffect(() => {
    if (Object.keys(producer.production).length !== 0) {
      const {production} = producer;
      setDataProduc(production);
    }
  }, []);

  const addProduc = () => {
    if (distrito.trim() === 'Seleccione un Distrito') {
      ShowAlert();
    } else {

      if (Object.keys(servicio).length === 0) {
        var service = {
          has_service_aqua: false,
          type_service_aqua: '',
          has_service_energy: false,
          type_service_energy: '',
          has_rural_energy: false,
          has_generator: false,
          has_hydraulic_generator: false,
          has_solar_panels: false,
        };
      } else {
        var {0: service} = Object.assign({}, servicio);
      }

      if (Object.entries(titulos).length === 0) {
        var property = {
          land_tenure: '',
          has_land_title: false,
          cadastre_registration: '',
          starting_number: '',
        };
      } else {
        var {0: property} = Object.assign({}, titulos);
      }

      if (Object.keys(instalacion).length === 0) {
        var installation = {
          has_windmills: false,
          has_australian_tanks: false,
          has_dams: false,
          has_truck_scale: false,
          has_fire_break: false,
          has_minced_steel: false,
          has_pools: false,
          installation_barn: [],
          installation_well: [],
        };
      } else {
        var {0: installation} = Object.assign({}, instalacion);
      }

      if (Object.keys(riego).length === 0) {
        var irrigation = {
          type_irrigation: '',
          pressurized_irrigation: '',
          surface_irrigation: '',
          take_section: '',
          watering_hours: 0,
          channel_conditions: '',
          right: '',
          shifts: '',
        };
      } else {
        var {0: irrigation} = Object.assign({}, riego);
      }

      const dataNew = {
        is_resident: checkedResidente,
        district: distrito,
        surface: superficie,
        road_state: condCamino,
        lat: lat,
        lng: lon,
        has_renspa: checkedRenspa,
        has_renaf: checkedRenaf,
        production_property: property, //objeto
        production_service: service, //objeto
        production_installation: installation, //objeto
        production_machine: maquinaria,
        production_irrigation: irrigation, //objeto
        production_livestock: actGanadera,
        production_agroindustrial: agroIndustria,
        production_agricultural: prodAgricola,
      };

      if (Object.keys(dataProduc).length !== 0) {
        setDataProduc([...dataProduc, dataNew]);
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
      setCheckedRenaf(false);
      setTitulos([]);
      setServicio([]);
      setInstalacion([]);
      setMaquinaria([]);
      setRiego([]);

      setProdAgricola([]);
      setAgroIndustria([]);
      setActGanadera([]);
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
    Geolocation.getCurrentPosition((info) => data.push(info.coords));

    setGeo(data);

    geo.map((item) => {
      console.log('Lat:', item.latitude);
      console.log('Lon:', item.longitude);

      setLat(String(item.latitude));
      setLon(String(item.longitude));
    });
  };

  const ShowAlert = () => {
    MessageError('Datos Faltantes', 'Existe campo/s vacio/s');
  };

  //accion del boton
  const guardar = () => {
    productionPost(dataProduc);

    setTimeout(() => {
      showModalGuardarRedux();
    }, 2000);
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
        <FormModalGuardarRedux
          visible={visibleGuardarRedux}
          hideModal={hideModalGuardarRedux}
        />

        <FormModalTitulo
          visible={visibleTitulo}
          hideModal={hideModalTitulo}
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

        <FormModalActividadGanadera
          visibleActGanadera={visibleActGanadera}
          hideModalActGanadera={hideModalActGanadera}
          actGanadera={actGanadera}
          setActGanadera={setActGanadera}
        />

        <FormModalAgroindustria
          visibleAgroindustria={visibleAgroindustria}
          hideModalAgroindustria={hideModalAgroindustria}
          agroIndustria={agroIndustria}
          setAgroIndustria={setAgroIndustria}
        />

        <FormModalProduccionAgricola
          visibleProdAgricola={visibleProdAgricola}
          hideModalProdAgricola={hideModalProdAgricola}
          prodAgricola={prodAgricola}
          setProdAgricola={setProdAgricola}
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
            color="#008080"
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
           <ComponentCheckBox
            title="RENAF"
            disabled={false}
            value={checkedRenaf}
            onValueChange={(value) => setCheckedRenaf(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={showModalTitulo}>
            Titulos
          </Button>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={showModalMaquinaria}>
            Maquinaria
          </Button>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={showModalInstalacion}>
            Instalacion
          </Button>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={showModalServicio}>
            Servicio
          </Button>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={showModalRiego}>
            Riego
          </Button>

          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={showModalProdAgricola}>
            Agricola
          </Button>
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={showModalAgroindustria}>
            Agroindustria
          </Button>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={showModalActGanadera}>
            Ganadera
          </Button>
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={() => addProduc()}>
            Agregar
          </Button>
          <Button
            mode="text"
            color="#008080"
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
                      key={key}
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
                          {Object.keys(item.production_property).length ===
                          0 ? null : (
                            <List.Item
                              key={key}
                              title={
                                'Mtr. Catastr. ' +
                                item.production_property.cadastre_registration
                              }
                              description={item.production_property.land_tenure}
                              left={(props) => <List.Icon {...props} />}
                            />
                          )}
                        </List.Accordion>

                        <List.Accordion
                          title="Maquinaria"
                          left={(props) => (
                            <List.Icon {...props} icon="equal" />
                          )}>
                          {Object.keys(item.production_machine).length ===
                          0 ? null : (
                            <List.Item
                              key={key}
                              title={item.production_machine.name_machine}
                              description={
                                'Destino: ' +
                                item.production_machine.destination
                              }
                              left={(props) => <List.Icon {...props} />}
                            />
                          )}
                        </List.Accordion>

                        <List.Accordion
                          title="Instalacion"
                          left={(props) => (
                            <List.Icon {...props} icon="equal" />
                          )}>
                          {/* {Object.keys(item.production_installation).length ===
                          0 ? null : (
                            <List.Item
                              key={key}
                              title={
                                 item.production_installation
                                  .installation_well 
                              }
                              description={
                                 item.production_installation
                                  .installation_barn 
                              }
                              left={(props) => <List.Icon {...props} />}
                            />
                          )} */}
                        </List.Accordion>

                        <List.Accordion
                          title="Servicio"
                          left={(props) => (
                            <List.Icon {...props} icon="equal" />
                          )}>
                          {Object.keys(item.production_service).length ===
                          0 ? null : (
                            <List.Item
                              key={key}
                              title={
                                item.production_service.has_service_aqua
                                  ? 'Servicio de Agua?: Si'
                                  : 'Servicio de Agua?: No'
                              }
                              description={
                                item.production_service.has_service_energy
                                  ? 'Servicio de Luz?: Si'
                                  : 'Servicio de Luz?: No'
                              }
                              left={(props) => <List.Icon {...props} />}
                            />
                          )}
                        </List.Accordion>

                        <List.Accordion
                          title="Riego"
                          left={(props) => (
                            <List.Icon {...props} icon="equal" />
                          )}>
                          {Object.keys(item.production_irrigation).length ===
                          0 ? null : (
                            <List.Item
                              key={key}
                              title={item.production_irrigation.type_irrigation}
                              description={
                                item.production_irrigation.surface_irrigation
                              }
                              left={(props) => <List.Icon {...props} />}
                            />
                          )}
                        </List.Accordion>

                        <List.Accordion
                          title="Produccion Agricola"
                          left={(props) => (
                            <List.Icon {...props} icon="equal" />
                          )}>
                          {/* {Object.keys(item.production_agricultural).length ===
                          0 ? null : (
                            <List.Item
                              key={key}
                              title={item.production_irrigation.type_irrigation}
                              description={
                                item.production_irrigation.surface_irrigation
                              }
                              left={(props) => <List.Icon {...props} />}
                            />
                          )} */}
                        </List.Accordion>

                        <List.Accordion
                          title="Agroindustria"
                          left={(props) => (
                            <List.Icon {...props} icon="equal" />
                          )}>
                          {/* {Object.keys(item.production_irrigation).length ===
                          0 ? null : (
                            <List.Item
                              key={key}
                              title={item.production_irrigation.type_irrigation}
                              description={
                                item.production_irrigation.surface_irrigation
                              }
                              left={(props) => <List.Icon {...props} />}
                            />
                          )} */}
                        </List.Accordion>

                        <List.Accordion
                          title="Act. Ganadera"
                          left={(props) => (
                            <List.Icon {...props} icon="equal" />
                          )}>
                          {/* {Object.keys(item.production_irrigation).length ===
                          0 ? null : (
                            <List.Item
                              key={key}
                              title={item.production_irrigation.type_irrigation}
                              description={
                                item.production_irrigation.surface_irrigation
                              }
                              left={(props) => <List.Icon {...props} />}
                            />
                          )} */}
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
            color="#008080"
            onPress={backStep}
            style={styles.SectionRight__button}>
            Anterior
          </Button>
          <Button
            mode="contained"
            color="#008080"
            onPress={() => guardar()}
            style={styles.SectionRight__button}>
            Confirmacion
          </Button>
        </ComponentContainer>
      </View>
    </Provider>
  );
};

const mapStateToProps = (state) => {
  return {
    producer: state.producer,
  };
};

const mapDispatchToProps = {
  productionPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormProduccion);
