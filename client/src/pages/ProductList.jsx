import React, {useState} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'
import {useLocation} from "react-router-dom";

const Container = styled.div`

`
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`
const Option = styled.option``
const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    console.log(cat);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value.toString(),
        })
    }

    console.log(filters);
    return (
        <Container>
            <Navbar/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>Filter Products</Filter>
                <Select name="title" onChange={handleFilters}>
                    <Option disabled>Brand</Option>
                    <Option>AOC</Option>
                    <Option>Dell</Option>
                    <Option>Asus</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled>Screen Size</Option>
                    <Option>24</Option>
                    <Option>27</Option>
                    <Option>32</Option>
                </Select>
                <Filter>Sort Products</Filter>
                <Select onChange={e => setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Footer/>
        </Container>
    )
}

export default ProductList
