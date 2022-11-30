import styled from "styled-components";
// import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      ${'' /* rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.5) */}
      ${'' /* rgba(255, 165, 0, 0.5),
      rgba(255, 165, 0, 0.5) */}
      rgba(191, 240, 152, 0.5),
      rgba(111, 214, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg?cs=srgb&dl=pexels-sanketh-rao-716107.jpg&fm=jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: #CDFCF6;
  ${'' /* ${mobile({ width: "75%" })} */}
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 10px;
  margin: 20px 0px;
  line-height: 15px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: auto;
  border-radius: 5px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email ID" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;