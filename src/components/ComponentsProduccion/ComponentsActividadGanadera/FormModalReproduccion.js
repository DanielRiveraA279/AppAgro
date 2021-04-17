import React from 'react';
import {View, ScrollView} from 'react-native';

import {TextInput, Button, Modal, Portal, Title, Caption} from 'react-native-paper';
import ComponentContainer from '../../ComponentContainer';
import ComponentContainerGlobal from '../../ComponentContainerGlobal';
import ComponentCheckBox from '../../CheckBox';
import ComponentRadioButton from '../../RadioButton';

import styles from '../../../assets/styles/components/Modals';

const FormModal = ({reproduccion, setReproduccion}) => {
  const [checkedManejoReproduct, setCheckedManejoReproduct] = React.useState(
    false,
  );
  const [checkedTipoManejReprod, setCheckedTipoManejReprod] = React.useState(
    '',
  );

  const [checkedServicioContinuo, setCheckedServicioContinuo] = React.useState(
    false,
  );

  const [otra, setOtra] = React.useState('');

  const addReproduccion = () => {
    const dataNew = {
      make_reproductive_management: checkedManejoReproduct, //manejo reproductivo
      type_reproductive_management: checkedTipoManejReprod, //tipo de manejo reproductivo
      make_continuous_service: checkedServicioContinuo, //servicio continuo
      other_practices: otra, //otro
    };

    setReproduccion([dataNew]);

    setCheckedManejoReproduct(false);
    setCheckedServicioContinuo(false);
    setCheckedTipoManejReprod('');
    setOtra('');
  };

  return (
    <View>
      <Title>Reproduccion</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentCheckBox
            title="Manejo Reproductivo"
            disabled={false}
            value={checkedManejoReproduct}
            onValueChange={(value) => setCheckedManejoReproduct(value)}
          />
          <ComponentCheckBox
            title="Servicio Continuo"
            disabled={false}
            value={checkedServicioContinuo}
            onValueChange={(value) => setCheckedServicioContinuo(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Caption style={{color: '#0079BF'}}>
          Tipo de Manejo Reproductivo
        </Caption>
      </View>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentRadioButton
            title="Servicios Continuos"
            value="servicios continuos"
            onPress={() => setCheckedTipoManejReprod('servicios continuos')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Inseminaciòn Artificial"
            value="inseminacion artificial"
            onPress={() => setCheckedTipoManejReprod('inseminacion artificial')}
            color="#008577"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentRadioButton
            title="Transplante Embrionario"
            value="transplante embrionario"
            onPress={() => setCheckedTipoManejReprod('transplante embrionario')}
            color="#008577"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Otras Practicas"
            style={styles.TextInput}
            value={otra}
            onChangeText={(value) => setOtra(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addReproduccion()}>
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
