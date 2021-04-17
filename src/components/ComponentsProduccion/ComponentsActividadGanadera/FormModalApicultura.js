import React from 'react';
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
import ComponentCheckBox from '../../CheckBox';
import styles from '../../../assets/styles/components/Modals';

const FormModal = ({apicultura, setApicultura}) => {
 
  const [checkedRenapa, setCheckedRenapa] = React.useState(false);
  const [Especie, setEspecie] = React.useState('');
  const [checkedExistColmena, setCheckedExistColmena] = React.useState(false);
  const [checkedTipo, setCheckedTipo] = React.useState('');
  const [cantCajon, setCantCajon] = React.useState('');
  const [canAlsXCajon, setCanAlsXCajon] = React.useState('');
  const [periodPonil, setPeriodPonil] = React.useState('');
  const [TipoFlor, setTipoFlor] = React.useState('');

  const addApicultura = () => {
    const dataNew = {
      renapa: checkedRenapa,
      kind_bee: Especie,
      has_bee_hives: checkedExistColmena, //bool
      type_bee_hives: checkedTipo,  //select
      number_drawers: cantCajon,
      alsas_drawer: canAlsXCajon,
      pollination_period: periodPonil,
      pollinated_flower: TipoFlor,
      
    };

    setEspecie('');
    setCheckedExistColmena(false);
    setCheckedTipo('');
    setCantCajon('');
    setCanAlsXCajon('');
    setPeriodPonil('');
    setTipoFlor('');
    setCheckedRenapa(false);

    setApicultura([dataNew]);
  };

  return (
    <View>
      <Title>Ciclo Apicultura</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Especie de Abeja"
            style={styles.TextInput}
            value={Especie}
            onChangeText={(value) => setEspecie(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentCheckBox
            title="Existencia Colmena"
            disabled={false}
            value={checkedExistColmena}
            onValueChange={(value) => setCheckedExistColmena(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Caption style={{color: '#0079BF'}}>Tipo</Caption>
      </View>
      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentRadioButton
            title="Propias"
            value="propias"
            status={checkedTipo === 'propias' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipo('propias')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Terceros"
            value="terceros"
            status={checkedTipo === 'terceros' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedTipo('terceros')}
            color="#008577"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Cajones"
            style={styles.TextInput}
            value={cantCajon}
            onChangeText={(value) => setCantCajon(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cant. Alsas por Cajones"
            style={styles.TextInput}
            value={canAlsXCajon}
            onChangeText={(value) => setCanAlsXCajon(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Caption style={{color: '#0079BF'}}>Cajones</Caption>
        </View>
      </View>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Periodo de Ponilizacion"
            style={styles.TextInput}
            value={periodPonil}
            onChangeText={(value) => setPeriodPonil(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Tipo de Flor"
            style={styles.TextInput}
            value={TipoFlor}
            onChangeText={(value) => setTipoFlor(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentCheckBox
            title="RENAPA"
            disabled={false}
            value={checkedRenapa}
            onValueChange={(value) => setCheckedRenapa(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addApicultura()}>
            Guardar
          </Button>
          <Button
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}>
            Cancelar
          </Button>
        </ComponentContainer>
      </ComponentContainerGlobal>
    </View>
  );
};

export default FormModal;
