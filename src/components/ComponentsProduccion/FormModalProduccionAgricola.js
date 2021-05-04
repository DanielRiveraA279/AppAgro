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

  const [actividad, setActividad] = React.useState('');
  const [ancho, setAncho] = React.useState('');
  const [largo, setLargo] = React.useState('');
  const [medida, setMedida] = React.useState('Seleccione una unidad de longitud');
  const [edad, setEdad] = React.useState('');
  const [tiempo, setTiempo] = React.useState('');
  const [cierrePerim, setCierrePerim] = React.useState('');
  const [distanciaPlanta, setDistanciaPlanta] = React.useState('');
  const [distanciaHilera, setDistanciaHilera] = React.useState('');
  const [sugerencias, setSugerencias] = React.useState('');
  const [variedad, setVariedad] = React.useState('');

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

  const itemDeleteCosecha = (value) => {
    setCosecha(cosecha.filter((item) => item !== value));
  };

  const itemDeleteClima = (value) => {
    setClima(clima.filter((item) => item !== value));
  };

  const tituloMedia = (medida) => {
    if (medida === "0") {
      return "Metros"
    }else if (medida === "1"){
      return "Decametros"
    }else if (medida === "2"){
      return "Hectometros"
    }else if (medida === "3"){
      return "Kilometros"
    }else {
      return "Seleccione una Unidad de Medida"
    }
  };

  const tituloTiempo = (tiempo) => {
    if (tiempo === "0") {
      return "Dias"
    }else if (tiempo === "1"){
      return "Meses"
    }else if (tiempo === "2"){
      return "Años"
    }else {
      return "Seleccione una Unidad de Tiempo"
    }
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

    const dataNew = {
      activity_name: actividad,
      variety: variedad,
      width: ancho,
      height: largo,
      length_unit: medida,
      destination: checkedDestino,
      sowing: checkedSiembra,
      type_sowing: checkedTipoSiembra,
      amount: edad,
      time_unit: tiempo,
      perimeter_closure: cierrePerim,
      distance_plants: distanciaPlanta,
      distance_rows: distanciaHilera,
      suggestion: sugerencias,
      agricultural_attendance: agricultural_attendance, //objetos
      agricultural_climatic: clima, //array
      agricultural_pests: plaga, //array
      agricultural_harvest: cosecha,
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
                  label="Tipo de Cultivo"
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
                  label="Variedad"
                  style={styles.TextInput}
                  value={variedad}
                  onChangeText={(value) => setVariedad(value)}
                />
              </ComponentContainer>
            </ComponentContainerGlobal>

            <View style={{
            flex: 1, 
            flexDirection: 'row', 
            marginTop: 10, 
            marginLeft: 5, 
            marginBottom: 10
            }}>
              <Caption style={{color: '#0079BF', fontSize: 16}}>Dimensiones de la Zona</Caption>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
              >
                <List.Accordion
                title= {tituloMedia(medida)} 
                left={(props) => <List.Icon {...props} icon="equal" />}
                >
                  <List.Item
                    title="Metros"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => setMedida('0')}
                  />
                  <List.Item
                    title="Decametros"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => setMedida('1')}
                  />
                  <List.Item
                    title="Hectometros"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => setMedida('2')}
                  />
                  <List.Item
                    title="Kilometros"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => setMedida('3')}
                  />

                </List.Accordion>
              </View>
            </View>

            <ComponentContainer>
              <TextInput
                mode="outlined"
                label="Ancho"
                style={styles.TextInput}
                value={ancho}
                onChangeText={(value) => setAncho(value)}
              />
            </ComponentContainer>

            <ComponentContainer>
              <TextInput
                mode="outlined"
                label="Largo"
                style={styles.TextInput}
                value={largo}
                onChangeText={(value) => setLargo(value)}
              />
             </ComponentContainer>

            <View
              style={{
                flex: 1, 
                flexDirection: 'row', 
                marginTop: 10, 
                marginLeft: 5, 
                marginBottom: 10
                }}
                >
              <Caption style={{color: '#0079BF', fontSize: 16}}>Destino</Caption>
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
              style={{
                flex: 1, 
                flexDirection: 'row', 
                marginTop: 10, 
                marginLeft: 5, 
                marginBottom: 10
                }}>
              <Caption style={{color: '#0079BF', fontSize:16}}>Siembra</Caption>
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
              style={{
                flex: 1, 
                flexDirection: 'row', 
                marginTop: 10, 
                marginLeft: 5, 
                marginBottom: 10
                }}>
              <Caption style={{color: '#0079BF', fontSize: 16}}>Tipo de Siembra</Caption>
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

            <View style={{
            flex: 1, 
            flexDirection: 'row', 
            marginTop: 10, 
            marginLeft: 5, 
            marginBottom: 10
            }}>
              <Caption style={{color: '#0079BF', fontSize: 16}}>Edad del Cultivo</Caption>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
              >
                <List.Accordion
                title= {tituloTiempo(tiempo)} 
                left={(props) => <List.Icon {...props} icon="equal" />}
                >
                  <List.Item
                    title="Dias"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => setTiempo('0')}
                  />
                  <List.Item
                    title="Meses"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => setTiempo('1')}
                  />
                  <List.Item
                    title="Años"
                    left={(props) => <List.Icon {...props} />}
                    onPress={() => setTiempo('2')}
                  />
                </List.Accordion>
              </View>
            </View>

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
                  label="Cortinas/Cierre Perimetral"
                  style={styles.TextInput}
                  value={cierrePerim}
                  onChangeText={(value) => setCierrePerim(value)}
                />
              </ComponentContainer>
            </ComponentContainerGlobal>

            <ComponentContainerGlobal>
              <ComponentContainer>
                <TextInput
                  mode="outlined"
                  label="Distancia Entre Plantas en Metros"
                  style={styles.TextInput}
                  value={distanciaPlanta}
                  onChangeText={(value) => setDistanciaPlanta(value)}
                />
              </ComponentContainer>
            </ComponentContainerGlobal>

            <ComponentContainerGlobal>
              <ComponentContainer>
                <TextInput
                  mode="outlined"
                  label="Distancia Entre Hileras en Metros"
                  style={styles.TextInput}
                  value={distanciaHilera}
                  onChangeText={(value) => setDistanciaHilera(value)}
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

            <ComponentContainerGlobal>
              <ComponentContainer>
                <Button
                  color="#0079BF"
                  mode="outlined"
                  onPress={() => guardar()}
                  style={styles.SectionRight__button}>
                  Agregar
                </Button>
                <Button
                  color="#0079BF"
                  mode="outlined"
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
