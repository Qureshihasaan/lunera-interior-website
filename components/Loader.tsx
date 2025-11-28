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

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #004A2B;
  
  .loader {
    position: relative;
    width: 100px;
    height: 100px;
    background: #c19355;
    border-radius: 25px;
    transform-style: preserve-3d;
    mix-blend-mode: hard-light;
    box-shadow:
      /* outer shadow */
      9px 9px 18px rgba(0, 0, 0, 0.35),
      /* top-left highlight */
      -6px -6px 12px rgba(255, 255, 255, 0.35),
      /* inner bright highlight */
      inset 5px 5px 6px rgba(255, 255, 255, 0.45),
      /* inner depth shadow */
      inset -5px -5px 8px rgba(0, 0, 0, 0.25);
  }

  .circle {
    position: absolute;
    inset: 18px;
    background: #c19355; /* INNER color */
    border-radius: 50%;
    transform-style: preserve-3d;
    box-shadow:
      3px 3px 8px 0 #152b4a66,
      inset 3px 3px 3px rgba(255, 255, 255, 0.55),
      -3px -3px 5px rgba(255, 255, 255, 1);
  }

  /* Gradient ring rotating */
  .circle::before {
    content: "";
    position: absolute;
    inset: 2px;
    background: conic-gradient(
      #004A2B,
      #F6F6DB,
      #004A2B
    );
    border-radius: 50%;
    animation: anim 2s linear infinite;
  }

  /* Inner core stays #c19355 */
  .circle::after {
    content: "";
    position: absolute;
    inset: 12px;
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
  }
`;

export default Loader;
