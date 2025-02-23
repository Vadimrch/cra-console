import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
        <Menu>
<ul>
    <li><a href="">menu item 1</a></li>
    <li><a href="">menu item 2</a></li>
    <li><a href="">menu item 3</a></li>
</ul>
        </Menu>

        <Box>
      <StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn>
      <StyledBtn as="a" href={"#"}>Link</StyledBtn>
      <StyledBtn>Hello</StyledBtn>
            <SuperButton>Super Button</SuperButton>
        </Box>
    </div>
  );
}

export default App;

const StyledBtn = styled.button`
    border: none;
    background-color: #fb3f78;
    padding: 10px 20px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: #684abf;
    }

    &:last-child {
        background-color: #b2f147;
    }
`
const Link = styled.a`
    color: #297bf6;
    font-size: 2rem;
    font-weight: bold;
    background-color: transparent;
    padding: 0;
`
const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: gold;
    color: #686666;
`

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    button{
        cursor: pointer;
    }
    
    ${Link} {
        cursor: zoom-in;
    }
`
const Menu = styled.nav`
ul{
    list-style: none;
    padding: 0;
    display: flex;
    
    li > a{
        color: green;
    }
    
    li + li {
        margin-left: 20px;
    }
}
    
`