import styled from 'styled-components';

export const ButtonContainer  = styled.button`
text-transform: capitalize;
font-szie: 15px;
backgraound: transparent;
border: 1px solid var(--lightBlue);
border-color: ${props => props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
color: ${props => props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
border-radius: 5px;
padding: 4px 3px;
cursor: pointer;
margin: 2px 5px 2px 0px;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${props => props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
    color: var(--mainBlue);
}
&:focus{
    outline: none;
}
`;