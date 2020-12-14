import React from 'react';
import {View} from 'react-native';
import {TextInput, Button, Title, List, Provider} from 'react-native-paper';
import FormModalTitulo from './ComponentsProduccion/FormModalTitulo.js';
import FormModalServicio from './ComponentsProduccion/FormModalServicio.js';
import FormModalMaquinaria from './ComponentsProduccion/FormModalMaquinaria.js';
import FormModalInstalacion from './ComponentsProduccion/FormModalInstalacion.js';
import FormModalRiego from './ComponentsProduccion/FormModalRiego.js';
import ComponentContainer from './ComponentContainer';
import ComponentCheckBox from './CheckBox';

const FormProduccion = ({
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
}) => {
  const [visible, setVisible] = React.useState(false);
  const [visibleServicio, setVisibleServicio] = React.useState(false);
  const [visibleMaquinaria, setVisibleMaquinaria] = React.useState(false);
  const [visibleInstalacion, setVisibleInstalacion] = React.useState(false);
  const [visibleRiego, setVisibleRiego] = React.useState(false);

  const [checkedResidente, setCheckedResidente] = React.useState(false);
  const [checkedRenspa, setCheckedRenspa] = React.useState(false);

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

  //accion del boton
  const nextStep = () => {
    if (currentPosition === 5) {
      setCurrentPosition(currentPosition + 1);
      console.log('Produccion: ' + currentPosition);
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
        <FormModalTitulo visible={visible} hideModal={hideModal} />
        <FormModalServicio
          visible={visibleServicio}
          hideModal={hideModalServicio}
        />
        <FormModalMaquinaria
          visible={visibleMaquinaria}
          hideModal={hideModalMaquinaria}
        />
        <FormModalInstalacion
          visible={visibleInstalacion}
          hideModal={hideModalInstalacion}
        />

        <FormModalRiego visible={visibleRiego} hideModal={hideModalRiego} />

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
          <TextInput mode="outlined" label="Lat" style={styles.TextInput} />
        </ComponentContainer>

        <ComponentContainer>
          <TextInput mode="outlined" label="Long" style={styles.TextInput} />
        </ComponentContainer>

        <ComponentContainer>
          <Button
            mode="text  "
            onPress={nextStep}
            style={styles.SectionRight__button}>
            Localizar
          </Button>
        </ComponentContainer>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Condiciòn del Camino"
            style={styles.TextInput}
          />
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
                title="Seleccione un Distrito"
                id="0"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item
                  title="Tinogasta"
                  left={(props) => <List.Icon {...props} />}
                  onPress={() => console.log('ELiminado')}
                />
                <List.Item
                  title="Copacabana"
                  left={(props) => <List.Icon {...props} />}
                  onPress={() => console.log('ELiminado')}
                />
                <List.Item
                  title="Salado"
                  left={(props) => <List.Icon {...props} />}
                  onPress={() => console.log('ELiminado')}
                />
                <List.Item
                  title="Pueblito"
                  left={(props) => <List.Icon {...props} />}
                  onPress={() => console.log('ELiminado')}
                />
              </List.Accordion>
            </List.AccordionGroup>
          </View>
        </View>

        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Superficie"
            style={styles.TextInput}
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
          <Button mode="text" style={styles.SectionRight__button}>
            Guardar
          </Button>
          <Button mode="text" style={styles.SectionRight__button}>
            Cancelar
          </Button>
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

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <List.AccordionGroup>
              <List.Accordion
                title="Lista de Producciòn"
                id="0"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item
                  title="First Item"
                  left={(props) => <List.Icon {...props} icon="delete" />}
                  onPress={() => console.log('ELiminado')}
                />
              </List.Accordion>
            </List.AccordionGroup>

            <List.AccordionGroup>
              <List.Accordion
                title="Lista de Titulos"
                id="0"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item
                  title="First Item"
                  left={(props) => <List.Icon {...props} icon="delete" />}
                  onPress={() => console.log('ELiminado')}
                />
              </List.Accordion>
            </List.AccordionGroup>

            <List.AccordionGroup>
              <List.Accordion
                title="Lista de Servicios"
                id="0"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item
                  title="First Item"
                  left={(props) => <List.Icon {...props} icon="delete" />}
                  onPress={() => console.log('ELiminado')}
                />
              </List.Accordion>
            </List.AccordionGroup>

            <List.AccordionGroup>
              <List.Accordion
                title="Lista de Maquinaria"
                id="0"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item
                  title="First Item"
                  left={(props) => <List.Icon {...props} icon="delete" />}
                  onPress={() => console.log('ELiminado')}
                />
              </List.Accordion>
            </List.AccordionGroup>

            <List.AccordionGroup>
              <List.Accordion
                title="Lista de Instalaciones"
                id="0"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item
                  title="First Item"
                  left={(props) => <List.Icon {...props} icon="delete" />}
                  onPress={() => console.log('ELiminado')}
                />
              </List.Accordion>
            </List.AccordionGroup>

            <List.AccordionGroup>
              <List.Accordion
                title="Lista de Riego"
                id="0"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item
                  title="First Item"
                  left={(props) => <List.Icon {...props} icon="delete" />}
                  onPress={() => console.log('ELiminado')}
                />
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

export default FormProduccion;
