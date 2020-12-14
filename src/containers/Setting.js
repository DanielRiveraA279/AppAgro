import React, {useState} from 'react';
import {View} from 'react-native';
import {
  List,
  Avatar,
  Title,
  Headline,
  Paragraph,
  Appbar,
} from 'react-native-paper';
import styles from '../assets/styles/Setting';

const Setting = ({navigation}) => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <View style={styles.container}>
      <View style={styles.header_title}>
        <Appbar.Header style={{backgroundColor: '#3399D9'}}>
          <Appbar.BackAction color="white" onPress={() => navigation.goBack()} />
          <Appbar.Content
            color="white"
            title="Perfil de Usuario"
           
          />
        </Appbar.Header>
      </View>
      <View style={styles.header_user}>
        <List.Section>
          <List.Accordion
            title="Cambiar de Usuario"
            left={(props) => <List.Icon {...props} icon="account" />}>
            <List.Item title="Name user 1" />
            <List.Item title="Name user 2" />
            <List.Item title="Name user 3" />
          </List.Accordion>
        </List.Section>
      </View>

      <View style={styles.section_column}>
        <Avatar.Text size={95} label="XD" />
        <Title>Nombre del usuario</Title>
        <Headline>Descripcion del Cargo</Headline>
        <Paragraph>Nombre del municipio</Paragraph>
      </View>
    </View>
  );
};

export default Setting;
