import React from 'react';
import {View, ScrollView} from 'react-native';

import {
  TextInput,
  Button,
  Modal,
  Portal,
  Title,
  Caption,
  List,
} from 'react-native-paper';
import ComponentContainer from '../ComponentContainer';
import ComponentCheckBox from '../CheckBox';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visible, hideModal}) => {

  const [checkedMolinoViento, setCheckedMolinoViento] = React.useState(false);
  const [checkedTanqueAustraliano, setCheckedTanqueAustraliano] = React.useState(false);
  const [checkedRepresa, setCheckedRepresa] = React.useState(false);
  const [checkedBalanzaCamion, setCheckedBalanzaCamion] = React.useState(false);
  const [checkedPicadaCortFueg, setCheckedPicadaCortFueg] = React.useState(false);
  const [checkedPicadaAcceso, setCheckedPicadaAcceso] = React.useState(false);
  const [checkedPiletaAcuicultura, setCheckedPiletaAcuicultura] = React.useState(false);
  const [checkedActivo, setCheckedActivo] = React.useState(false);
 
  const FormInstalacion = () => {
    return (
        <View style={styles.container}>
          <Title>Instalaciones</Title>
          <ComponentContainer>
            <ComponentCheckBox
              title="Molino de Viento"
              disabled={false}
              value={checkedMolinoViento}
              onValueChange={(value) => setCheckedMolinoViento(value)}
            />
          </ComponentContainer>

          <ComponentContainer>
            <ComponentCheckBox
              title="Tanques Australianos"
              disabled={false}
              value={checkedTanqueAustraliano}
              onValueChange={(value) => setCheckedTanqueAustraliano(value)}
            />
          </ComponentContainer>

          <ComponentContainer>
            <ComponentCheckBox
              title="Represas/Tajamares"
              disabled={false}
              value={checkedRepresa}
              onValueChange={(value) => setCheckedRepresa(value)}
            />
          </ComponentContainer>

          <ComponentContainer>
            <ComponentCheckBox
              title="Balanza para Camiones"
              disabled={false}
              value={checkedBalanzaCamion}
              onValueChange={(value) => setCheckedBalanzaCamion(value)}
            />
          </ComponentContainer>

          <ComponentContainer>
            <ComponentCheckBox
              title="Picadas Cortafuego"
              disabled={false}
              value={checkedPicadaCortFueg}
              onValueChange={(value) => setCheckedPicadaCortFueg(value)}
            />
          </ComponentContainer>

          <ComponentContainer>
            <ComponentCheckBox
              title="Picadas de Acceso"
              disabled={false}
              value={checkedPicadaAcceso}
              onValueChange={(value) => setCheckedPicadaAcceso(value)}
            />
          </ComponentContainer>

          <ComponentContainer>
            <ComponentCheckBox
              title="Piletas para Acuicultura"
              disabled={false}
              value={checkedPiletaAcuicultura}
              onValueChange={(value) => setCheckedPiletaAcuicultura(value)}
            />
          </ComponentContainer>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Caption>Galpones</Caption>
          </View>

          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Superficie"
              style={styles.TextInput}
            />
          </ComponentContainer>

          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Latitud"
              style={styles.TextInput}
            />
          </ComponentContainer>

          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Longitud"
              style={styles.TextInput}
            />
          </ComponentContainer>

          <ComponentContainer>
            <Button mode="text" style={styles.SectionRight__button}>
              Localizar
            </Button>
          </ComponentContainer>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Caption>Posos de Agua</Caption>
          </View>

          <ComponentContainer>
            <ComponentCheckBox
              title="Activo?"
              disabled={false}
              value={checkedActivo}
              onValueChange={(value) => setCheckedActivo(value)}
            />
          </ComponentContainer>

          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Latitud"
              style={styles.TextInput}
            />
          </ComponentContainer>

          <ComponentContainer>
            <TextInput
              mode="outlined"
              label="Longitud"
              style={styles.TextInput}
            />
          </ComponentContainer>

          <ComponentContainer>
            <Button mode="text" style={styles.SectionRight__button}>
              Localizar
            </Button>
          </ComponentContainer>

          <ComponentContainer>
            <Button mode="text" style={styles.SectionRight__button}>
              Agregar
            </Button>
            <Button mode="text" style={styles.SectionRight__button}>
              Cancelar
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
                  title="Lista de Galpones"
                  id="0"
                  left={(props) => <List.Icon {...props} icon="equal" />}>
                  <List.Item
                    title="First Item"
                    left={(props) => <List.Icon {...props} icon="delete" />}
                    onPress={() => console.log('ELiminado')}
                  />
                </List.Accordion>

                <List.Accordion
                  title="Lista de Pozos de Agua"
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
              mode="text"
              style={styles.SectionRight__button}
              onPress={hideModal}>
              Guardar
            </Button>
            <Button
              mode="text"
              style={styles.SectionRight__button}
              onPress={hideModal}>
              Cancelar
            </Button>
          </ComponentContainer>
        </View>
    );
  };

  return (
    <>
      <ScrollView>
        <Portal>
          <Modal
            animationType="slide"
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.container}>
            <FormInstalacion />
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
};

export default FormModal;
