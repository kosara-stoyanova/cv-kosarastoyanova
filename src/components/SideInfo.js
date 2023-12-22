import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(40% - 4vh);
  background-color: #484545;
  height: calc(${(props) => props.cvHeight * 0.84}px - 3vh);
  padding: 2vh;
  padding-top: 1vh;
  color: #dadada;
  background-image: url(data:image/png;base64,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);

  @media print {
    background-image: unset;
    height: unset;
  }
`;

const InfoHeader = styled.div`
  //border-top: 1px solid black;
  border-bottom: 1px solid #808080;
  padding-top: 0.4vh;
  padding-bottom: 0.4vh;
  margin-bottom: 0.8vh;
  font-size: 2vh;
`;

const Info = styled.div`
  margin-bottom: 1.8vh;
`;

const InfoItem = styled.div`
  margin-bottom: 1.1vh;

  & h2 {
    font-size: 1.2vh;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0.2vh;
  }

  & .desc {
    font-size: 1.4vh;
    margin: 0px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  font-size: 1.4vh;
  margin: 0px;
`;

function SideInfo(props) {
  const { cvHeight } = props;

  return (
    <Container cvHeight={cvHeight}>
      <InfoHeader>Education</InfoHeader>
      <Info>
        <InfoItem>
          <h2>HIGH SCHOOL DIPLOMA</h2>
          <p className="desc">
            35 SEU "Dobri Voynikov"&nbsp; •&nbsp; Sofia, Bulgaria&nbsp; •&nbsp;
            2014 - 2019
          </p>
        </InfoItem>
        <InfoItem>
          <h2>BACHELOR</h2>
          <p className="desc">
            Fontys University of Applied Sciences&nbsp; •&nbsp; Eindhoven,
            NL&nbsp; •&nbsp; 2019 - Present
          </p>
        </InfoItem>
        <InfoItem>
          <h2>CERTIFICATES</h2>
          <p className="desc">
            Cambridge Certificate in Advanced English&nbsp; •&nbsp; Deutsches
            Sprachdiplom Stufe 2&nbsp; •&nbsp; Fontys Certificate Propaedeutic
            Phase
          </p>
        </InfoItem>
      </Info>

      <InfoHeader>Hard Skills</InfoHeader>
      <Info>
        <Text>
          HTML&nbsp;&nbsp;•&nbsp;&nbsp;CSS&nbsp;&nbsp;•&nbsp;&nbsp;JS&nbsp;&nbsp;•&nbsp;&nbsp;Java&nbsp;
          •&nbsp; <br /> C#&nbsp; •&nbsp; Python&nbsp; •&nbsp; PHP&nbsp; •&nbsp;
          C&nbsp; •&nbsp; C++&nbsp; •&nbsp; SQL&nbsp; •&nbsp; React&nbsp;
          •&nbsp; SpringBoot •&nbsp; Anaconda&nbsp; •&nbsp; Jupyter&nbsp;
          •&nbsp; Pandas&nbsp; •&nbsp; Docker&nbsp; •&nbsp; OOP&nbsp; •&nbsp;
          ML&nbsp; •&nbsp; DAIA&nbsp; •&nbsp; <br />
          SCRUM&nbsp; •&nbsp; Agile&nbsp; •&nbsp; Waterfall&nbsp; •&nbsp;
          VSCode&nbsp; •&nbsp; IntelliJ&nbsp; •&nbsp;Git&nbsp; •&nbsp;
          <br />
          CI/CD&nbsp; •&nbsp; UX&nbsp; •&nbsp; Unit Tetsing&nbsp; •&nbsp;
          Refactoring&nbsp; •&nbsp; Research
        </Text>
      </Info>

      <InfoHeader>Soft Skills</InfoHeader>
      <Info>
        <Text>
          Communication&nbsp; •&nbsp;
          <br /> Team Leadership&nbsp; •&nbsp; Project Management&nbsp; •&nbsp;
          <br />
          Presentation Skills&nbsp; •&nbsp; Problem Solving&nbsp; •&nbsp;
          Analytical Thinking&nbsp; •&nbsp; Creative Thinking&nbsp; •&nbsp;
          Social Skills
        </Text>
      </Info>

      <InfoHeader>Languages</InfoHeader>
      <Info>
        <Text>English&nbsp; •&nbsp; German&nbsp; •&nbsp; Bulgarian </Text>
      </Info>
    </Container>
  );
}

export default SideInfo;
