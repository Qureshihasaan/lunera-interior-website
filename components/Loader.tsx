import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="circle" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  // background: #004B2A;
  
  .loader {
    position: relative;
    margin: 210px auto;
    width: 200px;
    overflow: hidden;
    height: 200px;
    background: #c19355;
    border-radius: 50px;
    transform-style: preserve-3d;
    mix-blend-mode: hard-light;
  box-shadow:
    /* outer shadow */
    18px 18px 35px rgba(0, 0, 0, 0.35),
    /* top-left highlight */
    -12px -12px 25px rgba(255, 255, 255, 0.35),
    /* inner bright highlight */
    inset 10px 10px 12px rgba(255, 255, 255, 0.45),
    /* inner depth shadow */
    inset -10px -10px 15px rgba(0, 0, 0, 0.25);}

  .circle {
    position: absolute;
    inset: 35px;
    background: #c19355; /* INNER color */
    border-radius: 50%;
    transform-style: preserve-3d;
    box-shadow:
      5px 5px 15px 0 #152b4a66,
      inset 5px 5px 5px rgba(255, 255, 255, 0.55),
      -6px -6px 10px rgba(255, 255, 255, 1);
  }

  /* Gradient ring rotating */
  .circle::before {
    content: "";
    position: absolute;
    inset: 4px;
    background: conic-gradient(
      #f6f6db,
      #f6f6db,
      #000000
    );

    border-radius: 50%;
    animation: anim 2s linear infinite;
  }

  /* Inner core stays #c19355 */
  .circle::after {
    content: "";
    position: absolute;
    inset: 25px;
    filter: blur(0.9px);
    background: #c19355;
    border-radius: 50%;
    z-index: 1000;
  }

  @keyframes anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }`;

export default Loader;
