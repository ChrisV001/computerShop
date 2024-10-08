import React, {useState} from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {login} from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
  url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQF8I1SnFRgS1968WHCrEC39RaQ7Cwm7jQzOi5cmuuyhD4p8a8O"),
  center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin-top: 10px;
  cursor: pointer;

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});
    }
    const {isFetching, error} = useSelector((state) => state.user);
    return (
        <Container>
            <Container>
                <Wrapper>
                    <Title>SIGN IN</Title>
                    <Form>
                        <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                        <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                        <Button onClick={handleClick} disabled={isFetching}>SIGN IN</Button>
                        {error && <Error>Something went wrong...</Error>}
                        <Link>CREATE A NEW ACCOUNT</Link>
                    </Form>
                </Wrapper>
            </Container>
        </Container>
    )
}

export default Login
