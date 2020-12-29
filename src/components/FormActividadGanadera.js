import React from 'react';
import {View} from 'react-native';
import {
  TextInput,
  Button,
  Paragraph,
  Title,
  Caption,
  List,
  Provider,
} from 'react-native-paper';

import FormModalCicloAvicultura from './ComponentsActividadGanadera/FormCicloAvicultura.js';
import FormModalAcuicultura from './ComponentsActividadGanadera/FormModalAcuicultura.js';
import FormModalApicultura from './ComponentsActividadGanadera/FormModalApicultura.js';
import FormModalCanalVenta from './ComponentsActividadGanadera/FormModalCanalVenta.js';
import FormModalCicloBovino from './ComponentsActividadGanadera/FormModalCicloBovino.js';
import FormModalCicloCaprino from './ComponentsActividadGanadera/FormModalCicloCaprino.js';
import FormModalCicloLlama from './ComponentsActividadGanadera/FormModalCicloLlama.js';
import FormModalCicloOvino from './ComponentsActividadGanadera/FormModalCicloOvino.js';
import FormModalCicloPorcino from './ComponentsActividadGanadera/FormModalCicloPorcino.js';
import FormModalComercio from './ComponentsActividadGanadera/FormModalComercio.js';
import FormModalCunicultura from './ComponentsActividadGanadera/FormModalCunicultura.js';
import FormModalReproduccion from './ComponentsActividadGanadera/FormModalReproduccion.js';
import FormModalSanidad from './ComponentsActividadGanadera/FormModalSanidad.js';
import FormModalCorral from './ComponentsActividadGanadera/FormModalCorral.js';
import FormModalTipoAlimentacion from './ComponentsActividadGanadera/FormModalTipoAlimentacion.js';

import ComponentContainer from './ComponentContainer';
import ComponentRadioButton from './RadioButton';
import ComponentCheckBox from './CheckBox';

