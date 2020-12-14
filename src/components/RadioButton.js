import React from 'react';
import {Paragraph, RadioButton} from 'react-native-paper';

const RadioButtonComponent = ({title, ...props}) => {
  //props: tiene las propiedades de un componente
  return (
    <>
      <Paragraph style={{margin: 8}}>{title}</Paragraph>
      <RadioButton {...props} />
    </>
  );
};

export default RadioButtonComponent;
