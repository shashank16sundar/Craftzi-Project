import React from 'react'
import styled from 'styled-components'

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
    url("https://images.unsplash.com/photo-1629736048693-6bc25970ac36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80")
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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 10px auto 10px;
  border-radius: 5px;
`;

const Link = styled.div`
    margin: 5px 0;
    text-decoration: underline;
    font-size: 12px;
    cursor: pointer;
`;

function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link>Forgot Password?</Link>
          <Link>Create A New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login;