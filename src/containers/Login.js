import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {producerPostLocal} from '../actions/index';

import {View, ImageBackground, ScrollView} from 'react-native';
import {Subheading, TextInput, Avatar, Button} from 'react-native-paper';
import styles from '../assets/styles/Login'; //objeto que trae estilos

const Login = ({navigation, producer, producerPostLocal}) => {
  const [text, setText] = useState('');
  const [pass, setPass] = useState('');

  // const handlePost = () => {
  //   producerPostLocal({
  //     producer: {
  //       first_name: '',
  //       last_name: '',
  //       date_birth: '',
  //       document: '',
  //       gender: '',
  //       phone_number: '',
  //     },
  //   });

  // //console.log(results);
  // MyListProducer.map((item) => {
  //   console.log(item.producer.first_name, item.producer.last_name);
  // });
  //};

  return (
    <ScrollView>
    <View style={styles.container}>
      <ImageBackground
        style={{flex:1, width: '100%', height: '100%', alignItems:'center', justifyContent:'center'}}
        source={require('../assets/static/background2.jpg')}>
          <View style={styles.header}>
            <Subheading style={styles.header__subTitle}></Subheading>
          </View>
          <View style={styles.section}>
            <View style={styles.section__user__logo}>
              <Avatar.Text size={95} label={'M'} />
            </View>

            <View style={styles.section__user}>
              <TextInput
                mode="outlined"
                label="Usuario"
                value={text}
                onChangeText={(text) => setText(text)}
              />
            </View>
            <View style={styles.section__password}>
              <TextInput
                mode="outlined"
                label="Clave"
                value={pass}
                onChangeText={(pass) => setPass(pass)}
                Type="Flat"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.section__button}>
              <Button
                icon="login"
                mode="contained"
                onPress={() => navigation.navigate('Home')}>
                Acceder
              </Button>
            </View>
          </View>
      </ImageBackground>
    </View>
 </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    producer: state.producer,
  };
};

const mapDispatchToProps = {
  producerPostLocal,
};

//por mapStateToProps le envio a Login las props
export default connect(mapStateToProps, mapDispatchToProps)(Login);
