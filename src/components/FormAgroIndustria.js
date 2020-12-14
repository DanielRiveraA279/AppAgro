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
}) => {

  const [checkedMateriaPrima, setCheckedMateriaPrima] = React.useState('');
  const [checkedMecanizada, setCheckedMecanizada] = React.useState(false);
  const [checkedConocimiento, setCheckedConocimiento] = React.useState('');

  const [visibleHerramienta, setVisibleHerramienta] = React.useState(false);
  const [visibleArtesanal, setVisibleArtesanal] = React.useState(false);
  const [visibleAlimentario, setVisibleAlimentario] = React.useState(false);

  const showModalHerramienta = () => setVisibleHerramienta(true);
  const hideModalHerramienta = () => setVisibleHerramienta(false);
  const showModalArtesanal = () => setVisibleArtesanal(true);
  const hideModalArtesanal = () => setVisibleArtesanal(false);
  const showModalAlimentario = () => setVisibleAlimentario(true);
  const hideModalAlimentario = () => setVisibleAlimentario(false);

  //accion del boton
  const nextStep = () => {
    if (currentPosition === 7) {
      setCurrentPosition(currentPosition + 1);
      console.log('Agroindustria: ' + currentPosition);
    } else {
      setCurrentPosition(7);
    }
  };

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
        <FormModalHerramienta
          visible={visibleHerramienta}
          hideModal={hideModalHerramienta}
        />
        <FormModalArtesanal
          visible={visibleArtesanal}
          hideModal={hideModalArtesanal}
        />
        <FormModalAlimentario
          visible={visibleAlimentario}
          hideModal={hideModalAlimentario}
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
            status={checkedConocimiento === 'informal' ? 'checked' : 'unchecked'}
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
            <List.AccordionGroup>
              <List.Accordion
                title="Herramientas"
                id="0"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item
                  title="First Item"
                  left={(props) => <List.Icon {...props} icon="delete" />}
                  onPress={() => console.log('ELiminado')}
                />
              </List.Accordion>

              <List.Accordion
                title="Productos Artesanales"
                id="0"
                left={(props) => <List.Icon {...props} icon="equal" />}>
                <List.Item
                  title="First Item"
                  left={(props) => <List.Icon {...props} icon="delete" />}
                  onPress={() => console.log('ELiminado')}
                />
              </List.Accordion>

              <List.Accordion
                title="Productos Alimentarios"
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

export default FormAgroIndustria;
