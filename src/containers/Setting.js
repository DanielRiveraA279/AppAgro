import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {
  List,
  Avatar,
  Title,
  Headline,
  Paragraph,
  Appbar,
  Card,
  Button
} from 'react-native-paper';
import styles from '../assets/styles/Setting';
import Carousel from 'react-native-snap-carousel';

const Setting = ({navigation}) => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);
  const width = Dimensions.get('window').width * 0.8;

  

  const dataNew = [
    {
      title: 'Ana Arevalo',
      description: 'Secretaria Produccion',
      distrit: 'Tinogasta',
      label:  'A',
    },
    {
      title: 'Walter Tapia',
      description: 'Developer Backend',
      distrit: 'Tinogasta',
      label: 'W',
    },
    {
      title: 'Daniel Rivera',
      description: 'Developer Frontend',
      distrit: 'Tinogasta',
      label: 'D',
    },
  ];

  const _renderItem = ({item, index}) => {
    const LeftContent = props => <Avatar.Text {...props} label={item.label} />
    return (
      <View
        style={{
          flex: 1, 
          backgroundColor: 'gray',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Card style={{width: '100%', borderRadius: 8}}>
          <Card.Title
            title={item.title}
            subtitle={item.description}
            left={LeftContent}
          />
          <Card.Content style={{width: '100%'}}>
            <Title>Municipalidad de Tinogasta</Title>
            <Paragraph>Tinogasta-Catamarca</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Actions>
            <Button>Cerrar</Button>
            <Button>Acceder</Button>
          </Card.Actions>
        </Card>
      </View>
    );
  };

  return (
    <View style={{flex: 1, alignContent: 'center', alignItems: 'center', backgroundColor:'gray'}}>
      <Carousel
        data={dataNew}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width}
        layout={'stack'} 
      />
    </View>
  );
};

export default Setting;
