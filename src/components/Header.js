import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: calc(${(props) => props.cvHeight * 0.16}px - 3vh);
  width: calc(100% - 3vh);
  color: #dadada;
  background-color: black;
  padding: 1.5vh;
  background-image: url(data:image/png;base64,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);

  @media print {
    background-image: unset;
  }
`;

const DetailsContainer = styled.div`
  padding-left: 2vh;
  width: calc(100% - 12vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Picture = styled.img`
  border-radius: 50%;
  width: 10vh;
`;

const HorizontalDivider = styled.hr`
  border: none;
  border-top: 1px solid #484848;
  width: 100%;
  margin: 0.6vh;
`;

const VerticalDivider = styled.hr`
  border: none;
  border-left: 1px solid #484848;
  border-top: none;
  margin: 0;
  height: 2.3vh;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 2.25vh;
  font-weight: normal;
  letter-spacing: 0.3vh;
`;

const Email = styled.p`
  margin: 0;
  font-size: 1.3vh;
  font-weight: normal;
`;

const ContactsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.3vh;
`;

const ContactIcon = styled.span``;

function Header(props) {
  const { cvHeight } = props;

  return (
    <HeaderContainer cvHeight={cvHeight}>
      <Picture src="./profile.jpg" />
      <DetailsContainer>
        <Name> KOSARA STOYANOVA </Name>
        <HorizontalDivider />
        <Email>k.stoyanova@student.fontys.nl</Email>
        <HorizontalDivider />
        <ContactsContainer>
          <ContactItem>
            <ContactIcon
              className="material-icons"
              style={{ marginRight: "1vh", fontSize: "2vh" }}
            >
              place
            </ContactIcon>
            Eindhoven, NL
          </ContactItem>
          <VerticalDivider />
          <ContactItem>
            <img
              src="./linkedin.svg"
              alt="linkedin"
              style={{ marginRight: "1vh", height: "2.5vh" }}
            />
            linkedin.com/in/kosara-stoyanova
          </ContactItem>
          <VerticalDivider />
          <ContactItem style={{}}>
            <ContactIcon
              className="material-icons"
              style={{ marginRight: "1vh", fontSize: "2vh" }}
            >
              phone
            </ContactIcon>
            +359 889212293
          </ContactItem>
        </ContactsContainer>
      </DetailsContainer>
    </HeaderContainer>
  );
}

export default Header;
