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
import styles from '../../../assets/styles/components/Modals';

const FormModal = ({acuicultura, setAcuicultura}) => {
  const [checkedOrientacion, setCheckedOrientacion] = React.useState('');
  const [checkExistencia, setCheckExistencia] = React.useState('');

  const addAcuicultura = () => {
    const dataNew = {
      orientation: checkedOrientacion,
      existence: checkExistencia,
    };

    setAcuicultura([dataNew]);

    setCheckedOrientacion('');
    setCheckExistencia('');
  };

  return (
    <View>
      <Title>Ciclo Acuicultura</Title>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Caption>Orientacion</Caption>
      </View>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentRadioButton
            title="Completo"
            value="completo"
            status={checkedOrientacion === 'completo' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrientacion('completo')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Engorde"
            value="engorde"
            status={checkedOrientacion === 'engorde' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrientacion('engorde')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Cria de Alevinos/Juveniles"
            value="cria alevinos/juveniles"
            status={
              checkedOrientacion === 'cria alevinos/juveniles'
                ? 'checked'
                : 'unchecked'
            }
            onPress={() => setCheckedOrientacion('cria alevinos/juveniles')}
            color="#008577"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Caption>Existencia</Caption>
      </View>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentRadioButton
            title="Pacu"
            value="pacu"
            status={checkExistencia === 'pacu' ? 'checked' : 'unchecked'}
            onPress={() => setCheckExistencia('pacu')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Carpas"
            value="carpas"
            status={checkExistencia === 'carpas' ? 'checked' : 'unchecked'}
            onPress={() => setCheckExistencia('carpas')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Tilapia"
            value="tilapia"
            status={checkExistencia === 'tilapia' ? 'checked' : 'unchecked'}
            onPress={() => setCheckExistencia('tilapia')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Sabalo"
            value="sabalo"
            status={checkExistencia === 'sabalo' ? 'checked' : 'unchecked'}
            onPress={() => setCheckExistencia('sabalo')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Trucha"
            value="trucha"
            status={checkExistencia === 'trucha' ? 'checked' : 'unchecked'}
            onPress={() => setCheckExistencia('trucha')}
            color="#008577"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            mode="text"
            color="#008080"
            style={styles.SectionRight__button}
            onPress={() => addAcuicultura()}>
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
