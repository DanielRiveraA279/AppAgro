import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';
import {Avatar, Title, Paragraph, Card, Button} from 'react-native-paper';
import styles from '../assets/styles/Setting';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const Setting = ({navigation}) => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);

  const SLIDER_WIDTH = Dimensions.get('window').width + 80;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  const dataNew = [
    {
      title: 'Sebastian Noblega',
      description: 'Intendente',
      distrit: 'Tinogasta',
      label: 'S',
    },
    {
      title: 'Ana Arevalo',
      description: 'Secretaria Produccion',
      distrit: 'Tinogasta',
      label: 'A',
    },
    {
      title: 'Walter Tapia',
      description: 'Desarrollador Full Stack',
      distrit: 'Tinogasta',
      label: 'W',
    },
    {
      title: 'Daniel Rivera',
      description: 'Desarrollador Full Stack',
      distrit: 'Tinogasta',
      label: 'D',
    },
  ];

  const _renderItem = ({item, index}) => {
    const LeftContent = (props) => (
      <Avatar.Text {...props} label={item.label} />
    );
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#323266',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Card
          style={{
            backgroundColor: '#F2F2F2',
            width: '100%',
            height: '60%',
            borderRadius: 7,
          }}>
          <Card.Title
            title={item.title}
            subtitle={item.description}
            left={LeftContent}
          />
          <Card.Content style={{backgroundColor: '#F2F2F2', width: '100%'}}>
            <Title>Municipalidad de Tinogasta</Title>
            <Paragraph>Tinogasta-Catamarca</Paragraph>
          </Card.Content>
          <Card.Cover
            style={{height: '70%'}}
            source={require('../assets/static/card_1.jpg')}
          />
          <Card.Actions>
            <Button color="#008080">Cerrar</Button>
            <Button color="#008080">Acceder</Button>
          </Card.Actions>
        </Card>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#323266',
      }}>
      <Carousel
        ref={isCarousel}
        data={dataNew}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        layout={'stack'}
        layoutCardOffset={18}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={dataNew.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          marginHorizontal: 0,
          backgroundColor: '#FFFFFF',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default Setting;
