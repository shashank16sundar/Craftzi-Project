import { AddCircleOutlineOutlined, RemoveCircleOutlineOutlined } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
// import { mobile } from "../responsive";

const Container = styled.div`
    background-color: #FFF8EA;
`;

const Wrapper = styled.div`
  padding: 80px;
  display: flex;
  ${'' /* ${mobile({ padding: "10px", flexDirection:"column" })} */}
`;

const ImgContainer = styled.div`
  flex: 1;
  ${'' /* box-shadow: 5.8px 11.5px 11.5px hsl(0deg 0% 0% / 0.32); */}
  ${'' /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */}
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  border-radius: 5%;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  border-radius: 5%;
  ${'' /* ${mobile({ height: "40vh" })} */}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 0px 20px 50px;
  ${'' /* ${mobile({ padding: "10px" })} */}
`;

const Title = styled.h1`
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Desc = styled.p`
  margin: 40px 0px 20px 0px;
  ${'' /* display: flex;
  justify-content: center;
  align-items: center; */}
  text-align: center;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterContainer = styled.div`
  width: 100%;
  margin: 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* ${mobile({ width: "100%" })} */}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  margin-left: 30px;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 15px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${'' /* ${mobile({ width: "100%" })} */}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin: 0px 40px;

`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveCircleOutlineOutlined  style={{color: "teal"}}/>
              <Amount>1</Amount>
              <AddCircleOutlineOutlined style={{color: "teal"}}/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;