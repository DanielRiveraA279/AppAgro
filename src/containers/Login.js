import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {TokenUpdate, User_login_update} from '../actions/index';
import {View, ScrollView} from 'react-native';
import {
  Subheading,
  TextInput,
  Button,
  Title,
  Paragraph,
  Switch,
  Banner,
} from 'react-native-paper';
import styles from '../assets/styles/Login'; //objeto que trae estilos

const Login = ({
  navigation,
  TokenUpdate,
  User_login_update,
  token,
  user_login,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [visualizar, setVisualizar] = React.useState(false);

  const [show, setShow] = React.useState(false);

  useEffect(() => {
      const {user} = user_login;
      
      User_login_update({
        user,
        password: '',
        activo: false,
      });
      
      setEmail('');
      setPassword('');
      setIsSwitchOn(false);
   }, []);
  
  const MyNotification = ({show, setShow}) => {
    return (
      <Banner
        visible={show}
        icon="alert-rhombus"
        actions={[
          {
            label: 'Aceptar',
            onPress: () => setShow(false),
          },
        ]}>
        Verifique si sus credenciales son correctas.
      </Banner>
    );
  };

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const requestAPI = () => {
    //comparo lo que me traiga redux-persist
    const url =
      'http://www.agrapi.com.ar/api/v1.0/users/login/';

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password}),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        'user' in data //compruebo si existe la propiedad user dentro de data
          ? success(data)
          : setShow(true);
      });
  };

  const success = (data) => {
    const {access_token, user} = data;
    //guardo token
    TokenUpdate(access_token);
    //guardo user y su estado activo o inactivo
    User_login_update({
      user,
      password: password,
      activo: isSwitchOn,
    });
    //accedo
    console.log('token: ' + token);
    console.log(user_login);
    navigation.navigate('Home');
  };

  return (
    <View style={{flex: 1}}>
      <MyNotification show={show} setShow={setShow} />
      <View style={styles.header}></View>

      <View style={styles.container}>
        <View style={styles.container_titleLogin}>
          <Title style={{color: 'white'}}>Login</Title>
          <Subheading style={{color: 'white'}}>
            Por favor ingrese con sus credenciales
          </Subheading>
          <Paragraph style={{color: '#848BBD', fontWeight: 'bold'}}>
            Eres nuevo? registrate
          </Paragraph>
        </View>

        <View style={styles.container_componentLogin}>
          <ScrollView>
            <View style={styles.componentLogin}>
              <TextInput
                mode="outlined"
                label="Ingresar Usuario"
                value={email}
                style={styles.componentLogin_inputs}
                onChangeText={(value) => setEmail(value)}
              />
              <TextInput
                mode="outlined"
                label="Ingresar Clave"
                secureTextEntry={!visualizar}
                value={password}
                style={styles.componentLogin_inputs}
                onChangeText={(value) => setPassword(value)}
              />
              <View style={{flexDirection: 'row'}}>
                <Paragraph>Mostrar Clave</Paragraph>
                <Switch
                  value={visualizar}
                  onValueChange={setVisualizar}
                  color="#0079BF"
                />
              </View>

              <Button 
                color="#0079BF"
                style={styles.componentLogin_buttons}
                mode="contained"
                onPress={() => requestAPI()}>
                Acceder
              </Button>

              <View style={{flexDirection: 'row'}}>
                <Paragraph>Recordar usuario?</Paragraph>
                <Switch
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
                  color="#0079BF"
                />
              </View>
            </View>

            <View style={{flex: 3}}></View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user_login: state.user_login,
  };
};

const mapDispatchToProps = {
  TokenUpdate,
  User_login_update,
};

//por mapStateToProps le envio a Login las props
export default connect(mapStateToProps, mapDispatchToProps)(Login);
