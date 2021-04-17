import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Modal, Portal, Title, Caption} from 'react-native-paper';
import ComponentContainer from '../../ComponentContainer';
import ComponentContainerGlobal from '../../ComponentContainerGlobal';
import styles from '../../../assets/styles/components/Modals';
import ComponentCheckBox from '../../CheckBox';

const FormModal = ({
  visible,
  hideModal,
  comercializacion,
  setComercializacion,
}) => {
  const [cantFaenados, setCantFaenados] = React.useState('');
  const [cantEsquilado, setCantEsquilado] = React.useState('');
  const [cantLanaPelo, setCantLanaPelo] = React.useState('');
  const [cantPiel, setCantPiel] = React.useState('');
  const [prodLeche, setProdLeche] = React.useState('');
  const [destinoLeche, setDestinoLeche] = React.useState('');
  const [destinoLana, setDestinoLana] = React.useState('');
  const [destinoPiel, setDestinoPiel] = React.useState('');
  const [destinoFaenados, setDestinoFaenados] = React.useState('');

  const [cantHuevos, setCantHuevos] = React.useState('');
  const [destHuevos, setDestHuevos] = React.useState('');
  const [cantHeces, setCantHeces] = React.useState('');
  const [destHeces, setDestHeces] = React.useState('');

  const [rendimientoMiel, setRendimientoMiel] = React.useState('');
  const [destinoMiel, setDestinoMiel] = React.useState('');

  //canal de venta
  const [checkedAcopiador, setCheckedAcopiador] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [checkedCooperativa, setCheckedCooperativa] = React.useState(false);
  const [checkedExportacion, setCheckedExportacion] = React.useState(false);
  const [checkedEmpacadora, setCheckedEmpacadora] = React.useState(false);
  const [checkedFeria, setCheckedFeria] = React.useState(false);
  const [checkedIndustria, setCheckedIndustria] = React.useState(false);
  const [checkedFrigorifico, setCheckedFrigorifico] = React.useState(false);
  const [checkedVentDirect, setCheckedVentDirec] = React.useState(false);

  const addComercio = () => {
    const dataNewSales = {
      is_collector: checkedAcopiador,
      make_direct_sale: checkedVentDirect,
      is_cooperative: checkedCooperativa,
      is_exporter: checkedExportacion,
      use_baler: checkedEmpacadora,
      use_fair: checkedFeria,
      use_industry: checkedIndustria,
      use_fridge: checkedFrigorifico,
    };

    const dataNew = {
      number_slaughtered: cantFaenados,
      number_shorn: cantEsquilado,
      amount_wool: cantLanaPelo,
      amount_leather: cantPiel,
      liters_milk: prodLeche,
      milk_destination: destinoLeche,
      wool_destination: destinoLana,
      leather_destination: destinoPiel,
      slaughter_destination: destinoFaenados,
      number_eggs: cantHuevos,
      eggs_destination: destHuevos,
      amount_feces: cantHeces,
      feces_destination: destHeces,
      honey_yield:rendimientoMiel,
      honey_destination: destinoMiel,
      livestock_sales_channel: dataNewSales,
    };

    setComercializacion([dataNew]);

    setCantFaenados('');
    setCantEsquilado('');
    setCantLanaPelo('');
    setCantPiel('');
    setProdLeche('');
    setDestinoLeche('');
    setDestinoLana('');
    setDestinoPiel('');
    setDestinoFaenados('');
    setRendimientoMiel('');
    setDestinoMiel('');
    
    setCheckedAcopiador(false);
    setCheckedCooperativa(false);
    setCheckedExportacion(false);
    setCheckedEmpacadora(false);
    setCheckedFeria(false);
    setCheckedIndustria(false);
    setCheckedFrigorifico(false);
  };

  return (
    <View>
      <Title>Comercializacion</Title>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad Faenados"
            style={styles.TextInput}
            value={cantFaenados}
            onChangeText={(value) => setCantFaenados(value)}
            keykeyboardType="numeric"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad Esquilados"
            style={styles.TextInput}
            value={cantEsquilado}
            onChangeText={(value) => setCantEsquilado(value)}
            keyboardType="numeric"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad Lana - Pelo Obtenido"
            style={styles.TextInput}
            value={cantLanaPelo}
            onChangeText={(value) => setCantLanaPelo(value)}
            keyboardType="numeric"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Piel"
            style={styles.TextInput}
            value={cantPiel}
            onChangeText={(value) => setCantPiel(value)}
            keyboardType="numeric"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Produccion de Leche"
            style={styles.TextInput}
            value={prodLeche}
            onChangeText={(value) => setProdLeche(value)}

          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Destino de Leche"
            style={styles.TextInput}
            value={destinoLeche}
            onChangeText={(value) => setDestinoLeche(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Destino de Pelo Lana"
            style={styles.TextInput}
            value={destinoLana}
            onChangeText={(value) => setDestinoLana(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Destino de la Piel"
            style={styles.TextInput}
            value={destinoPiel}
            onChangeText={(value) => setDestinoPiel(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Destino de Faenados"
            style={styles.TextInput}
            value={destinoFaenados}
            onChangeText={(value) => setDestinoFaenados(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Huevos"
            style={styles.TextInput}
            value={cantHuevos}
            onChangeText={(value) => setCantHuevos(value)}
            keyboardType="numeric"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Destino de Huevos"
            style={styles.TextInput}
            value={destHuevos}
            onChangeText={(value) => setDestHuevos(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Cantidad de Heces"
            style={styles.TextInput}
            value={cantHeces}
            onChangeText={(value) => setCantHeces(value)}
            keyboardType="numeric"
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Destino de Heces"
            style={styles.TextInput}
            value={destHeces}
            onChangeText={(value) => setDestHeces(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Rendimiento de la Miel"
            style={styles.TextInput}
            value={rendimientoMiel}
            onChangeText={(value) => setRendimientoMiel(value)}
          />
        </ComponentContainer>
      </ComponentContainerGlobal>

      <ComponentContainerGlobal>
        <ComponentContainer>
          <TextInput
            mode="outlined"
            label="Destino de la Miel"
            style={styles.TextInput}
            value={destinoMiel}
            onChangeText={(value) => setDestinoMiel(value)}
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
                <Caption style={{color: '#0079BF'}}>Canales de Venta</Caption>
              </View>
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
            title="Exportacion"
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
          <ComponentCheckBox
            title="Industria"
            disabled={false}
            value={checkedIndustria}
            onValueChange={(value) => setCheckedIndustria(value)}
          />
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
          <Button
            color="#0079BF"
            mode="text"
            style={styles.SectionRight__button}
            onPress={() => addComercio()}>
            Guardar
          </Button>
        </ComponentContainer>
      </ComponentContainerGlobal>
    </View>
  );
};

export default FormModal;
