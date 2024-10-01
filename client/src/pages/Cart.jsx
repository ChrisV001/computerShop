import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Add, Remove} from '@material-ui/icons'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Container = styled.div`

`

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "none" : "transparent"};
  color: ${props => props.type === "filled" && "blue"};
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  size: ${props => props.size};
`;

const ProductResolution = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  border-color: #eee;
  border: none;
  height: 1px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-weight: 600;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const Cart = () => {
    function Cart() {
        const cart = useSelector(state => state.cart)
        return cart;
    }

    console.log(Cart());
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <Link to="/success">
                        <TopButton type='filled'>CHECKOUT NOW</TopButton>
                    </Link>
                </Top>
                <Bottom>
                    <Info>
                        {Cart().products.map((product) => (
                            <Product>
                                <ProductDetail>
                                    <Image
                                        src="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"/>
                                    <Details>
                                        <ProductName><b>Product: </b>{product.title}</ProductName>
                                        <ProductId><b>ID:</b>{product._id}</ProductId>
                                        <ProductSize size={product.size}><b>Size: </b> {product.size}</ProductSize>
                                        <ProductResolution><b>Resolution: </b> {product.resolution}</ProductResolution>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add/>
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Remove/>
                                    </ProductAmountContainer>
                                    <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                                </PriceDetail>
                            </Product>
                        ))}
                        <Hr/>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemText>$ {Cart().total}</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemText>$ 5.9</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemText>$ -1</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemText>$ {Cart().total}</SummaryItemText>
                        </SummaryItem>
                        <Link to="/success">
                            <Button>CHECKOUT NOW</Button>
                        </Link>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
