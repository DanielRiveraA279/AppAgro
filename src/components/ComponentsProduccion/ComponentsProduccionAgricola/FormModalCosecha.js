import React from 'react';
import {View, ScrollView} from 'react-native';

import {
  TextInput,
  Button,
  Title,
  Caption,
} from 'react-native-paper';

import ComponentContainer from '../../ComponentContainer';
import ComponentContainerGlobal from '../../ComponentContainerGlobal';

import ComponentCheckBox from '../../CheckBox';
import styles from '../../../assets/styles/components/Modals';

const FormModal = ({cosecha, setCosecha}) => {
  const [superficie, setSuperficie] = React.useState('');
  const [rendimiento, setRemdimiento] = React.useState('');
  const [epoca, setEpoca] = React.useState('');

  //canal de ventas
  const [checkedAcopiador, setCheckedAcopiador] = React.useState(false);
  const [checkedCooperativa, setCheckedCooperativa] = React.useState(false);
  const [checkedExportacion, setCheckedExportacion] = React.useState(false);
  const [checkedEmpacadora, setCheckedEmpacadora] = React.useState(false);
  const [checkedFeria, setCheckedFeria] = React.useState(false);
  const [checkedIndustria, setCheckedIndustria] = React.useState(false);
  const [checkedFrigorifico, setCheckedFrigorifico] = React.useState(false);
  const [checkedVentDirect, setCheckedVentDirec] = React.useState(false);

  const addAgriculturalHarvest = () => {
    //ventas
    const dataNewSale = {
      is_collector: checkedAcopiador,
      make_direct_sale: checkedVentDirect,
      is_cooperative: checkedCooperativa,
      is_exporter: checkedExportacion,
      use_baler: checkedEmpacadora,
      use_fair: checkedFeria,
      use_industry: checkedIndustria,
      use_fridge: checkedFrigorifico,
    };

    //cosechas
    const dataNew = {
      harvest_surface: superficie,
      tons_production: rendimiento,
      harvest_time: epoca,
      agricultural_sales_channel: dataNewSale,
    };

    const dataOld = [];

    if (Object.keys(cosecha).length !== 0) {
      cosecha.map((item) => {
        dataOld.push(item);
      });
      setCosecha([...dataOld, dataNew]);
    } else {
      setCosecha([dataNew]);
    }

    setSuperficie('');
    setRemdimiento('');
    setEpoca('');
    setCheckedAcopiador(false);
    setCheckedCooperativa(false);
    setCheckedExportacion(false);
    setCheckedEmpacadora(false);
    setCheckedFeria(false);
    setCheckedIndustria(false);
    setCheckedFrigorifico(false);
  };

  return (
    <View style={styles.container}>
      <Title>Epoca de Cosechas</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Superficie en Héctareas"
            style={styles.TextInput}
            value={superficie}
            onChangeText={(value) => setSuperficie(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Rendimiento en Toneladas"
            style={styles.TextInput}
            value={rendimiento}
            onChangeText={(value) => setRemdimiento(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Epoca de Cosecha"
            style={styles.TextInput}
            value={epoca}
            onChangeText={(value) => setEpoca(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Caption style={{color: '#0079BF'}}>Canal de Ventas</Caption>
      </View>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentCheckBox
            title="Acopiador"
            disabled={false}
            value={checkedAcopiador}
            onValueChange={(value) => setCheckedAcopiador(value)}
          />
          <ComponentCheckBox
            title="Cooperativa"
            disabled={false}
            value={checkedCooperativa}
            onValueChange={(value) => setCheckedCooperativa(value)}
          />
          <ComponentCheckBox
            title="Exportación"
            disabled={false}
            value={checkedExportacion}
            onValueChange={(value) => setCheckedExportacion(value)}
          />
          <ComponentCheckBox
            title="Empacadora"
            disabled={false}
            value={checkedEmpacadora}
            onValueChange={(value) => setCheckedEmpacadora(value)}
          />
          <ComponentCheckBox
            title="Por Feria"
            disabled={false}
            value={checkedFeria}
            onValueChange={(value) => setCheckedFeria(value)}
          />
          <ComponentCheckBox
            title="Industria"
            disabled={false}
            value={checkedIndustria}
            onValueChange={(value) => setCheckedIndustria(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentCheckBox
            title="Frigorifico"
            disabled={false}
            value={checkedFrigorifico}
            onValueChange={(value) => setCheckedFrigorifico(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <ComponentCheckBox
            title="Directa"
            disabled={false}
            value={checkedVentDirect}
            onValueChange={(value) => setCheckedVentDirec(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <Button
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addAgriculturalHarvest()}>
            Guardar
          </Button>
        </ComponentContainer>
      </ComponentContainerGlobal>
    </View>
  );
};

export default FormModal;
