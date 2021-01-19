import React, {useEffect} from 'react';

import {View, ScrollView} from 'react-native';
import {
  TextInput,
  Button,
  Title,
  Caption,
  List,
  Provider,
  Modal,
  Portal,
  Colors,
} from 'react-native-paper';

import FormCultural from './ComponentsProduccionAgricola/FormModalLaborCultural';
import FormPlaga from './ComponentsProduccionAgricola/FormModalPlaga';
import FormClima from './ComponentsProduccionAgricola/FormModalClima';
import FormCosecha from './ComponentsProduccionAgricola/FormModalCosecha';
import FormVenta from './ComponentsProduccionAgricola/FormModalVenta';

import ComponentContainer from '../ComponentContainer';
import ComponentContainerGlobal from '../ComponentContainerGlobal';
import ComponentRadioButton from '../RadioButton';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({
  visibleProdAgricola,
  hideModalProdAgricola,
  prodAgricola,
  setProdAgricola,
}) => {
  const [checkedDestino, setCheckedDestino] = React.useState('');
  const [checkedTipoSiembra, setCheckedTipoSiembra] = React.useState('');
  const [checkedSiembra, setCheckedSiembra] = React.useState('');

  const [cultural, setCultural] = React.useState([]);
  const [plaga, setPlaga] = React.useState([]);
  const [clima, setClima] = React.useState([]);
  const [cosecha, setCosecha] = React.useState([]);
  const [venta, setVenta] = React.useState([]);

  const [actividad, setActividad] = React.useState('');
  const [superficie, setSuperficie] = React.useState('');
  const [edad, setEdad] = React.useState('');
  const [problemas, setProblemas] = React.useState('');
  const [sugerencias, setSugerencias] = React.useState('');

  useEffect(() => {
    // const {production} = producer;
    // if (Object.keys(production.agricultural).length !== 0) {
    //   const {production} = producer;
    //   setActividad(production.agricultural.activity_name);
    //   setSuperficie(production.agricultural.surface);
    //   setCheckedDestino(production.agricultural.destination);
    //   setCheckedSiembra(production.agricultural.sowing);
    //   setCheckedTipoSiembra(production.agricultural.type_sowing);
    //   setEdad(production.agricultural.age);
    //   setProblemas(production.agricultural.problems);
    //   setSugerencias(production.agricultural.suggestion);
    //   setCultural(production.agricultural.agricultural_attendance);
    //   setClima(production.agricultural.agricultural_climatic);
    //   setPlaga(production.agricultural.agricultural_pests);
    //   setVenta(production.agricultural.agricultural_sales_channel);
    //   setCosecha(production.agricultural.agricultural_harvest);
    // }
  }, []);

  const itemDeleteCultural = (value) => {
    setCultural(cultural.filter((item) => item !== value));
  };

  const itemDeletePlaga = (value) => {
    setPlaga(plaga.filter((item) => item !== value));
  };

  const itemDeleteVenta = (value) => {
    setVenta(venta.filter((item) => item !== value));
  };

  const itemDeleteCosecha = (value) => {
    setCosecha(cosecha.filter((item) => item !== value));
  };

  const itemDeleteClima = (value) => {
    setClima(clima.filter((item) => item !== value));
  };

  //accion del boton
  const guardar = () => {
    if (Object.keys(cultural).length === 0) {
      var agricultural_attendance = {
        use_fertilizers: false,
        use_food_organic: false,
        use_pheromones: false,
        use_hail_mesh: false,
        make_frost_control: false,
        other_practices: '',
      };
    } else {
      var {0: agricultural_attendance} = Object.values(cultural);
    }

    if (Object.keys(venta).length === 0) {
      var agricultural_sales_channel = {
        is_collector: false,
        is_cooperative: false,
        is_exporter: false,
        use_baler: false,
        use_fair: false,
        use_industry: false,
        use_fridge: false,
      };
    } else {
      var {0: agricultural_sales_channel} = Object.values(venta);
    }

    if (Object.keys(cosecha).length === 0) {
      var agricultural_harvest = {
        harvest_surface: 0,
        tons_production: 0,
        has_curtains_insulated: false,
        plant_length_curtains: 0,
        plant_species_curtains: '',
        harvest_time: '',
      };
    } else {
      var {0: agricultural_harvest} = Object.values(cosecha);
    }

   const dataNew = {
      activity_name: actividad,
      surface: superficie,
      destination: checkedDestino,
      sowing: checkedSiembra,
      type_sowing: checkedTipoSiembra,
      age: edad,
      problems: problemas,
      suggestion: sugerencias,
      agricultural_attendance: agricultural_attendance, //objetos
      agricultural_climatic: clima, //array
      agricultural_pests: plaga, //array
      agricultural_sales_channel: agricultural_sales_channel,
      agricultural_harvest: agricultural_harvest,
    };
    const dataOld = [];

    if (Object.keys(prodAgricola).length !== 0) {
      prodAgricola.map((item) => {
        dataOld.push(item);
      });
      setProdAgricola([...dataOld, dataNew]);
    } else {
      setProdAgricola([dataNew]);
    }
  };

  return (
    <Portal>
      <Modal
        animationType="slide"
        visible={visibleProdAgricola}
        onDismiss={hideModalProdAgricola}
        contentContainerStyle={styles.container}>
        <ScrollView>
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <Title style={styles.header_title}>Produccion Agricola</Title>
            </View>
            <ComponentContainerGlobal>
              <ComponentContainer>
                <TextInput
                  mode="outlined"
                  label="Actividad"
                  style={styles.TextInput}
                  value={actividad}
                  onChangeText={(value) => setActividad(value)}
                />
              </ComponentContainer>
            </ComponentContainerGlobal>

            <ComponentContainerGlobal>
              <ComponentContainer>
                <TextInput
                  mode="outlined"
                  label="Superficie"
                  style={styles.TextInput}
                  value={superficie}
                  onChangeText={(value) => setSuperficie(value)}
                />
              </ComponentContainer>
            </ComponentContainerGlobal>

            <View
              style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <Caption>Destino</Caption>
            </View>

            <ComponentContainerGlobal>
              <ComponentContainer>
                <ComponentRadioButton
                  title="Consumo"
                  value="consumo"
                  status={
                    checkedDestino === 'consumo' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setCheckedDestino('consumo')}
                  color="#008577"
                />
                <ComponentRadioButton
                  title="Venta"
                  value="venta"
                  status={checkedDestino === 'venta' ? 'checked' : 'unchecked'}
                  onPress={() => setCheckedDestino('venta')}
                  color="#008577"
                />

                <ComponentRadioButton
                  title="Ambos"
                  value="destino/venta"
                  status={
                    checkedDestino === 'destino/venta' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setCheckedDestino('destino/venta')}
                  color="#008577"
                />
              </ComponentContainer>
            </ComponentContainerGlobal>

            <View
              style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <Caption>Siembra</Caption>
            </View>

            <ComponentContainerGlobal>
              <ComponentContainer>
                <ComponentRadioButton
                  title="Directa"
                  value="directa"
                  status={
                    checkedSiembra === 'directa' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setCheckedSiembra('directa')}
                  color="#008577"
                />
                <ComponentRadioButton
                  title="Convencional"
                  value="convencional"
                  status={
                    checkedSiembra === 'convencional' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setCheckedSiembra('convencional')}
                  color="#008577"
                />
              </ComponentContainer>
            </ComponentContainerGlobal>

            <View
              style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <Caption>Tipo de Siembra</Caption>
            </View>

            <ComponentContainerGlobal>
              <ComponentContainer>
                <ComponentRadioButton
                  title="Perenne"
                  value="perenne"
                  status={
                    checkedTipoSiembra === 'perenne' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setCheckedTipoSiembra('perenne')}
                  color="#008577"
                />
                <ComponentRadioButton
                  title="Anual"
                  value="anual"
                  status={
                    checkedTipoSiembra === 'anual' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setCheckedTipoSiembra('anual')}
                  color="#008577"
                />
              </ComponentContainer>
            </ComponentContainerGlobal>

            <ComponentContainerGlobal>
              <ComponentContainer>
                <TextInput
                  mode="outlined"
                  label="Edad"
                  style={styles.TextInput}
                  value={edad}
                  onChangeText={(value) => setEdad(value)}
                />
              </ComponentContainer>
            </ComponentContainerGlobal>

            <ComponentContainerGlobal>
              <ComponentContainer>
                <TextInput
                  mode="outlined"
                  label="Problemas"
                  style={styles.TextInput}
                  value={problemas}
                  onChangeText={(value) => setProblemas(value)}
                />
              </ComponentContainer>
            </ComponentContainerGlobal>

            <ComponentContainerGlobal>
              <ComponentContainer>
                <TextInput
                  mode="outlined"
                  label="Sugerencias"
                  style={styles.TextInput}
                  value={sugerencias}
                  onChangeText={(value) => setSugerencias(value)}
                />
              </ComponentContainer>
            </ComponentContainerGlobal>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <List.Section>
                  <List.Subheader>Labor Cultural</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormCultural
                      cultural={cultural}
                      setCultural={setCultural}
                    />
                  </List.Accordion>

                  <List.Accordion
                    title="Lista"
                    left={(props) => <List.Icon {...props} icon="equal" />}>
                    {Object.keys(cultural).length === 0
                      ? null
                      : cultural.map((item, key) => {
                          return (
                            <List.Item
                              key={key}
                              title={'Labor Culrutal?: Si'}
                              left={(props) => (
                                <List.Icon {...props} icon="delete" />
                              )}
                              onPress={() => itemDeleteCultural(item)}
                            />
                          );
                        })}
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
                  <List.Subheader>Plagas</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormPlaga plaga={plaga} setPlaga={setPlaga} />
                  </List.Accordion>

                  <List.Accordion
                    title="Plagas/Enferm./maleza"
                    left={(props) => <List.Icon {...props} icon="equal" />}>
                    {Object.keys(plaga).length === 0
                      ? null
                      : plaga.map((item, key) => {
                          return (
                            <List.Item
                              key={key}
                              title="plaga"
                              left={(props) => (
                                <List.Icon {...props} icon="delete" />
                              )}
                              onPress={() => itemDeletePlaga(item)}
                            />
                          );
                        })}
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
                  <List.Subheader>Factor Climatico</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormClima clima={clima} setClima={setClima} />
                  </List.Accordion>

                  <List.Accordion
                    title="Lista"
                    left={(props) => <List.Icon {...props} icon="equal" />}>
                    {Object.keys(clima).length === 0
                      ? null
                      : clima.map((item, key) => {
                          return (
                            <List.Item
                              key={key}
                              title={'Factor: ' + item.factor}
                              left={(props) => (
                                <List.Icon {...props} icon="delete" />
                              )}
                              onPress={() => itemDeleteClima(item)}
                            />
                          );
                        })}
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
                  <List.Subheader>Cosecha</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormCosecha cosecha={cosecha} setCosecha={setCosecha} />
                  </List.Accordion>

                  <List.Accordion
                    title="Lista"
                    left={(props) => <List.Icon {...props} icon="equal" />}>
                    {Object.keys(cosecha).length === 0
                      ? null
                      : cosecha.map((item, key) => {
                          return (
                            <List.Item
                              key={key}
                              title={'Superficie: ' + item.harvest_surface}
                              left={(props) => (
                                <List.Icon {...props} icon="delete" />
                              )}
                              onPress={() => itemDeleteCosecha(item)}
                            />
                          );
                        })}
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
                  <List.Subheader>Canal de Ventas</List.Subheader>

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

                  <List.Accordion
                    title="Lista"
                    left={(props) => <List.Icon {...props} icon="equal" />}>
                    {Object.keys(venta).length === 0
                      ? null
                      : venta.map((item, key) => {
                          return (
                            <List.Item
                              key={key}
                              title={
                                item.is_exporter
                                  ? 'Exportacion: Si'
                                  : 'Exportacion: No'
                              }
                              left={(props) => (
                                <List.Icon {...props} icon="delete" />
                              )}
                              onPress={() => itemDeleteVenta(item)}
                            />
                          );
                        })}
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <ComponentContainerGlobal>
              <ComponentContainer>
                <Button
                  mode="outlined"
                  color="#008080"
                  onPress={() => guardar()}
                  style={styles.SectionRight__button}>
                  Agregar
                </Button>
                <Button
                  mode="outlined"
                  color="#008080"
                  onPress={hideModalProdAgricola}
                  style={styles.SectionRight__button}>
                  Cancelar
                </Button>
              </ComponentContainer>
            </ComponentContainerGlobal>
          </View>
        </ScrollView>
      </Modal>
    </Portal>
  );
};

export default FormModal;
