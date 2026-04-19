"use client"
import { signOut } from "next-auth/react"
import Image from 'next/image'
import { Session } from "next-auth"
import styled from "styled-components";


const StyledP = styled.p`
    color: gray;
    padding: 0.5%;
    font-size: calc(8px + 0.75vw);
`;

const StyledDiv = styled.div`
    width: 35%;
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

const Core = styled.div`
    display: flex;
    flex-direction: row
    justify-content: center;
    align-items: center;  
    text-align: left;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column
 
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

const ProfilePicture = styled(Image)`
    border-radius: 50%; 
    object-fit: cover;
    margin: 5px;
    @media  screen and (max-width: 1000px) {
        width: 150px;       
        height: 150px;      
        border-radius: 50%; 
        object-fit: cover;
        margin: 5px;
    }
`;


export default function Profile({ session }: { session: Session }) {
  if (session) {
    return (
      <StyledDiv>
        <Core>
          {session?.user?.image ? (
            <ProfilePicture
              src={session.user.image}
              width={150}
              height={150}
              alt={`Profile Picture`}
              priority={true}
            />
          ) : null}
          <Info>
            <StyledP>Email: {session.user?.email}</StyledP>
            <StyledP>Name: {session.user?.name}</StyledP>
          </Info>
        </Core>
        <StyledButton onClick={() => signOut()}>Sign out</StyledButton>
      </StyledDiv>
    )
  }
}