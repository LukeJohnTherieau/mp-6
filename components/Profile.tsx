"use client"
import { signOut } from "next-auth/react"
import Image from 'next/image'
import { Session } from "next-auth"
import styled from "styled-components";


const StyledTitleGroup = styled.div`
    padding: 3%;
    text-align: center;
`;

const StyledTitle = styled.h1`
    color: black;
    padding: 1%;
    font-size: calc(13px + 1.50vw);
`;

const StyledP = styled.p`
    color: black;
    padding: 0.5%;
    font-size: calc(8px + 0.75vw);
    font-weight: bold;
`;

const StyledDiv = styled.div`
    width: 35%;
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 1.5%;
    border-radius: 6px;
    box-shadow: 0 14px 14px -4px rgba(0, 0, 0, 0.1);
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
    padding: 1%;
    border-radius: 11px;
    cursor: pointer;
    font-weight: bold;
    font-size: calc(5px + 1vw);
`;

const ProfilePicture = styled(Image)`
    border-radius: 50%; 
    object-fit: cover;
    margin: 5%;
`;


export default function Profile({ session }: { session: Session }) {
  if (session) {
    return (
      <StyledDiv>
        <StyledTitleGroup>
          <StyledTitle>My {session.user?.provider === "github" ? "GitHub" : session.user?.provider} Information</StyledTitle>
        </StyledTitleGroup>
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
            <StyledP>{session.user?.name} </StyledP>     
            <StyledP>{session.user?.username}</StyledP>
            <StyledP>{session.user?.email}</StyledP>  
            <StyledP>My Provider is {session.user?.provider === "github" ? "GitHub" : session.user?.provider}</StyledP>
          </Info>
        </Core>
        <StyledButton onClick={() => signOut()}>Sign out</StyledButton>
      </StyledDiv>
    )
  }
}