const FormActividadGanadera = ({
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
}) => {
 
  const [checkedAsesoramiento, setCheckedAsesoramiento] = React.useState(false);

  const [visibleCicloAvicultura, setVisibleCicloAvicultura] = React.useState(
    false,
  );
  const showModalCicloAvicultura = () => setVisibleCicloAvicultura(true);
  const hideModalCicloAvicultura = () => setVisibleCicloAvicultura(false);
  const [visibleAcuicultura, setVisibleAcuicultura] = React.useState(false);
  const showModalAcuicultura = () => setVisibleAcuicultura(true);
  const hideModalAcuicultura = () => setVisibleAcuicultura(false);
  const [visibleApicultura, setVisibleApicultura] = React.useState(false);
  const showModalApicultura = () => setVisibleApicultura(true);
  const hideModalApicultura = () => setVisibleApicultura(false);
  const [visibleCanalVenta, setVisibleCanalVenta] = React.useState(false);
  const showModalCanalVenta = () => setVisibleCanalVenta(true);
  const hideModalCanalVenta = () => setVisibleCanalVenta(false);
  const [visibleCicloBovino, setVisibleCicloBovino] = React.useState(false);
  const showModalCicloBovino = () => setVisibleCicloBovino(true);
  const hideModalCicloBovino = () => setVisibleCicloBovino(false);
  const [visibleCicloCaprino, setVisibleCicloCaprino] = React.useState(false);
  const showModalCicloCaprino = () => setVisibleCicloCaprino(true);
  const hideModalCicloCaprino = () => setVisibleCicloCaprino(false);
  const [visibleCicloLlama, setVisibleCicloLlama] = React.useState(false);
  const showModalCicloLlama = () => setVisibleCicloLlama(true);
  const hideModalCicloLlama = () => setVisibleCicloLlama(false);
  const [visibleCicloOvino, setVisibleCicloOvino] = React.useState(false);
  const showModalCicloOvino = () => setVisibleCicloOvino(true);
  const hideModalCicloOvino = () => setVisibleCicloOvino(false);
  const [visibleCicloPorcino, setVisibleCicloPorcino] = React.useState(false);
  const showModalCicloPorcino = () => setVisibleCicloPorcino(true);
  const hideModalCicloPorcino = () => setVisibleCicloPorcino(false);

  const [visibleComercio, setVisibleComercio] = React.useState(false);
  const showModalComercio = () => setVisibleComercio(true);
  const hideModalComercio = () => setVisibleComercio(false);

  const [visibleCunicultura, setVisibleCunicultura] = React.useState(false);
  const showModalCunicultura = () => setVisibleCunicultura(true);
  const hideModalCunicultura = () => setVisibleCunicultura(false);
  const [visibleReproduccion, setVisibleReproduccion] = React.useState(false);
  const showModalReproduccion = () => setVisibleReproduccion(true);
  const hideModalReproduccion = () => setVisibleReproduccion(false);
  const [visibleSanidad, setVisibleSanidad] = React.useState(false);
  const showModalSanidad = () => setVisibleSanidad(true);
  const hideModalSanidad = () => setVisibleSanidad(false);
  const [visibleCorral, setVisibleCorral] = React.useState(false);
  const showModalCorral = () => setVisibleCorral(true);
  const hideModalCorral = () => setVisibleCorral(false);

  const [visibleTipoAlimentacion, setVisibleTipoAlimentacion] = React.useState(
    false,
  );
  const showModalTipoAlimentacion = () => setVisibleTipoAlimentacion(true);
  const hideModalTipoAlimentacion = () => setVisibleTipoAlimentacion(false);

  const backStep = () => {
    if (currentPosition === 7) {
      setCurrentPosition(currentPosition - 1);
    } else {
      setCurrentPosition(7);
    }
  };

  return (
    <Provider>
      <View>
        <FormModalCicloAvicultura
          visible={visibleCicloAvicultura}
          hideModal={hideModalCicloAvicultura}
        />
        <FormModalAcuicultura
          visible={visibleAcuicultura}
          hideModal={hideModalAcuicultura}
        />
        <FormModalApicultura
          visible={visibleApicultura}
          hideModal={hideModalApicultura}
        />
        <FormModalCanalVenta
          visible={visibleCanalVenta}
          hideModal={hideModalCanalVenta}
        />
        <FormModalCicloBovino
          visible={visibleCicloBovino}
          hideModal={hideModalCicloBovino}
        />
        <FormModalCicloCaprino
          visible={visibleCicloCaprino}
          hideModal={hideModalCicloCaprino}
        />
        <FormModalCicloLlama
          visible={visibleCicloLlama}
          hideModal={hideModalCicloLlama}
        />
        <FormModalCicloOvino
          visible={visibleCicloOvino}
          hideModal={hideModalCicloOvino}
        />
        <FormModalCicloPorcino
          visible={visibleCicloPorcino}
          hideModal={hideModalCicloPorcino}
        />
        <FormModalComercio
          visible={visibleComercio}
          hideModal={hideModalComercio}
        />
        <FormModalCunicultura
          visible={visibleCunicultura}
          hideModal={hideModalCunicultura}
        />
        <FormModalReproduccion
          visible={visibleReproduccion}
          hideModal={hideModalReproduccion}
        />
        <FormModalSanidad
          visible={visibleSanidad}
          hideModal={hideModalSanidad}
        />
        <FormModalCorral visible={visibleCorral} hideModal={hideModalCorral} />
        <FormModalTipoAlimentacion
          visible={visibleTipoAlimentacion}
          hideModal={hideModalTipoAlimentacion}
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <Title style={styles.header_title}>{titulo}</Title>
        </View>

        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <List.AccordionGroup>
                <List.Accordion
                  title="Tipo Actividad"
                  id="4"
                  left={(props) => <List.Icon {...props} icon="equal" />}>
                  <List.Item title="Bovinos" />
                  <List.Item title="Ovinos" />
                  <List.Item title="Porcinos" />
                  <List.Item title="Caprinos" />
                  <List.Item title="Llamas" />
                  <List.Item title="Avicultura" />
                  <List.Item title="Cunicultura" />
                  <List.Item title="Apicultura" />
                  <List.Item title="Acuicultura" />
                </List.Accordion>
              </List.AccordionGroup>
            </View>
          </View>
        </View>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Superficie Actividad"
            style={styles.TextInput}
          />
        </ComponentContainer>

        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <List.AccordionGroup>
                <List.Accordion
                  title="Tipo de Destino"
                  id="4"
                  left={(props) => <List.Icon {...props} icon="equal" />}>
                  <List.Item title="Consumo" />
                  <List.Item title="Trueque" />
                  <List.Item title="Venta" />
                </List.Accordion>
              </List.AccordionGroup>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Caption>Acesoramiento</Caption>
          </View>
        </View>

        <ComponentContainer>
          <ComponentCheckBox
            title="Tecnico/Veterinario"
            value={checkedAsesoramiento}
            onValueChange={(value) => setCheckedAsesoramiento(value)}
          />
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
            onPress={showModalSanidad}>
            Sanidad
          </Button>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalReproduccion}>
            Reproduccion
          </Button>
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalComercio}>
            Comercializacion
          </Button>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalCanalVenta}>
            Venta
          </Button>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalCicloBovino}>
            Bovino
          </Button>
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalCicloOvino}>
            Ovino
          </Button>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalCicloCaprino}>
            Caprino
          </Button>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalCicloPorcino}>
            Porcino
          </Button>
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalCicloLlama}>
            Llamas
          </Button>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalCicloAvicultura}>
            Avicultura
          </Button>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalCunicultura}>
            Cunicultura
          </Button>
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalApicultura}>
            Apicultura
          </Button>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalAcuicultura}>
            Acuicultura
          </Button>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalCorral}>
            Corral
          </Button>
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text"
            style={styles.SectionRight__button}
            onPress={showModalTipoAlimentacion}>
            Alimentacion
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
                title="Sanidad"
                id="0"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item
                  title="First Item"
                  left={(props) => <List.Icon {...props} icon="delete" />}
                  onPress={() => console.log('ELiminado')}
                />
              </List.Accordion>

              <List.Accordion
                title="Reproduccion"
                id="1"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item title="First Item" />
              </List.Accordion>

              <List.Accordion
                title="Comercializacion"
                id="2"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item title="First Item" />
              </List.Accordion>

              <List.Accordion
                title="Venta"
                id="3"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item title="First Item" />
              </List.Accordion>

              <List.Accordion
                title="Bovinos"
                id="4"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item title="First Item" />
              </List.Accordion>

              <List.Accordion
                title="Ovinos"
                id="4"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item title="First Item" />
              </List.Accordion>

              <List.Accordion
                title="Caprinos"
                id="4"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item title="First Item" />
              </List.Accordion>

              <List.Accordion
                title="Porcinos"
                id="4"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item title="First Item" />
              </List.Accordion>

              <List.Accordion
                title="Llamas"
                id="4"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item title="First Item" />
              </List.Accordion>

              <List.Accordion
                title="Avicultura"
                id="4"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item title="First Item" />
              </List.Accordion>

              <List.Accordion
                title="Cunicultura"
                id="4"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item title="First Item" />
              </List.Accordion>

              <List.Accordion
                title="Apicultura"
                id="4"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item title="First Item" />
              </List.Accordion>

              <List.Accordion
                title="Acuicultura"
                id="4"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item title="First Item" />
              </List.Accordion>

              <List.Accordion
                title="Corral"
                id="4"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item title="First Item" />
              </List.Accordion>

              <List.Accordion
                title="Alimentacion"
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
          <Button mode="contained" style={styles.SectionRight__button}>
            Guardar
          </Button>
        </ComponentContainer>
      </View>
    </Provider>
  );
};

export default FormActividadGanadera;
