import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {View, ScrollView} from 'react-native';
import {
  Subheading,
  Paragraph,
  TextInput,
  Avatar,
  Button,
} from 'react-native-paper';
import styles from '../assets/styles/Login'; //objeto que trae estilos

const Login = ({navigation, myList}) => {
  const [text, setText] = useState('');
  const [pass, setPass] = useState('');
  const {results} = myList;

  useEffect(() => {
    //console.log(results);
    results.map((item) => {
      console.log(item.producer.first_name);
    });
    //console.log(producer.first_name)
    //producer; //[transformo a array]
    //console.log(producer) //<array>[posicion_campo][posicion_valor]
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Subheading style={styles.header__subTitle}></Subheading>
        </View>
        <View style={styles.section}>
          <View style={styles.section__user__logo}>
            <Avatar.Text size={95} label="M" />
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
        <View style={styles.footer}>
          <View style={styles.footer__signUp}>
            <Paragraph>Todavia no tiene una cuenta? </Paragraph>
            <Paragraph style={{fontWeight: 'bold', color: '#6200EE'}}>
              Crear cuenta
            </Paragraph>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state,
  };
};

//por mapStateToProps le envio a Login las props
export default connect(mapStateToProps, null)(Login);
