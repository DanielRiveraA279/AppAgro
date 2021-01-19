import React, {useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {
  TextInput,
  Button,
  Paragraph,
  Title,
  Caption,
  List,
  Provider,
  Chip,
  Card,
  ActivityIndicator,
  Colors,
  Modal,
  Portal,
} from 'react-native-paper';

import FormSandiad from './ComponentsActividadGanadera/FormModalSanidad';
import FormReproduccion from './ComponentsActividadGanadera/FormModalReproduccion';
import FormComercializacion from './ComponentsActividadGanadera/FormModalComercio';
import FormVenta from './ComponentsActividadGanadera/FormModalCanalVenta';
import FormBovino from './ComponentsActividadGanadera/FormModalCicloBovino';
import FormOvino from './ComponentsActividadGanadera/FormModalCicloOvino';
import FormCaprino from './ComponentsActividadGanadera/FormModalCicloCaprino';
import FormPorcino from './ComponentsActividadGanadera/FormModalCicloPorcino';
import FormLlama from './ComponentsActividadGanadera/FormModalCicloLlama';
import FormAvicultura from './ComponentsActividadGanadera/FormCicloAvicultura';
import FormCunicultura from './ComponentsActividadGanadera/FormModalCunicultura';
import FormApicultura from './ComponentsActividadGanadera/FormModalApicultura';
import FormAcuicultura from './ComponentsActividadGanadera/FormModalAcuicultura';
import FormCorral from './ComponentsActividadGanadera/FormModalCorral';
import FormAlimentacion from './ComponentsActividadGanadera/FormModalTipoAlimentacion';

import ComponentContainer from '../ComponentContainer';
import ComponentContainerGlobal from '../ComponentContainerGlobal';
import ComponentCheckBox from '../CheckBox';
import MessageError from '../MessageError';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({
  visibleActGanadera,
  hideModalActGanadera,
  actGanadera,
  setActGanadera,
}) => {
  //DIMENSIONS
  const CARD_WIDTH = Dimensions.get('window').width * 0.8;

  const [checkedAsesoramiento, setCheckedAsesoramiento] = React.useState(false);

  const [sanidad, setSanidad] = React.useState([]);
  const [reproduccion, setReproduccion] = React.useState([]);
  const [comercializacion, setComercializacion] = React.useState([]);
  const [venta, setVenta] = React.useState([]);
  const [bovino, setBovino] = React.useState([]);
  const [ovino, setOvino] = React.useState([]);
  const [caprino, setCaprino] = React.useState([]);
  const [porcino, setPorcino] = React.useState([]);
  const [llama, setLlama] = React.useState([]);
  const [avicultura, setAvicultura] = React.useState([]);
  const [cunicultura, setCunicultura] = React.useState([]);
  const [apicultura, setApicultura] = React.useState([]);
  const [acuicultura, setAcuicultura] = React.useState([]);

  const [corral, setCorral] = React.useState([]);
  const [alimentacion, setAlimentacion] = React.useState([]);

  const [visibleTipoAlimentacion, setVisibleTipoAlimentacion] = React.useState(
    false,
  );
  const showModalTipoAlimentacion = () => setVisibleTipoAlimentacion(true);
  const hideModalTipoAlimentacion = () => setVisibleTipoAlimentacion(false);
  const [selectCiclo, setSelectCiclo] = React.useState('');
  const [superficie, setSuperficie] = React.useState('');
  const [destino, setDestino] = React.useState('');
  const [problema, setProblema] = React.useState('');
  const [sugerencia, setSugerencia] = React.useState('');
  const [dataActGanadera, setDataActGanadera] = React.useState([]);

  useEffect(() => {
    // if (Object.keys(producer.production_livestock).length !== 0) {
    //   seteoComponente();
    // }
  }, []);

  const seteoComponente = () => {
    const {production_livestock} = producer;
    setDataActGanadera(production_livestock);
  };

  const showAlertError = () => {
    MessageError('Datos Faltantes', 'Existe campo/s vacio/s');
  };

  const backStep = () => {
    if (currentPosition === 7) {
      setCurrentPosition(currentPosition - 1);
    } else {
      setCurrentPosition(7);
    }
  };

  const guardar = () => {
    //update
    setActGanadera(dataActGanadera);
  };

  const itemDeleteActGanad = (value) => {
    setDataActGanadera(dataActGanadera.filter((item) => item !== value));
  };

  const addActGan = () => {
    if (selectCiclo.trim() === '') {
      showAlertError();
    } else {
      if (Object.keys(reproduccion).length === 0) {
        //reproduccion
        var livestock_reproduction = {
          make_reproductive_management: false,
          make_continuous_service: false,
          make_corral_service: false,
          make_artificial_insemination: false,
          make_embryo_transplant: false,
          other_practices: '',
        };
      } else {
        var {0: livestock_reproduction} = Object.assign({}, reproduccion);
      }

      if (Object.keys(sanidad).length === 0) {
        //sanidad
        var livestock_health = {
          type_technical_assistance: '',
          vitamin_complex: '',
          make_internal_deworming: false,
          make_external_deworming: false,
          type_antiparasitic: '',
          make_vaccination: false,
          type_vaccination: '',
          type_disease: '',
          name_disease: '',
          other_practices: '',
        };
      } else {
        var {0: livestock_health} = Object.assign({}, sanidad);
      }

      if (Object.keys(comercializacion).length === 0) {
        //comercializacion
        var livestock_marketing = {
          number_slaughtered: 0,
          number_shorn: 0,
          amount_wool_hair: 0,
          amount_leather: 0,
          liters_milk: 0,
          milk_destination: '',
          wool_hair_destination: '',
          leather_destination: '',
          slaughter_destination: '',
        };
      } else {
        var {0: livestock_marketing} = Object.assign({}, comercializacion);
      }

      if (Object.keys(venta).length === 0) {
        //venta
        var livestock_sales_channel = {
          is_collector: false,
          is_cooperative: false,
          is_exporter: false,
          use_baler: false,
          use_fair: false,
          use_industry: false,
          use_fridge: false,
        };
      } else {
        var {0: livestock_sales_channel} = Object.assign({}, venta);
      }

      if (Object.keys(bovino).length === 0) {
        //bovino
        var livestock_bovine_cycle = {
          calves_under_one_year: 0,
          heifers_one_to_two_years: 0,
          heifers_over_two_years: 0,
          number_cows: 0,
          steers_one_to_two_years: 0,
          steers_older_two_years: 0,
          bulls_one_to_two_years: 0,
          bulls_older_two_years: 0,
          number_oxen_torunos: 0,
        };
      } else {
        var {0: livestock_bovine_cycle} = Object.assign({}, bovino);
      }

      if (Object.keys(ovino).length === 0) {
        //ovino
        var livestock_sheep_cycle = {
          sheep_under_six_months: 0,
          sheep_older_six_months_to_calving: 0,
          sheep_older_six_months_one_year: 0,
          number_sheep: 0,
          number_capons: 0,
          number_rams: 0,
        };
      } else {
        var {0: livestock_sheep_cycle} = Object.assign({}, ovino);
      }

      if (Object.keys(caprino).length === 0) {
        //caprino
        var livestock_goat_cycle = {
          goats_under_six_months: 0,
          goats_six_months_to_first_calving: 0,
          number_goats: 0,
          number_capons: 0,
          number_stallions: 0,
        };
      } else {
        var {0: livestock_goat_cycle} = Object.assign({}, caprino);
      }

      if (Object.keys(porcino).length === 0) {
        //porcino
        var livestock_pig_cycle = {
          up_two_months: 0,
          older_two_months: 0,
          less_four_months: 0,
          older_four_months: 0,
          number_pigs: 0,
          number_stallions: 0,
        };
      } else {
        var {0: livestock_pig_cycle} = Object.assign({}, porcino);
      }

      if (Object.keys(llama).length === 0) {
        //llama
        var livestock_llama_cycle = {
          number_chitas_teques: 0,
          number_maltones: 0,
          number_janachos: 0,
          number_llamas_mothers: 0,
          number_capons: 0,
        };
      } else {
        var {0: livestock_llama_cycle} = Object.assign({}, llama);
      }

      if (Object.keys(avicultura).length === 0) {
        //avicultura
        var livestock_poultry_cycle = {
          is_intensive_poultry: false,
          number_broilers_incubated: 0,
          breeding_males: 0,
          number_eggs_chickens_babies: 0,
          number_incubators: 0,
          number_broilers_fattening: 0,
          number_breeding_layers: 0,
          existence: '',
        };
      } else {
        var {0: livestock_poultry_cycle} = Object.assign({}, avicultura);
      }

      if (Object.keys(cunicultura).length === 0) {
        //cunicultura
        var livestock_rabbit_cycle = {
          orientation: '',
          number_breeding_males: 0,
          number_breeding_females: 0,
          number_rabbit: 0,
        };
      } else {
        var {0: livestock_rabbit_cycle} = Object.assign({}, cunicultura);
      }

      if (Object.keys(apicultura).length === 0) {
        //avicultura
        var livestock_beekeeping_cycle = {
          kind_bee: '',
          has_bee_hives: false,
          type_bee_hives: '',
          number_drawers: 0,
          alsas_drawer: 0,
          type_drawer: '',
          honey_stones: 0,
          pollination_period: '',
          pollinated_flower: '',
          has_renapa: false,
        };
      } else {
        var {0: livestock_beekeeping_cycle} = Object.assign({}, apicultura);
      }

      if (Object.keys(acuicultura).length === 0) {
        //acuicultura
        var livestock_aquaculture_cycle = {
          orientation: '',
          existence: '',
        };
      } else {
        var {0: livestock_aquaculture_cycle} = Object.assign({}, acuicultura);
      }
      //---------------------------------------------------------------------
      const dataNew = {
        type_activity: selectCiclo,
        surface: superficie,
        destination: destino,
        make_technical_assistance: checkedAsesoramiento,
        problems: problema,
        suggestion: sugerencia,
        livestock_animal_feeding: alimentacion,
        livestock_reproduction: livestock_reproduction, //objeto
        livestock_animal_pens: corral,
        livestock_health: livestock_health, //objeto
        livestock_marketing: livestock_marketing, //objeto
        livestock_sales_channel: livestock_sales_channel, //objeto
        livestock_bovine_cycle: livestock_bovine_cycle, //objeto
        livestock_sheep_cycle: livestock_sheep_cycle, //objeto
        livestock_goat_cycle: livestock_goat_cycle, //objeto
        livestock_pig_cycle: livestock_pig_cycle, //objeto
        livestock_llama_cycle: livestock_llama_cycle, //objeto
        livestock_poultry_cycle: livestock_poultry_cycle, //objeto
        livestock_rabbit_cycle: livestock_rabbit_cycle, //objeto
        livestock_beekeeping_cycle: livestock_beekeeping_cycle, //objeto
        livestock_aquaculture_cycle: livestock_aquaculture_cycle, //objeto
      };

      if (Object.keys(dataActGanadera).length !== 0) {
        setDataActGanadera([...dataActGanadera, dataNew]);
      } else {
        setDataActGanadera([dataNew]);
      }

      setSelectCiclo('');
      setSuperficie('');
      setDestino('');
      setCheckedAsesoramiento(false);
      setProblema('');
      setSugerencia('');

      setAlimentacion([]);
      setReproduccion([]);
      setCorral([]);
      setSanidad([]);
      setComercializacion([]);
      setVenta([]);
      setBovino([]);
      setOvino([]);
      setCaprino([]);
      setPorcino([]);
      setLlama([]);
      setAvicultura([]);
      setCunicultura([]);
      setApicultura([]);
      setAcuicultura([]);
    }
  };

  const cancelar = () => {
    setSelectCiclo('');
    setSuperficie('');
    setDestino('');
    setCheckedAsesoramiento(false);
    setProblema('');
    setSugerencia('');

    setAlimentacion([]);
    setReproduccion([]);
    setCorral([]);
    setSanidad([]);
    setComercializacion([]);
    setVenta([]);
    setBovino([]);
    setOvino([]);
    setCaprino([]);
    setPorcino([]);
    setLlama([]);
    setAvicultura([]);
    setCunicultura([]);
    setApicultura([]);
    setAcuicultura([]);
    
  };

  return (
    <Portal>
      <Modal
        animationType="slide"
        visible={visibleActGanadera}
        onDismiss={hideModalActGanadera}
        contentContainerStyle={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <Title style={styles.header_title}>Actividad Ganadera</Title>

            <ComponentContainer>
              <Chip
                icon="check"
                onPress={() => setSelectCiclo('bovino')}
                selected={selectCiclo.trim() === 'bovino' ? true : false}>
                Bovino
              </Chip>
              <Chip
                icon="check"
                onPress={() => setSelectCiclo('ovino')}
                selected={selectCiclo.trim() === 'ovino' ? true : false}>
                Ovino
              </Chip>
              <Chip
                icon="check"
                onPress={() => setSelectCiclo('caprino')}
                selected={selectCiclo.trim() === 'caprino' ? true : false}>
                Caprino
              </Chip>
              <Chip
                icon="check"
                onPress={() => setSelectCiclo('porcino')}
                selected={selectCiclo.trim() === 'porcino' ? true : false}>
                Porcino
              </Chip>
              <Chip
                icon="check"
                onPress={() => setSelectCiclo('llamas')}
                selected={selectCiclo.trim() === 'llamas' ? true : false}>
                Llamas
              </Chip>
              <Chip
                icon="check"
                onPress={() => setSelectCiclo('avicultura')}
                selected={selectCiclo.trim() === 'avicultura' ? true : false}>
                Avicultura
              </Chip>
              <Chip
                icon="check"
                onPress={() => setSelectCiclo('cunicultura')}
                selected={selectCiclo.trim() === 'cunicultura' ? true : false}>
                Cunicultura
              </Chip>
            </ComponentContainer>

            <ComponentContainer>
              <Chip
                icon="check"
                onPress={() => setSelectCiclo('apicultura')}
                selected={selectCiclo.trim() === 'apicultura' ? true : false}>
                Apicultura
              </Chip>
              <Chip
                icon="check"
                onPress={() => setSelectCiclo('acuicultura')}
                selected={selectCiclo.trim() === 'acuicultura' ? true : false}>
                Acuicultura
              </Chip>
            </ComponentContainer>

            <ComponentContainer>
              <TextInput
                mode="outlined"
                label="Superficie Actividad"
                style={styles.TextInput}
                value={superficie}
                onChangeText={(value) => setSuperficie(value)}
              />
            </ComponentContainer>

            <View
              style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}>
                  <List.Accordion
                    title={
                      destino.trim() === '' ? 'Seleccione un Destino' : destino
                    }
                    left={(props) => <List.Icon {...props} icon="equal" />}>
                    <List.Item
                      title="Consumo"
                      onPress={() => setDestino('consumo')}
                    />
                    <List.Item
                      title="Trueque"
                      onPress={() => setDestino('trueque')}
                    />
                    <List.Item
                      title="Venta"
                      onPress={() => setDestino('venta')}
                    />
                  </List.Accordion>
                </View>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Caption>Acesoramiento</Caption>
              </View>
            </View>

            <ComponentContainer>
              <ComponentCheckBox
                title="Tecnico/Veterinario"
                value={checkedAsesoramiento}
                onValueChange={(value) => setCheckedAsesoramiento(value)}
              />
            </ComponentContainer>

            <ComponentContainer>
              <TextInput
                mode="outlined"
                label="Problemas"
                style={styles.TextInput}
                value={problema}
                onChangeText={(value) => setProblema(value)}
              />
            </ComponentContainer>
            <ComponentContainer>
              <TextInput
                mode="outlined"
                label="Sugerencias"
                style={styles.TextInput}
                value={sugerencia}
                onChangeText={(value) => setSugerencia(value)}
              />
            </ComponentContainer>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <List.Section>
                  <List.Subheader>Sanidad</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormSandiad sanidad={sanidad} setSanidad={setSanidad} />
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <List.Section>
                  <List.Subheader>Reproduccion</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormReproduccion
                      reproduccion={reproduccion}
                      setReproduccion={setReproduccion}
                    />
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <List.Section>
                  <List.Subheader>Comercializacion</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormComercializacion
                      comercializacion={comercializacion}
                      setComercializacion={setComercializacion}
                    />
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <List.Section>
                  <List.Subheader>Canal de Venta</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormVenta venta={venta} setVenta={setVenta} />
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <List.Section>
                  <List.Subheader>Ciclo Bovino</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormBovino bovino={bovino} setBovino={setBovino} />
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <List.Section>
                  <List.Subheader>Ciclo Ovino</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormOvino ovino={ovino} setOvino={setOvino} />
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <List.Section>
                  <List.Subheader>Ciclo Caprino</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormCaprino caprino={caprino} setCaprino={setCaprino} />
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <List.Section>
                  <List.Subheader>Ciclo Porcino</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormPorcino porcino={porcino} setPorcino={setPorcino} />
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <List.Section>
                  <List.Subheader>Ciclo Llamas</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormLlama llama={llama} setLlama={setLlama} />
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <List.Section>
                  <List.Subheader>Avicultura</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormAvicultura
                      avicultura={avicultura}
                      setAvicultura={setAvicultura}
                    />
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <List.Section>
                  <List.Subheader>Cunicultura</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormCunicultura
                      cunicultura={cunicultura}
                      setCunicultura={setCunicultura}
                    />
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <List.Section>
                  <List.Subheader>Apicultura</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormApicultura
                      apicultura={apicultura}
                      setApicultura={setApicultura}
                    />
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <List.Section>
                  <List.Subheader>Acuicultura</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormAcuicultura
                      acuicultura={acuicultura}
                      setAcuicultura={setAcuicultura}
                    />
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <List.Section>
                  <List.Subheader>Corral</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormCorral corral={corral} setCorral={setCorral} />
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <List.Section>
                  <List.Subheader>Alimentacion</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormAlimentacion
                      alimentacion={alimentacion}
                      setAlimentacion={setAlimentacion}
                    />
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <ComponentContainer>
              <Button
                mode="text"
                color="#008080"
                style={styles.SectionRight__button}
                onPress={() => addActGan()}>
                Agregar
              </Button>
              <Button
                mode="text"
                color="#008080"
                style={styles.SectionRight__button}
                onPress={() => guardar()}>
                Guardar
              </Button>
              <Button
                mode="text"
                color="#008080"
                style={styles.SectionRight__button}
                onPress={hideModalActGanadera}>
                Cancelar
              </Button>
            </ComponentContainer>

            <SafeAreaView
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <ScrollView horizontal>
                {Object.keys(dataActGanadera).length === 0
                  ? null
                  : dataActGanadera.map((item, key) => {
                      return (
                        <Card
                          key={key}
                          elevation={10}
                          style={{
                            backgroundColor: '#fff5ee',
                            width: CARD_WIDTH,
                          }}>
                          <Card.Content style={{width: CARD_WIDTH}} key={key}>
                            <Title>{item.type_activity}</Title>
                            <Paragraph>Destino: {item.destination}</Paragraph>
                            <Paragraph>
                              Asesoramiento Tecnico:{' '}
                              {item.make_technical_assistance ? 'Si' : 'No'}
                            </Paragraph>
                          </Card.Content>

                          <Card.Actions>
                            <Button
                              color="red"
                              onPress={() => itemDeleteActGanad(item)}>
                              Quitar
                            </Button>
                          </Card.Actions>
                        </Card>
                      );
                    })}
              </ScrollView>
            </SafeAreaView>
          </View>
        </ScrollView>
      </Modal>
    </Portal>
  );
};

export default FormModal;
