import { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import MainInfo from "./components/MainInfo";
import SideInfo from "./components/SideInfo";

import "./App.css";

const CVcontainer = styled.div`
  width: ${(props) => props.cvWidth}px;
  height: ${(props) => props.cvHeight}px;
  margin: 0 auto;
  margin-top: 20px;

  @media print {
    width: 100%;
    height: unset;
    margin: 0 !important;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
`;

function App() {
  const [height, setHeight] = useState(window.innerHeight - 40);
  const [width, setWidth] = useState((window.innerHeight - 40) / 1.4141);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight - 40);
      setWidth((window.innerHeight - 40) / 1.4141);
    });
  }, []);

  return (
    <CVcontainer cvHeight={height} cvWidth={width}>
      <Header cvHeight={height} cvWidth={width} />
      <InfoContainer>
        <SideInfo cvHeight={height} />
        <MainInfo cvHeight={height} />
      </InfoContainer>
    </CVcontainer>
  );
}

export default App;
