"use client"
import { signIn } from "next-auth/react"
import styled from "styled-components";


const StyledDiv = styled.div`
    width: 25%;
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 1%;
    border-radius: 10px;
    border: 1px solid #ccc;
    box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.1);
    @media  screen and (max-width: 1000px) {
        width: 90%;
    }        
`;

const StyledTitleGroup = styled.div`
    padding: 2%;
    text-align: center;
`;

const StyledTitle = styled.h1`
    color: black;
    padding: 0.5%;
    font-size: calc(12px + 1.75vw);
`;

const StyledP = styled.p`
    color: gray;
    padding: 0.5%;
    font-size: calc(8px + 0.75vw);
`;

const StyledButton = styled.button`
    display: block;
    width: 100%;
    background-color: #010409;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: calc(4px + 1vw);
`;


export default function Login() {
  return (
    <StyledDiv>
      <StyledTitleGroup>
        <StyledTitle>OAuth Application</StyledTitle>
        <StyledP>Sign in with your GitHub credentials</StyledP>
      </StyledTitleGroup>
      <br></br>
      <StyledButton onClick={() => signIn("github")}>
        Sign in with GitHub
      </StyledButton>
    </StyledDiv>
  )
}