import React from 'react';

export default function Loading({ color }) {
  return (
    <div className="height-100 loading">
      {/* <img src={eclipse} className="loading__icon" /> */}
      <div className="loading__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            margin: 'auto',
            background: 'transparent',
            display: 'block',
            shapeRendering: 'auto',
          }}
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <path
            d="M34 50A16 16 0 0 0 66 50A16 17.5 0 0 1 34 50"
            fill={color ? color : '#292664'}
            stroke="none"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="1s"
              repeatCount="indefinite"
              keyTimes="0;1"
              values="0 50 50.75;360 50 50.75"
            ></animateTransform>
          </path>
        </svg>
      </div>
    </div>
  );
}
