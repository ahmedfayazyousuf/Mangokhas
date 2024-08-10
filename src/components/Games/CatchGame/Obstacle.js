import React from 'react';

const Obstacle = ({ position }) => {
  return (
    <div className="obstacle" style={{ top: position.top, left: position.left }}>
    </div>
  );
};

export default Obstacle;
