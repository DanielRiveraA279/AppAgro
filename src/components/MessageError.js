import React from 'react';
import {Alert} from 'react-native';

const MessageError = (title, message) => {
  return Alert.alert(
    title, //titulo
    message, //mensaje
    //erreglo de botones
    [
      {
        text: 'OK',
      },
    ],
  );
};

export default MessageError;
