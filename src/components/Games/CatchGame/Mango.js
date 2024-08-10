import React from 'react';

const Mango = ({ position }) => {
  return (
    <div className="mango" style={{ top: position.top, left: position.left }}>
    </div>
  );
};

export default Mango;
