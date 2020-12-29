import React from 'react';
import {} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Shedule = ({mode, setMode, setShow, setFecNac}) => {
  const [date, setDate] = React.useState(new Date());
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    //capturo la fecha con toLocaleDateString
    //capturo la hora con toLocalDateString
    const opcionesFecha = {year: 'numeric', month: 'long', day: 'numeric'};
    setFecNac(currentDate.toLocaleDateString('es-ES', opcionesFecha));
  };

  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode={mode}
      is24Hour={true}
      display="default"
      onChange={onChange}
      locale="es_ES"
      textColor="red"
    />
  );
};

export default Shedule;
