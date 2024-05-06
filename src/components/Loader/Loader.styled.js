import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% { 
    transform: rotate(0deg) scale(0.8); 
  }
  50% { 
    transform: rotate(360deg) scale(1.2); 
  }
  100% { 
    transform: rotate(720deg) scale(0.8); 
  }
`;

const ball1 = keyframes`
  0% {
    box-shadow: 60px 0 0 #f8b334; 
  }
  50% {
    box-shadow: 0 0 0 #f8b334;
    margin-bottom: 0;
    transform: translate(30px, 30px); 
  }
  100% {
    box-shadow: 60px 0 0 #f8b334; 
    margin-bottom: 20px; 
  }
`;

const ball2 = keyframes`
  0% {
    box-shadow: 60px 0 0 #97bf0d; 
  }
  50% {
    box-shadow: 0 0 0 #97bf0d;
    margin-top: -40px; 
    transform: translate(30px, 30px); 
  }
  100% {
    box-shadow: 60px 0 0 #97bf0d;
    margin-top: 0;
  }
`;

export const SpinnerContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const Spinner = styled.div`
  animation: ${rotate} 1s infinite;
  height: 100px;
  width: 100px;
`;

const Ball = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

export const Ball1 = styled(Ball)`
  animation: ${ball1} 1s infinite;
  background-color: #cb2025;
  box-shadow: 60px 0 0 #f8b334;
  margin-bottom: 20px;
`;

export const Ball2 = styled(Ball)`
  animation: ${ball2} 1s infinite;
  background-color: #00a096;
  box-shadow: 60px 0 0 #97bf0d;
`;
