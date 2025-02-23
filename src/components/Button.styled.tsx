import styled from 'styled-components';
import {MyAnimation} from "../styles/animations/Animations";

export const StyledBtn = styled.button`
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

export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: gold;
    color: #686666;
    
    &:hover {animation: ${MyAnimation} 2s ease-in-out infinite;}
    
`