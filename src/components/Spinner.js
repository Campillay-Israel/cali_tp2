import React from 'react';

const Spinner = ({ loading }) => {
  if (!loading) return null;
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <span>Cargando...</span>
    </div>
  );
};

export default Spinner;
