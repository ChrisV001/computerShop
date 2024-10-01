import styled from "styled-components";
import Login from "./Login";
import {useState} from "react";
import {useDispatch} from "react-redux";

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
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin-top: 10px;
  cursor: pointer;
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [categories, setCategories] = useState([]);
    const [size, setSize] = useState([]);
    const [resolution, setResolution] = useState([]);
    const [price, setPrice] = useState("");

    async function addProduct() {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("desc", desc);
        formData.append("img", img);
        formData.append("categories", JSON.stringify(categories));
        formData.append("size", JSON.stringify(size));
        formData.append("resolution", JSON.stringify(resolution));
        formData.append("price", price);
        let result = await fetch("https://localhost:5000/api/products", {
            method: "POST",
            body: formData
        });
    }

    return (
        <Container>
            <Wrapper>
                <Title>Add Product</Title>
                <Form>
                    <Input placeholder="title" onChange={(e) => setTitle(e.target.value)} name="title"/>
                    <Input placeholder="desc" onChange={(e) => setDesc(e.target.value)} name="desc"/>
                    <Input placeholder="img url" onChange={(e) => setImg(e.target.value)} name="img"/>
                    <Input placeholder="categories" onChange={(e) => setCategories(e.target.value.split(","))}
                           name="categories"/>
                    <Input placeholder="size" onChange={(e) => setSize(e.target.value.split(","))}
                           name="size"/>
                    <Input placeholder="resolution" onChange={(e) => setResolution(e.target.value.split(","))}
                           name="resolution"/>
                    <Input placeholder="price" onChange={(e) => setPrice(e.target.value)}
                           name="price"/>
                    <Button onClick={addProduct}>Add Product</Button>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default AddProduct;