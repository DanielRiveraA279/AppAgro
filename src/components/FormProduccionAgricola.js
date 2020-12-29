import React from 'react';
import {connect} from 'react-redux';
import {productionAgriculturalPost} from '../actions/index';
import {View} from 'react-native';
import {
  TextInput,
  Button,
  Title,
  Caption,
  List,
  Provider,
} from 'react-native-paper';

import FormModalLaborCultural from './ComponentsProduccionAgricola/FormModalLaborCultural.js';
import FormModalPlaga from './ComponentsProduccionAgricola/FormModalPlaga.js';
import FormModalClima from './ComponentsProduccionAgricola/FormModalClima.js';
import FormModalCosecha from './ComponentsProduccionAgricola/FormModalCosecha.js';
import FormModalVenta from './ComponentsProduccionAgricola/FormModalVenta.js';

import ComponentContainer from './ComponentContainer';
import ComponentRadioButton from './RadioButton';

const FormGrupoFamiliar = ({
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
  productionAgriculturalPost,
  production_agricultural,
}) => {
  const [visible, setVisible] = React.useState(false);
  const [visiblePlaga, setVisiblePlaga] = React.useState(false);
  const [visibleClima, setVisibleClima] = React.useState(false);
  const [visibleCosecha, setVisibleCosecha] = React.useState(false);
  const [visibleVenta, setVisibleVenta] = React.useState(false);

  const [checkedDestino, setCheckedDestino] = React.useState('');
  const [checkedTipoSiembra, setCheckedTipoSiembra] = React.useState('');
  const [checkedSiembra, setCheckedSiembra] = React.useState('');

  const [cultural, setCultural] = React.useState([]);
  const [plaga, setPlaga] = React.useState([]);
  const [clima, setClima] = React.useState([]);
  const [cosecha, setCosecha] = React.useState([]);
  const [venta, setVenta] = React.useState([]);

  const [actividad, setActividad] = React.useState('');
  const [superficie, setSuperficie] = React.useState('');
  const [edad, setEdad] = React.useState('');
  const [problemas, setProblemas] = React.useState('');
  const [sugerencias, setSugerencias] = React.useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const showModalPlaga = () => setVisiblePlaga(true);
  const hideModalPlaga = () => setVisiblePlaga(false);
  const showModalClima = () => setVisibleClima(true);
  const hideModalClima = () => setVisibleClima(false);
  const showModalCosecha = () => setVisibleCosecha(true);
  const hideModalCosecha = () => setVisibleCosecha(false);
  const showModalVenta = () => setVisibleVenta(true);
  const hideModalVenta = () => setVisibleVenta(false);

  const addAgricultural = () => {
    //update redux
    productionAgriculturalPost({
      activity_name: actividad,
      surface: superficie,
      destination: checkedDestino,
      sowing: checkedSiembra,
      type_sowing: checkedTipoSiembra,
      age: edad,
      problems: problemas,
      suggestion: sugerencias,
      agricultural_attendance: cultural,
      agricultural_climatic: clima,
      agricultural_pests: plaga,
    });
    
  };

  const itemDeleteCultural = (value) => {
    setCultural(cultural.filter((item) => item !== value));
  };

  const itemDeletePlaga = (value) => {
    setPlaga(plaga.filter((item) => item !== value));
  };

  //accion del boton
  const nextStep = () => {
    addAgricultural()
    if (currentPosition === 5) {
      setCurrentPosition(currentPosition + 1);
      console.log('Produccion Agricola: ' + currentPosition);
    } else {
      setCurrentPosition(5);
    }
  };

  const backStep = () => {
    if (currentPosition === 5) {
      setCurrentPosition(currentPosition - 1);
    } else {
      setCurrentPosition(5);
    }
  };

  return (
    <Provider>
      <View>
        <FormModalLaborCultural
          visible={visible}
          hideModal={hideModal}
          cultural={cultural}
          setCultural={setCultural}
        />
        <FormModalPlaga
          visible={visiblePlaga}
          hideModal={hideModalPlaga}
          plaga={plaga}
          setPlaga={setPlaga}
        />
        <FormModalClima
          visible={visibleClima}
          hideModal={hideModalClima}
          clima={clima}
          setClima={setClima}
        />
        <FormModalCosecha
          visible={visibleCosecha}
          hideModal={hideModalCosecha}
          cosecha={cosecha}
          setCosecha={setCosecha}
        />
        <FormModalVenta
          visible={visibleVenta}
          hideModal={hideModalVenta}
          venta={venta}
          setVenta={setVenta}
        />

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
            label="Actividad"
            style={styles.TextInput}
            value={actividad}
            onChangeText={(value) => setActividad(value)}
          />
        </ComponentContainer>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Superficie"
            style={styles.TextInput}
            value={superficie}
            onChangeText={(value) => setSuperficie(value)}
          />
        </ComponentContainer>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Caption>Destino</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Consumo"
            value="consumo"
            status={checkedDestino === 'consumo' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedDestino('consumo')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Venta"
            value="venta"
            status={checkedDestino === 'venta' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedDestino('venta')}
            color="#008577"
          />

          <ComponentRadioButton
            title="Ambos"
            value="destino/venta"
            status={
              checkedDestino === 'destino/venta' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedDestino('destino/venta')}
            color="#008577"
          />
        </ComponentContainer>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Caption>Siembra</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Directa"
            value="directa"
            status={checkedSiembra === 'directa' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedSiembra('directa')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Convencional"
            value="convencional"
            status={
              checkedSiembra === 'convencional' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedSiembra('convencional')}
            color="#008577"
          />
        </ComponentContainer>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Caption>Tipo de Siembra</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Peregme"
            value="peregme"
            status={checkedTipoSiembra === 'peregme' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoSiembra('peregme')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Anual"
            value="anual"
            status={checkedTipoSiembra === 'anual' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoSiembra('anual')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Edad"
            style={styles.TextInput}
            value={edad}
            onChangeText={(value) => setEdad(value)}
          />
        </ComponentContainer>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Problemas"
            style={styles.TextInput}
            value={problemas}
            onChangeText={(value) => setProblemas(value)}
          />
        </ComponentContainer>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Sugerencias"
            style={styles.TextInput}
            value={sugerencias}
            onChangeText={(value) => setSugerencias(value)}
          />
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModal}>
            Cultural
          </Button>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalPlaga}>
            Plagas
          </Button>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalClima}>
            Clima
          </Button>
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalCosecha}>
            Cosecha
          </Button>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalVenta}>
            Ventas
          </Button>
        </ComponentContainer>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <List.Accordion
              title="Lista de Labor Cultural"
              left={(props) => <List.Icon {...props} icon="equal" />}>
              {Object.keys(cultural).length === 0
                ? null
                : cultural.map((item, key) => {
                    return (
                      <List.Item
                        key={key}
                        title={'Labor Culrutal?: Si'}
                        left={(props) => <List.Icon {...props} icon="delete" />}
                        onPress={() => itemDeleteCultural(item)}
                      />
                    );
                  })}
            </List.Accordion>

            <List.Accordion
              title="Plagas/Enferm./maleza"
              left={(props) => <List.Icon {...props} icon="equal" />}>
              {Object.keys(plaga).length === 0
                ? null
                : plaga.map((item, key) => {
                    return (
                      <List.Item
                        key={key}
                        title="plaga"
                        left={(props) => <List.Icon {...props} icon="delete" />}
                        onPress={() => itemDeletePlaga(item)}
                      />
                    );
                  })}
            </List.Accordion>

            <List.Accordion
              title="Factores Climaticos"
              id="2"
              left={(props) => <List.Icon {...props} icon="equal" />}>
              <List.Item title="First Item" />
            </List.Accordion>

            <List.Accordion
              title="Lista de Cosechas"
              id="3"
              left={(props) => <List.Icon {...props} icon="equal" />}>
              <List.Item title="First Item" />
            </List.Accordion>

            <List.Accordion
              title="Lista de Canal de Ventas"
              id="4"
              left={(props) => <List.Icon {...props} icon="equal" />}>
              <List.Item title="First Item" />
            </List.Accordion>
          </View>
        </View>

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
    production_agricultural: state.production_agricultural,
  }
}

const mapDispatchToProps = {
  productionAgriculturalPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormGrupoFamiliar);
