import styled from "styled-components";

export const Container = styled.div`
  background-color: lightblue;
  border: 1px solid darkblue;
  border-radius: 8px;
  h1 {
    font-size: 30px;
    margin: 10px;
    font-family: "Lexend Giga", sans-serif;
    color: black;
    font-weight: 200;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 150px;
    height: 40px;
    margin: 10px;
    border: 1px solid lightblue;
    background-color: darkblue;
    color: lightgray;
    border-radius: 7px;
    font-size: 15px;
    font-family: "Lexend Giga", sans-serif;
  }
  button:hover {
    background-color: blue;
    color: white;
    transition: 0.2s;
  }
`;

export const Input = styled.input`
  border: 1px solid white;
  border-radius: 7px;
  width: 200px;
  height: 40px;
  background-color: white;
  margin: 10px;
  font-family: "Lexend Giga", sans-serif;
  font-weight: 200;
`;
