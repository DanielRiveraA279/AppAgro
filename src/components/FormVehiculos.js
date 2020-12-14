import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Title, Caption, List} from 'react-native-paper';

import ComponentContainer from './ComponentContainer';
import ComponentRadioButton from './RadioButton';
import ComponentCheckBox from './CheckBox';

const FormVehiculo = ({
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
}) => {
  
  const [checkedTipoVehiculo, setCheckedTipoVehiculo] = React.useState('');
  const [checkedSemiRemolque, setCheckedSemiRemolque] = React.useState(false);
  //accion del boton
  const nextStep = () => {
    if (currentPosition === 4) {
      setCurrentPosition(currentPosition + 1);
      console.log('Vehiculo: ' + currentPosition);
    } else {
      setCurrentPosition(4);
    }
  };

  const backStep = () => {
    if (currentPosition === 4) {
      setCurrentPosition(currentPosition - 1);
    } else {
      setCurrentPosition(4);
    }
  };

  return (

    <View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Title style={styles.header_title}>{titulo}</Title>
      </View>

      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Caption>Tipo Vehiculo</Caption>
      </View>

      <ComponentContainer>
        <ComponentRadioButton
          title="Camioneta"
          value="camioneta"
          status={checkedTipoVehiculo === 'camioneta' ? 'checked' : 'unchecked'}
          onPress={() => setCheckedTipoVehiculo('camioneta')}
          color="#008577"
        />
        <ComponentRadioButton
          title="Camion"
          value="camion"
          status={checkedTipoVehiculo === 'camion' ? 'checked' : 'unchecked'}
          onPress={() => setCheckedTipoVehiculo('camion')}
          color="#008577"
        />
        <ComponentRadioButton
          title="Acoplado"
          value="acoplado"
          status={checkedTipoVehiculo === 'acoplado' ? 'checked' : 'unchecked'}
          onPress={() => setCheckedTipoVehiculo('acoplado')}
          color="#008577"
        />
      </ComponentContainer>

      <ComponentContainer>
        <TextInput
          mode="outlined"
          label="Tipo de Acoplado"
          style={styles.TextInput}
        />
      </ComponentContainer>

      <ComponentContainer>
        <ComponentCheckBox
          title="Semi Remolque"
          disabled={false}
          value={checkedSemiRemolque}
          onValueChange={(value) => setCheckedSemiRemolque(value)}
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

      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
          <List.AccordionGroup>
            <List.Accordion
              title="Lista de Vehiculos"
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

  );
};

export default FormVehiculo;
