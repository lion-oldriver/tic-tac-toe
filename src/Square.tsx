import React, { memo } from 'react';

interface SquaresProps {
  value: string | null
  onClick: () => void
}

const Square: React.FC<SquaresProps> = memo((props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
})

export default Square
