import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Ionicons from 'react-native-vector-icons';
import styles from '../assets/styles/NewProducer';

import FormGlb from '../components/FormGlb';

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#333366',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#333366',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#333366',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#333366',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#333366',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
};

const datos = [
  'Productor',
  'Actividad Laboral',
  'Grupo Familiar',
  'Vehiculos',
  'Produccion',
];

const NewProducer = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  // console.disableYellowBox = true;

  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  const myIconFolder = () => {
    return <Ionicons name="folder-open" size={18} color="gray" />;
  };

  const myIconAscDesc = () => {
    return <Ionicons name="sort-up" size={18} color="gray" />;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.SectionLeft}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={currentPosition}
            stepCount={5}
            direction="vertical"
          />
        </View>

        <View style={styles.SectionRight}>
          {currentPosition === 0 ? (
            <FormGlb
              nameForm="Productor"
              titulo={datos[currentPosition]}
              setCurrentPosition={setCurrentPosition}
              currentPosition={currentPosition}
              styles={styles}
            />
          ) : null}

          {currentPosition === 1 ? (
            <FormGlb
              nameForm="Actividad Laboral"
              titulo={datos[currentPosition]}
              setCurrentPosition={setCurrentPosition}
              currentPosition={currentPosition}
              styles={styles}
            />
          ) : null}

          {currentPosition === 2 ? (
            <FormGlb
              nameForm="Grupo Familiar"
              titulo={datos[currentPosition]}
              setCurrentPosition={setCurrentPosition}
              currentPosition={currentPosition}
              styles={styles}
            />
          ) : null}

          {currentPosition === 3 ? (
            <FormGlb
              nameForm="Vehiculos"
              titulo={datos[currentPosition]}
              setCurrentPosition={setCurrentPosition}
              currentPosition={currentPosition}
              styles={styles}
            />
          ) : null}

          {currentPosition === 4 ? (
            <FormGlb
              nameForm="Produccion"
              titulo={datos[currentPosition]}
              setCurrentPosition={setCurrentPosition}
              currentPosition={currentPosition}
              styles={styles}
            />
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
};

export default NewProducer;
