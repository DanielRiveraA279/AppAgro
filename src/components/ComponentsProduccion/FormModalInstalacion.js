import React, {useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {View, ScrollView} from 'react-native';

import {
  TextInput,
  Button,
  Modal,
  Portal,
  Title,
  Caption,
  List,
  Paragraph,
} from 'react-native-paper';
import ComponentContainer from '../ComponentContainer';
import ComponentContainerGlobal from '../ComponentContainerGlobal';
import ComponentCheckBox from '../CheckBox';
import styles from '../../assets/styles/components/Modals';
import MessageError from '../MessageError';

const FormModal = ({visible, hideModal, instalacion, setInstalacion}) => {
  const [checkedMolinoViento, setCheckedMolinoViento] = React.useState(false);
  const [
    checkedTanqueAustraliano,
    setCheckedTanqueAustraliano,
  ] = React.useState(false);
  const [checkedRepresa, setCheckedRepresa] = React.useState(false);
  const [checkedBalanzaCamion, setCheckedBalanzaCamion] = React.useState(false);
  const [checkedPicadaCortFueg, setCheckedPicadaCortFueg] = React.useState(
    false,
  );
  const [checkedPicadaAcceso, setCheckedPicadaAcceso] = React.useState(false);
  const [
    checkedPiletaAcuicultura,
    setCheckedPiletaAcuicultura,
  ] = React.useState(false);
  const [checkedActivo, setCheckedActivo] = React.useState(false);

  const [superficie, setSuperficie] = React.useState('');

  const [latGalpon, setLatGalpon] = React.useState('');
  const [lonGalpon, setLonGalpon] = React.useState('');
  const [latPozo, setLatPozo] = React.useState('');
  const [lonPozo, setLonPozo] = React.useState('');
  const [geo, setGeo] = React.useState([]);

  const [pozos, setPozos] = React.useState([]);
  const [galpon, setGalpon] = React.useState([]);
  const data = [];

  const ShowAlert = () => {
    MessageError('Datos Faltantes', 'Existe campo/s vacio/s');
  };

  const ValidationGalpon = () => {
    if (latGalpon.trim() === '' || lonGalpon.trim() === '') {
      ShowAlert();
    } else {
      addGalpon();
    }
  };

  const ValidationPozos = () => {
    if (latPozo.trim() === '' || lonPozo.trim() === '') {
      ShowAlert();
    } else {
      addPozo();
    }
  };

  const addGalpon = () => {
    const dataNew = {
      surface: superficie,
      lat: latGalpon,
      lng: lonGalpon,
    };

    let dataOld = [];

    if (Object.keys(galpon).length !== 0) {
      galpon.map((item) => {
        dataOld.push(item);
      });
      setGalpon([...dataOld, dataNew]);
    } else {
      setGalpon([dataNew]);
    }

    setSuperficie('');
    setLatGalpon('');
    setLonGalpon('');
  };

  const addPozo = () => {
    const dataNew = {
      is_active: checkedActivo,
      lat: latPozo,
      lng: lonPozo,
    };

    let dataOld = [];

    if (Object.keys(pozos).length !== 0) {
      pozos.map((item) => {
        dataOld.push(item);
      });
      setPozos([...dataOld, dataNew]);
    } else {
      setPozos([dataNew]);
    }

    setCheckedActivo(false);
    setLatPozo('');
    setLonPozo('');
  };

  const itemDeleteGalpon = (value) => {
    setGalpon(galpon.filter((item) => item !== value));
  };

  const itemDeletePozo = (value) => {
    setPozos(pozos.filter((item) => item !== value));
  };

  const GeoGalpon = () => {
    Geolocation.getCurrentPosition((info) => data.push(info));

    setGeo(data);

    geo.map((item) => {
      console.log('Lat:', item.coords.latitude);
      console.log('Lon:', item.coords.longitude);

      setLatGalpon(String(item.coords.latitude));
      setLonGalpon(String(item.coords.longitude));
    });
  };

  const GeoPozo = () => {
    Geolocation.getCurrentPosition((info) => data.push(info));

    setGeo(data);

    geo.map((item) => {
      console.log('Lat:', item.coords.latitude);
      console.log('Lon:', item.coords.longitude);

      setLatPozo(String(item.coords.latitude));
      setLonPozo(String(item.coords.longitude));
    });
  };

  const addInstalacion = () => {
    const dataNew = {
      has_windmills: checkedMolinoViento,
      has_australian_tanks: checkedTanqueAustraliano,
      has_dams: checkedRepresa,
      has_truck_scale: checkedBalanzaCamion,
      has_fire_break: checkedPicadaCortFueg,
      has_minced_steel: checkedPicadaAcceso,
      has_pools: checkedPiletaAcuicultura,
      installation_barn: galpon,
      installation_well: pozos,
    };

   
    setInstalacion([dataNew]);
    

    setCheckedMolinoViento(false);
    setCheckedTanqueAustraliano(false);
    setCheckedRepresa(false);
    setCheckedBalanzaCamion(false);
    setCheckedPicadaCortFueg(false);
    setCheckedPicadaAcceso(false);
    setCheckedPiletaAcuicultura(false);
  };

  return (
    <Portal>
      <Modal
        animationType="slide"
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.container}>
        
        <View style={styles.container}>
          <Title>Instalaciones</Title>
          <ComponentContainerGlobal>
            <ComponentContainer>
              <ComponentCheckBox
                title="Molino de Viento"
                disabled={false}
                value={checkedMolinoViento}
                onValueChange={(value) => setCheckedMolinoViento(value)}
              />
              <ComponentCheckBox
                title="Tanques Australianos"
                disabled={false}
                value={checkedTanqueAustraliano}
                onValueChange={(value) => setCheckedTanqueAustraliano(value)}
              />
              <ComponentCheckBox
                title="Represas/Tajamares"
                disabled={false}
                value={checkedRepresa}
                onValueChange={(value) => setCheckedRepresa(value)}
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <ComponentCheckBox
                title="Balanza para Camiones"
                disabled={false}
                value={checkedBalanzaCamion}
                onValueChange={(value) => setCheckedBalanzaCamion(value)}
              />
              <ComponentCheckBox
                title="Picadas Cortafuego"
                disabled={false}
                value={checkedPicadaCortFueg}
                onValueChange={(value) => setCheckedPicadaCortFueg(value)}
              />
              <ComponentCheckBox
                title="Picadas de Acceso"
                disabled={false}
                value={checkedPicadaAcceso}
                onValueChange={(value) => setCheckedPicadaAcceso(value)}
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <ComponentCheckBox
                title="Piletas para Acuicultura"
                disabled={false}
                value={checkedPiletaAcuicultura}
                onValueChange={(value) => setCheckedPiletaAcuicultura(value)}
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Caption>Galpones</Caption>
          </View>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <TextInput
                mode="outlined"
                label="Superficie"
                style={styles.TextInput}
                value={superficie}
                onChangeText={(value) => setSuperficie(value)}
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <Paragraph>{`LATITUD:`} </Paragraph>
              <Paragraph
                style={{
                  color: '#2B4A73',
                  fontWeight: 'bold',
                }}>{`${latGalpon}`}</Paragraph>
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <Paragraph>{`LONGIUD:`} </Paragraph>
              <Paragraph
                style={{
                  color: '#2B4A73',
                  fontWeight: 'bold',
                }}>{`${lonGalpon}`}</Paragraph>
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <Button
                mode="text"
                color="#008080"
                style={styles.SectionRight__button}
                onPress={() => GeoGalpon()}>
                Localizar
              </Button>

              <Button
                mode="text"
                color="#008080"
                style={styles.SectionRight__button}
                onPress={() => ValidationGalpon()}>
                Agregar
              </Button>
            </ComponentContainer>
          </ComponentContainerGlobal>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Caption>Posos de Agua</Caption>
          </View>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <ComponentCheckBox
                title="Activo?"
                disabled={false}
                value={checkedActivo}
                onValueChange={(value) => setCheckedActivo(value)}
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <Paragraph>{`LATITUD:`} </Paragraph>
              <Paragraph
                style={{
                  color: '#2B4A73',
                  fontWeight: 'bold',
                }}>{`${latPozo}`}</Paragraph>
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <Paragraph>{`LONGITUD:`} </Paragraph>
              <Paragraph
                style={{
                  color: '#2B4A73',
                  fontWeight: 'bold',
                }}>{`${lonPozo}`}</Paragraph>
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <Button
                mode="text"
                color="#008080"
                style={styles.SectionRight__button}
                onPress={() => GeoPozo()}>
                Localizar
              </Button>

              <Button
                mode="text"
                color="#008080"
                style={styles.SectionRight__button}
                onPress={() => ValidationPozos()}>
                Agregar
              </Button>
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <List.Accordion
                title="Lista de Galpones"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                {Object.keys(galpon).length === 0
                  ? null
                  : galpon.map((item, key) => {
                      return (
                        <List.Item
                          key={key}
                          title={`Lat: ${item.lat} - Long ${item.lng}`}
                          left={(props) => (
                            <List.Icon {...props} icon="delete" />
                          )}
                          onPress={() => itemDeleteGalpon(item)}
                        />
                      );
                    })}
              </List.Accordion>

              <List.Accordion
                title="Lista de Pozos"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                {Object.keys(pozos).length === 0
                  ? null
                  : pozos.map((item, key) => {
                      return (
                        <List.Item
                          key={key}
                          title={`Lat: ${item.lat} - Long ${item.lng}`}
                          description={
                            item.is_active ? 'Si Esta Activo' : 'No Esta Activo'
                          }
                          left={(props) => (
                            <List.Icon {...props} icon="delete" />
                          )}
                          onPress={() => itemDeletePozo(item)}
                        />
                      );
                    })}
              </List.Accordion>
            </View>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <Button
                mode="text"
                color="#008080"
                style={styles.SectionRight__button}
                onPress={() => addInstalacion()}>
                Guardar
              </Button>
              <Button
                mode="text"
                color="#008080"
                style={styles.SectionRight__button}
                onPress={() => hideModal()}>
                Cancelar
              </Button>
            </ComponentContainer>
          </ComponentContainerGlobal>
        </View>
      </Modal>
    </Portal>
  );
};

export default FormModal;
