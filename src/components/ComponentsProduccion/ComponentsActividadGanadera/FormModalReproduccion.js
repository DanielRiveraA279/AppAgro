import React from 'react';
import {View, ScrollView} from 'react-native';

import {TextInput, Button, Modal, Portal, Title} from 'react-native-paper';
import ComponentContainer from '../../ComponentContainer';
import ComponentContainerGlobal from '../../ComponentContainerGlobal';
import ComponentCheckBox from '../../CheckBox';
import styles from '../../../assets/styles/components/Modals';

const FormModal = ({reproduccion, setReproduccion}) => {
  const [checkedManejoReproduct, setCheckedManejoReproduct] = React.useState(
    false,
  );
  const [checkedServicioContinuo, setCheckedServicioContinuo] = React.useState(
    false,
  );
  const [checkedServCorral, setCheckedServCorral] = React.useState(false);
  const [checkedInseminArtif, setCheckedInseminArtif] = React.useState(false);
  const [
    checkedTransplEmbrionario,
    setCheckedTransplEmbrionario,
  ] = React.useState(false);
  const [otra, setOtra] = React.useState('');

  const addReproduccion = () => {
    const dataNew = {
      make_reproductive_management: checkedManejoReproduct,
      make_continuous_service: checkedServicioContinuo,
      make_corral_service: checkedServCorral,
      make_artificial_insemination: checkedInseminArtif,
      make_embryo_transplant: checkedTransplEmbrionario,
      other_practices: otra,
    };

    
    setReproduccion([dataNew]);
    
    setCheckedManejoReproduct(false);
    setCheckedServicioContinuo(false);
    setCheckedServCorral(false);
    setCheckedInseminArtif(false);
    setCheckedTransplEmbrionario(false);
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
              <ComponentCheckBox
                title="Servicio al Corral"
                disabled={false}
                value={checkedServCorral}
                onValueChange={(value) => setCheckedServCorral(value)}
              />
              <ComponentCheckBox
                title="Inseminacion Artificial"
                disabled={false}
                value={checkedInseminArtif}
                onValueChange={(value) => setCheckedInseminArtif(value)}
              />
            </ComponentContainer>
          </ComponentContainerGlobal>

          <ComponentContainerGlobal>
            <ComponentContainer>
              <ComponentCheckBox
                title="Transplante Embrionario"
                disabled={false}
                value={checkedTransplEmbrionario}
                onValueChange={(value) => setCheckedTransplEmbrionario(value)}
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
                mode="text"
                color="#008080"
                style={styles.SectionRight__button}
                onPress={() => addReproduccion()}>
                Guardar
              </Button>
              <Button
                mode="text"
                color="#008080"
                style={styles.SectionRight__button}>
                Cancelar
              </Button>
            </ComponentContainer>
          </ComponentContainerGlobal>
        </View>
   
  );
};

export default FormModal;
