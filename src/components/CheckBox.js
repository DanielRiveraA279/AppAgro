import React from 'react';
import CheckBox from '@react-native-community/checkbox'
import {Paragraph} from 'react-native-paper';

const CheckBoxComponent = ({title, ...props}) => {
  //props: tiene las propiedades de un componente
  return (
    <>
      <Paragraph style={{margin: 8}}>{title}</Paragraph>
      <CheckBox {...props}/>
    </>
  );
};

export default CheckBoxComponent;
