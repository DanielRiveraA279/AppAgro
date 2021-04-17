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

const FormModal = ({cunicultura, setCunicultura}) => {
  const [checkedOrientacion, setCheckedOrientacion] = React.useState('');
  const [reprodMach, setReprodMach] = React.useState('');
  const [reprodHembr, setReprodHembr] = React.useState('');
  const [cantGazap, setCantGazap] = React.useState('');

  const addCunicultura = () => {
    const dataNew = {
      orientation: checkedOrientacion,
      number_breeding_males: reprodMach,
      number_breeding_females: reprodHembr,
      number_rabbit: cantGazap,
    };

    setCunicultura([dataNew]);

    setCheckedOrientacion('');
    setReprodMach('');
    setReprodHembr('');
    setCantGazap('');
  };

  return (
    <View>
      <Title>Ciclos Cunicultura</Title>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Caption style={{color: '#0079BF'}}>Orientacion</Caption>
      </View>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentRadioButton
            title="Carne"
            value="carne"
            status={checkedOrientacion === 'carne' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrientacion('carne')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Pelo"
            value="pelo"
            status={checkedOrientacion === 'pelo' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrientacion('pelo')}
            color="#008577"
          />
          <ComponentRadioButton
            title="Piel"
            value="piel"
            status={checkedOrientacion === 'piel' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedOrientacion('piel')}
            color="#008577"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Reproductores Machos"
            style={styles.TextInput}
            value={reprodMach}
            onChangeText={(value) => setReprodMach(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Reproductores Hembra"
            style={styles.TextInput}
            value={reprodHembr}
            onChangeText={(value) => setReprodHembr(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad Gazapos"
            style={styles.TextInput}
            value={cantGazap}
            onChangeText={(value) => setCantGazap(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addCunicultura()}>
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
