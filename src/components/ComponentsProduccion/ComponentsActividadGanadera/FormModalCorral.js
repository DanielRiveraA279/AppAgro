import React from 'react';
import Geolocation from '@react-native-community/geolocation';
import {View} from 'react-native';

import {
  TextInput,
  Button,
  Modal,
  Portal,
  Title,
  Caption,
} from 'react-native-paper';
import ComponentContainer from '../../ComponentContainer';
import ComponentContainerGlobal from '../../ComponentContainerGlobal';
import ComponentRadioButton from '../../RadioButton';
import styles from '../../../assets/styles/components/Modals';

const FormModal = ({corral, setCorral}) => {
  const [checkedOrientacion, setCheckedOrientacion] = React.useState('');
  const [checkedTipoSuelo, setCheckedTipoSuelo] = React.useState('');
  const [material, setMaterial] = React.useState('');
  const [tipoTecho, setTipoTecho] = React.useState('');
  const [dimension, setDimension] = React.useState('');
  const [cantAnim, setCantAnim] = React.useState('');
  const [lat, setLat] = React.useState('');
  const [lon, setLon] = React.useState('');

  const data = [];
  const [geo, setGeo] = React.useState([]);

  const addCoral = () => {
    const dataNew = {
      orientation: checkedOrientacion,
      building_material: material,
      roof_material: tipoTecho,
      foor_material: checkedTipoSuelo,
      surface: dimension,
      num_animals: cantAnim,
      lat: lat,
      lng: lon,
    };

    let dataOld = [];

    if (Object.keys(corral).length !== 0) {
      corral.map((item) => {
        dataOld.push(item);
      });
      setCorral([...dataOld, dataNew]);
    } else {
      setCorral([dataNew]);
    }

    setCheckedOrientacion('');
    setMaterial('');
    setTipoTecho('');
    setCheckedTipoSuelo('');
    setDimension('');
    setCantAnim('');
    setLat('');
    setLon('');
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

  return (
    <View>
      <Title>Corral</Title>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Caption>Orientacion</Caption>
      </View>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentRadioButton
            title="Norte"
            value="norte"
            status={checkedOrientacion === 'norte' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrientacion('norte')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Sur"
            value="sur"
            status={checkedOrientacion === 'sur' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrientacion('sur')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Este"
            value="este"
            status={checkedOrientacion === 'este' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrientacion('este')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Oeste"
            value="oeste"
            status={checkedOrientacion === 'oeste' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrientacion('oeste')}
            color="#008577"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Material"
            style={styles.TextInput}
            value={material}
            onChangeText={(value) => setMaterial(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Tipo de Techo"
            style={styles.TextInput}
            value={tipoTecho}
            onChangeText={(value) => setTipoTecho(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Caption>Tipo de Suelo</Caption>
      </View>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentRadioButton
            title="Tierra"
            value="tierra"
            status={checkedTipoSuelo === 'tierra' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoSuelo('tierra')}
            color="#008577"
          />

          <ComponentRadioButton
            title="Contrapiso"
            value="contrapiso"
            status={checkedTipoSuelo === 'contrapiso' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoSuelo('contrapiso')}
            color="#008577"
          />

          <ComponentRadioButton
            title="Estocado"
            value="estocado"
            status={checkedTipoSuelo === 'estocado' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoSuelo('estocado')}
            color="#008577"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Dimension"
            style={styles.TextInput}
            value={dimension}
            onChangeText={(value) => setDimension(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Animales"
            style={styles.TextInput}
            value={cantAnim}
            onChangeText={(value) => setCantAnim(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>
      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Latitud"
            style={styles.TextInput}
            value={lat}
            onChangeText={(value) => setLat(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Longitud"
            style={styles.TextInput}
            value={lon}
            onChangeText={(value) => setLon(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={() => GeoProduction()}>
            Localizar
          </Button>
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={() => addCoral()}>
            Guardar
          </Button>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}>
            Cancelar
          </Button>
        </ComponentContainer>
      </ComponentContainerGlobal>
    </View>
  );
};

export default FormModal;
