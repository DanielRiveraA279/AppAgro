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

import FormHerramienta from './ComponentsAgroIndustria/FormModalHerramienta';
import FormArtesanal from './ComponentsAgroIndustria/FormModalArtesanal';
import FormAlimentario from './ComponentsAgroIndustria/FormModalAlimentario';

import ComponentContainer from '../ComponentContainer';
import ComponentContainerGlobal from '../ComponentContainerGlobal';
import ComponentRadioButton from '../RadioButton';
import ComponentCheckBox from '../CheckBox';
import styles from '../../assets/styles/components/Modals';

const FormModal = ({visibleAgroindustria, hideModalAgroindustria, agroIndustria, setAgroIndustria}) => {
  const [checkedMateriaPrima, setCheckedMateriaPrima] = React.useState('');
  const [checkedMecanizada, setCheckedMecanizada] = React.useState(false);
  const [checkedConocimiento, setCheckedConocimiento] = React.useState('');
  const [descripcion, setDescripcion] = React.useState('');

  const [artesanal, setArtesanal] = React.useState([]);
  const [herramienta, setHerramienta] = React.useState([]);
  const [alimentario, setAlimentario] = React.useState([]);

  // useEffect(() => {
  //   if (Object.keys(agroIndustria).length !== 0) {
  //     seteoComponente();
  //   }
  // }, []);

  // const seteoComponente = () => {
  //   setDescripcion(agroIndustria.description);
  //   setCheckedMateriaPrima(agroIndustria.raw_material);
  //   setCheckedMecanizada(agroIndustria.is_mechanized);
  //   setCheckedConocimiento(agroIndustria.knowledge);
  //   setAlimentario(agroIndustria.agroindustrial_food_product);
  //   setArtesanal(agroIndustria.agroindustrial_handmande_product);
  //   setHerramienta(agroIndustria.agroindustrial_tools);
  // };

  const addAgroindustria = () => {
    const dataNew = {
      description: descripcion,
      raw_material: checkedMateriaPrima,
      is_mechanized: checkedMecanizada,
      knowledge: checkedConocimiento,
      agroindustrial_food_product: alimentario,
      agroindustrial_handmande_product: artesanal,
      agroindustrial_tools: herramienta,
    };

    const dataOld = [];

    if (Object.keys(agroIndustria).length !== 0) {
      agroIndustria.map((item) => {
        dataOld.push(item);
      });
      setAgroIndustria([...dataOld, dataNew]);
    } else {
      setAgroIndustria([dataNew]);
    }
  };

  const itemDeleteHerramienta = (value) => {
    setHerramienta(herramienta.filter((item) => item !== value));
  };

  const itemDeleteArtesanal = (value) => {
    setArtesanal(artesanal.filter((item) => item !== value));
  };

  const itemDeleteAlimentario = (value) => {
    setAlimentario(alimentario.filter((item) => item !== value));
  };

  return (
    <Portal>
      <Modal
        animationType="slide"
        visible={visibleAgroindustria}
        onDismiss={hideModalAgroindustria}
        contentContainerStyle={styles.container}>
        <ScrollView>
          <View style={styles.container}>
           
            <Title style={styles.header_title}>Agroindustria</Title>

            <ComponentContainerGlobal>
              <ComponentContainer>
                <TextInput
                  mode="outlined"
                  label="Descripcion"
                  style={styles.TextInput}
                  value={descripcion}
                  onChangeText={(value) => setDescripcion(value)}
                />
              </ComponentContainer>
            </ComponentContainerGlobal>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Caption>Materia Prima</Caption>
            </View>

            <ComponentContainerGlobal>
              <ComponentContainer>
                <ComponentRadioButton
                  title="Propia"
                  value="propia"
                  status={
                    checkedMateriaPrima === 'propia' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setCheckedMateriaPrima('propia')}
                  color="#008577"
                />
                <ComponentRadioButton
                  title="Local"
                  value="local"
                  status={
                    checkedMateriaPrima === 'local' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setCheckedMateriaPrima('local')}
                  color="#008577"
                />
                <ComponentRadioButton
                  title="Externa"
                  value="externa"
                  status={
                    checkedMateriaPrima === 'externa' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setCheckedMateriaPrima('externa')}
                  color="#008577"
                />
              </ComponentContainer>
            </ComponentContainerGlobal>

            <ComponentContainerGlobal>
              <ComponentContainer>
                <ComponentCheckBox
                  title="Mecanizada"
                  disabled={false}
                  value={checkedMecanizada}
                  onValueChange={(value) => setCheckedMecanizada(value)}
                />
              </ComponentContainer>
            </ComponentContainerGlobal>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Caption>Conocimiento</Caption>
            </View>
            <ComponentContainerGlobal>
              <ComponentContainer>
                <ComponentRadioButton
                  title="Formal"
                  value="formal"
                  status={
                    checkedConocimiento === 'formal' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setCheckedConocimiento('formal')}
                  color="#008577"
                />
                <ComponentRadioButton
                  title="Informal"
                  value="informal"
                  status={
                    checkedConocimiento === 'informal' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setCheckedConocimiento('informal')}
                  color="#008577"
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
                  <List.Subheader>Herramientas</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormHerramienta
                      herramienta={herramienta}
                      setHerramienta={setHerramienta}
                    />
                  </List.Accordion>

                  <List.Accordion
                    title="Lista"
                    left={(props) => <List.Icon {...props} icon="equal" />}>
                    {Object.keys(herramienta).length === 0
                      ? null
                      : herramienta.map((item, key) => {
                          return (
                            <List.Item
                              key={key}
                              title={item.name_tool}
                              left={(props) => (
                                <List.Icon {...props} icon="delete" />
                              )}
                              onPress={() => itemDeleteHerramienta(item)}
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
                  <List.Subheader>Artesanal</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormArtesanal
                      artesanal={artesanal}
                      setArtesanal={setArtesanal}
                    />
                  </List.Accordion>

                  <List.Accordion
                    title="Lista"
                    left={(props) => <List.Icon {...props} icon="equal" />}>
                    {Object.keys(artesanal).length === 0
                      ? null
                      : artesanal.map((item, key) => {
                          return (
                            <List.Item
                              key={key}
                              title={item.name_product}
                              left={(props) => (
                                <List.Icon {...props} icon="delete" />
                              )}
                              onPress={() => itemDeleteArtesanal(item)}
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
                  <List.Subheader>Alimentario</List.Subheader>

                  <List.Accordion
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={Colors.blue500}
                        icon="plus"
                      />
                    )}>
                    <FormAlimentario
                      alimentario={alimentario}
                      setAlimentario={setAlimentario}
                    />
                  </List.Accordion>

                  <List.Accordion
                    title="Lista"
                    left={(props) => <List.Icon {...props} icon="equal" />}>
                    {Object.keys(alimentario).length === 0
                      ? null
                      : alimentario.map((item, key) => {
                          return (
                            <List.Item
                              key={key}
                              title={item.name_product}
                              left={(props) => (
                                <List.Icon {...props} icon="delete" />
                              )}
                              onPress={() => itemDeleteAlimentario(item)}
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
                  onPress={() => addAgroindustria()}
                  style={styles.SectionRight__button}>
                  Agregar
                </Button>
                <Button
                  mode="outlined"
                  color="#008080"
                  onPress={hideModalAgroindustria}
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
