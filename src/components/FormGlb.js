import React from 'react';

import FormProductor from '../components/FormProductor';
import FormGrupoFamiliar from '../components/FormGrupoFamiliar';
import FormVehiculos from '../components/FormVehiculos';
import FormActividadLaboral from '../components/FormActividadLaboral';
import FormProduccion from '../components/FormProduccion';

const FormGlb = ({
  nameForm,
  titulo,
  setCurrentPosition,
  currentPosition,
  styles,
}) => {
  switch (nameForm) {
    case 'Productor':
      return (
        <FormProductor
          titulo={titulo}
          setCurrentPosition={setCurrentPosition}
          currentPosition={currentPosition}
          styles={styles}
        />
      );

    case 'Grupo Familiar':
      return (
        <FormGrupoFamiliar
          titulo={titulo}
          setCurrentPosition={setCurrentPosition}
          currentPosition={currentPosition}
          styles={styles}
        />
      );
    case 'Actividad Laboral':
      return (
        <FormActividadLaboral
          titulo={titulo}
          setCurrentPosition={setCurrentPosition}
          currentPosition={currentPosition}
          styles={styles}
        />
      );

    case 'Vehiculos':
      return (
        <FormVehiculos
          titulo={titulo}
          setCurrentPosition={setCurrentPosition}
          currentPosition={currentPosition}
          styles={styles}
        />
      );
    case 'Produccion':
      return (
        <FormProduccion
          titulo={titulo}
          setCurrentPosition={setCurrentPosition}
          currentPosition={currentPosition}
          styles={styles}
        />
      );
  }
};

export default FormGlb;
