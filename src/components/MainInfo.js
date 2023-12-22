import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(60% - 4vh);
  height: calc(${(props) => props.cvHeight * 0.84}px - 3vh);
  padding: 2vh;
  padding-top: 1vh;
  background-color: #ffffff;
  background-image: url(data:image/png;base64,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);

  @media print {
    height: unset;
    background-image: unset;
    background-color: lightgray;
  }
`;

const ItemContainer = styled.div`
  /* margin-bottom: 1vh; */
`;

const ItemTitle = styled.h2`
  border-bottom: 1px solid black;
  margin-top: 0;
  padding-top: 0.4vh;
  padding-bottom: 0.4vh;
  margin-bottom: 0.8vh;
  font-size: 2vh;
  font-weight: normal;
`;

const Item = styled.div`
  margin-bottom: 1.2vh;
`;

const ItemHeader = styled.h4`
  font-size: 1.3vh;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0.3vh;
`;

const ItemSubHeader = styled.h6`
  font-size: 1vh;
  font-weight: 700;
  margin-top: 0.6vh;
  margin-bottom: 0px;
  color: #646363;
`;

const ItemDescription = styled.div`
  font-size: 1.2vh;
  & p {
    margin: 0;
  }
`;

function MainInfo(props) {
  const { cvHeight } = props;

  return (
    <Container cvHeight={cvHeight}>
      <ItemContainer>
        <ItemTitle>Group Projects</ItemTitle>
        <Item>
          <ItemHeader>PERSONAL STUDENT DASHBOARD</ItemHeader>
          <ItemDescription>
            <p>
              The Fontys ICT Student Dashboard web application enables the users
              to log in and see their own customized widgets that provide quick
              connection to commonly used, study-related platforms.
            </p>
            <ItemSubHeader>ROLE</ItemSubHeader>
            <p>Team Manager & Developer</p>
            <ItemSubHeader>TECHNOLOGIES</ItemSubHeader>
            <p>
              JavaScript (React), Java (SpringBoot), FHICT API, SSO (OAuth2)
            </p>
          </ItemDescription>
        </Item>
        <Item>
          <ItemHeader>EMPLOYEE AND STOCK MANAGEMENT</ItemHeader>
          <ItemDescription>
            <p>
              The project's focus is creating a central system for management of
              employee and stock data with an additional website where the
              employees can view their schedule.
            </p>
            <ItemSubHeader>ROLE</ItemSubHeader>
            <p>Developer</p>
            <ItemSubHeader>TECHNOLOGIES</ItemSubHeader>
            <p>C# (Windows Forms), HTML, CSS, JS, PHP</p>
          </ItemDescription>
        </Item>
        <Item>
          <ItemHeader>MOVIE TRACKING SYSTEM</ItemHeader>
          <ItemDescription>
            <p>
              The web application is centered around a service that helps the
              user keep track of what movies and tv-shows they've watched.
            </p>
            <ItemSubHeader>ROLE</ItemSubHeader>
            <p>Lead Developer</p>
            <ItemSubHeader>TECHNOLOGIES</ItemSubHeader>
            <p>HTML, CSS, JS, PHP, MySQL</p>
          </ItemDescription>
        </Item>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>Personal Projects</ItemTitle>
        <Item>
          <ItemHeader>EVENT SOCIAL PLATFORM - WEB</ItemHeader>
          <ItemDescription>
            <p>
              The project aims to provide users with the opportunity to explore
              the world of events by giving them access to different features
              for not only finding meets near them that match their interests,
              but also creating their own.
            </p>
            <ItemSubHeader>TECHNOLOGIES</ItemSubHeader>
            <p>
              JavaScript (React), Java (SpringBoot), SQL (H2 DB), Docker, CI/CD
              (GitLab)
            </p>
          </ItemDescription>
        </Item>
        <Item>
          <ItemHeader>DIABETES PREDICTION - AI</ItemHeader>
          <ItemDescription>
            <p>
              The objective of this classification assignment is to
              diagnostically predict whether or not a patient has diabetes,
              based on certain diagnostic measurements.
            </p>
            <ItemSubHeader>TECHNOLOGIES</ItemSubHeader>
            <p>Python, Jupyter Notebook</p>
          </ItemDescription>
        </Item>
      </ItemContainer>
    </Container>
  );
}

export default MainInfo;
