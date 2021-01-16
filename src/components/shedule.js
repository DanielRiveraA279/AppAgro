import React from 'react';
import {} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
//import moment from 'react-moment';

const Shedule = ({mode, setMode, setShow, setFecNac}) => {
  const [date, setDate] = React.useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');

    setDate(currentDate);
    //capturo la fecha con toLocaleDateString
    //capturo la hora con toLocalDateString

    //const opcionesFecha = {year: 'numeric', month: 'long', day: 'numeric'};
    //setFecNac(moment(currentDate).dateFormat('YYYY-MM-DD'));
    //setFecNac(currentDate.toLocaleDateString())

    console.log(currentDate);

    const day = ("0" + currentDate.getDate()).slice(-2);
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const year = currentDate.getFullYear();

    const fecha = year + "/" + month + "/" + day

    setFecNac(fecha);

    // console.log('Fecha: ' + moment(currentDate).dateFormat('YYYY-MM-DD'));
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
      dateFormat="day month year"
    />
  );
};

export default Shedule;
