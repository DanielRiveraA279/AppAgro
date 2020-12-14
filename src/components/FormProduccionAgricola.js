import React from 'react';
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
}) => {
  const [checked, setChecked] = React.useState('first');
  const [visible, setVisible] = React.useState(false);
  const [visiblePlaga, setVisiblePlaga] = React.useState(false);
  const [visibleClima, setVisibleClima] = React.useState(false);
  const [visibleCosecha, setVisibleCosecha] = React.useState(false);
  const [visibleVenta, setVisibleVenta] = React.useState(false);

  const [checkedDestino, setCheckedDestino] = React.useState('');
  const [checkedTipoSiembra, setCheckedTipoSiembra] = React.useState('');

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

  //accion del boton
  const nextStep = () => {
    if (currentPosition === 6) {
      setCurrentPosition(currentPosition + 1);
      console.log('Produccion Agricola: ' + currentPosition);
    } else {
      setCurrentPosition(6);
    }
  };

  const backStep = () => {
    if (currentPosition === 6) {
      setCurrentPosition(currentPosition - 1);
    } else {
      setCurrentPosition(6);
    }
  };

  return (
    <Provider>
      <View>
        <FormModalLaborCultural visible={visible} hideModal={hideModal} />
        <FormModalPlaga visible={visiblePlaga} hideModal={hideModalPlaga} />
        <FormModalClima visible={visibleClima} hideModal={hideModalClima} />
        <FormModalCosecha
          visible={visibleCosecha}
          hideModal={hideModalCosecha}
        />
        <FormModalVenta visible={visibleVenta} hideModal={hideModalVenta} />

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
          />
        </ComponentContainer>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Superficie"
            style={styles.TextInput}
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
            status={checkedDestino === 'destino/venta' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedDestino('destino/venta')}
            color="#008577"
          />
        </ComponentContainer>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Caption>Tipo de Siembra</Caption>
        </View>

        <ComponentContainer>
          <ComponentRadioButton
            title="Directa"
            value="directa"
            status={checkedTipoSiembra === 'directa' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoSiembra('directa')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Convencional"
            value="convencional"
            status={checkedTipoSiembra === 'convencional' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipoSiembra('convencional')}
            color="#008577"
          />
        </ComponentContainer>

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
          <TextInput mode="outlined" label="Edad" style={styles.TextInput} />
        </ComponentContainer>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Problemas"
            style={styles.TextInput}
          />
        </ComponentContainer>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Sugerencias"
            style={styles.TextInput}
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
            <List.AccordionGroup>
              <List.Accordion
                title="Lista de Labor Cultural"
                id="0"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item
                  title="First Item"
                  left={(props) => <List.Icon {...props} icon="delete" />}
                  onPress={() => console.log('ELiminado')}
                />
              </List.Accordion>

              <List.Accordion
                title="Plagas/Enferm./maleza"
                id="1"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item title="First Item" />
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
            </List.AccordionGroup>
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

export default FormGrupoFamiliar;
