import { Search, ShoppingBasketOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
// import MailIcon from '@mui/icons-material/Mail';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    ${'' /* margin-top: -15px; */}
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
color: #15133C;
`

const Language = styled.span`
font-size: 14px;
cursor: pointer;
color: #15133C;
`
const SearchContainer = styled.div`
display: flex;
align-items: center;
border: 1px solid #15133C;
border-radius: 50px;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;
${'' /* background: none; */}
background-color: rgba(0,0,0,0);
color: #15133C;
::placeholder {
    color: #15133C;
}
`
const Centre = styled.div`
color: #15133C;
flex: 1;
text-align: center;`

const Logo = styled.div`
    font-weight: bold;
    font-size: 40px;
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
margin-right: 10px;
color: #15133C;
`

const MenuItem = styled.div`
    font-size: 20px;
    margin-left: 35px;
`

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search Our Products"/>
                        <Search style={{color:"#15133C",fontSize: "18", marginLeft: "5"}}></Search>
                    </SearchContainer>
                </Left>
                <Centre><Logo>Craftzi</Logo></Centre>
                <Right>
                    <MenuItem>Sign Up</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingBasketOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;