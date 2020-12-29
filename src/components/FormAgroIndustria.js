import React from 'react';
import {connect} from 'react-redux';
import {productionAgroindustrialPost} from '../actions/index';

import {View} from 'react-native';
import {
  TextInput,
  Button,
  Title,
  Caption,
  List,
  Provider,
} from 'react-native-paper';

import FormModalHerramienta from './ComponentsAgroIndustria/FormModalHerramienta.js';
import FormModalArtesanal from './ComponentsAgroIndustria/FormModalArtesanal.js';
import FormModalAlimentario from './ComponentsAgroIndustria/FormModalAlimentario.js';
import ComponentContainer from './ComponentContainer';
import ComponentRadioButton from './RadioButton';
import ComponentCheckBox from './CheckBox';

const FormAgroIndustria = ({
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
  production_agroindustrial,
  productionAgroindustrialPost,
}) => {
  const [checkedMateriaPrima, setCheckedMateriaPrima] = React.useState('');
  const [checkedMecanizada, setCheckedMecanizada] = React.useState(false);
  const [checkedConocimiento, setCheckedConocimiento] = React.useState('');
  const [descripcion, setDescripcion] = React.useState('');

  const [visibleHerramienta, setVisibleHerramienta] = React.useState(false);
  const [visibleArtesanal, setVisibleArtesanal] = React.useState(false);
  const [visibleAlimentario, setVisibleAlimentario] = React.useState(false);
  const [artesanal, setArtesanal] = React.useState([]);
  const [herramienta, setHerramienta] = React.useState([]);
  const [alimentario, setAlimentario] = React.useState([]);

  const showModalHerramienta = () => setVisibleHerramienta(true);
  const hideModalHerramienta = () => setVisibleHerramienta(false);
  const showModalArtesanal = () => setVisibleArtesanal(true);
  const hideModalArtesanal = () => setVisibleArtesanal(false);
  const showModalAlimentario = () => setVisibleAlimentario(true);
  const hideModalAlimentario = () => setVisibleAlimentario(false);

  //accion del boton
  const nextStep = () => {
    productionAgroindustrialPost({
      description: descripcion,
      raw_material: checkedMateriaPrima,
      is_mechanized: checkedMecanizada,
      knowledge: checkedConocimiento,
      agroindustrial_food_product: alimentario,
      agroindustrial_handmande_product: artesanal,
      agroindustrial_tools: herramienta,
    });

    if (currentPosition === 6) {
      setCurrentPosition(currentPosition + 1);
      console.log('Agroindustria: ' + currentPosition);
    } else {
      setCurrentPosition(6);
    }
  };

  const backStep = () => {
    production_agroindustrial.map((item) => {
      console.log(item);
    })
    if (currentPosition === 6) {
      setCurrentPosition(currentPosition - 1);
    } else {
      setCurrentPosition(6);
    }
  };

  const itemDeleteHerramienta = (value) => {
    setHerramienta(herramienta.filter((item) => item !== value));
  };

  const itemDeleteArtesanal = (value) => {
    setArtesanal(artesanal.filter((item) => item !== value));
  };

  const itemDeleteAlimentario = (value) => {
    setAlimentario(alimentario.filter((item) => item !== value));
  };

  return (
    <Provider>
      <View>
        <FormModalHerramienta
          visible={visibleHerramienta}
          hideModal={hideModalHerramienta}
          herramienta={herramienta}
          setHerramienta={setHerramienta}
        />
        <FormModalArtesanal
          visible={visibleArtesanal}
          hideModal={hideModalArtesanal}
          artesanal={artesanal}
          setArtesanal={setArtesanal}
        />
        <FormModalAlimentario
          visible={visibleAlimentario}
          hideModal={hideModalAlimentario}
          alimentario={alimentario}
          setAlimentario={setAlimentario}
        />

        <View
          style={{
            flexDirection: 'row',
          }}>
          <Title style={styles.header_title}>{titulo}</Title>
        </View>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Descripcion"
            style={styles.TextInput}
            value={descripcion}
            onChangeText={(value) => setDescripcion(value)}
          />
        </ComponentContainer>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Materia Prima</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Propia"
            value="propia"
            status={checkedMateriaPrima === 'propia' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedMateriaPrima('propia')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Local"
            value="local"
            status={checkedMateriaPrima === 'local' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedMateriaPrima('local')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Externa"
            value="externa"
            status={checkedMateriaPrima === 'externa' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedMateriaPrima('externa')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <ComponentCheckBox
            title="Mecanizada"
            disabled={false}
            value={checkedMecanizada}
            onValueChange={(value) => setCheckedMecanizada(value)}
          />
        </ComponentContainer>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption>Conocimiento</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Formal"
            value="formal"
            status={checkedConocimiento === 'formal' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedConocimiento('formal')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Informal"
            value="informal"
            status={
              checkedConocimiento === 'informal' ? 'checked' : 'unchecked'
            }
            onPress={() => setCheckedConocimiento('informal')}
            color="#008577"
          />
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text  "
            onPress={nextStep}
            style={styles.SectionRight__button}
            onPress={showModalArtesanal}>
            Artesanal
          </Button>
          <Button
            mode="text  "
            onPress={showModalHerramienta}
            style={styles.SectionRight__button}>
            Herramientas
          </Button>
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text  "
            onPress={showModalAlimentario}
            style={styles.SectionRight__button}>
            Alimentario
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
              title="Herramientas"
              left={(props) => <List.Icon {...props} icon="equal" />}>
              {Object.keys(herramienta).length === 0
                ? null
                : herramienta.map((item, key) => {
                    return (
                      <List.Item
                        key={key}
                        title={item.name_tool}
                        left={(props) => <List.Icon {...props} icon="delete" />}
                        onPress={() => itemDeleteHerramienta(item)}
                      />
                    );
                  })}
            </List.Accordion>

            <List.Accordion
              title="Productos Artesanales"
              left={(props) => <List.Icon {...props} icon="equal" />}>
              {Object.keys(artesanal).length === 0
                ? null
                : artesanal.map((item, key) => {
                    return (
                      <List.Item
                        key={key}
                        title={item.name_product}
                        left={(props) => <List.Icon {...props} icon="delete" />}
                        onPress={() => itemDeleteArtesanal(item)}
                      />
                    );
                  })}
            </List.Accordion>

            <List.Accordion
              title="Productos Alimentarios"
              left={(props) => <List.Icon {...props} icon="equal" />}>
              {Object.keys(alimentario).length === 0
                ? null
                : alimentario.map((item, key) => {
                    return (
                      <List.Item
                        key={key}
                        title={item.name_product}
                        left={(props) => <List.Icon {...props} icon="delete" />}
                        onPress={() => itemDeleteAlimentario(item)}
                      />
                    );
                  })}
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
    production_agroindustrial: state.production_agroindustrial,
  };
};

const mapDispatchToProps = {
  productionAgroindustrialPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAgroIndustria);
