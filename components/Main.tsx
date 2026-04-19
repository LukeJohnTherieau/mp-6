"use client"
import { useSession } from "next-auth/react"
import Login from "@/components/Login";
import Profile from "@/components/Profile";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
    min-height: 100vh;
    background-color: #ADD8E6;
    font-family: Arial, sans-serif
`;

export default function Main() {
  const { data: session } = useSession()
  return (
    <StyledWrapper>
      {(!session) ? <Login /> : <Profile session={session} />}
    </StyledWrapper>
  )
}