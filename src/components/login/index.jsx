import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Display from "../display";
import NotAuth from "../notAuth";
import { Input } from "../display/style";
import { Form } from "../display/style";
import { Container } from "../display/style";

const Login = () => {
  const { register, handleSubmit } = useForm({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [notAuthenticated, setNotAuthenticated] = useState(false);
  const OnSubmitFunction = (data) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", data)
      .then((response) => {
        console.log(response.data);
        setIsAuthenticated(true);
        setNotAuthenticated(false);
      })
      .catch((err) => {
        console.log(err);
        setNotAuthenticated(true);
        setIsAuthenticated(false);
      });
  };
  <div>{isAuthenticated && <div>Confirmado</div>}</div>;

  return (
    <Container>
      <h1>Verifique se é cadastrado !</h1>
      <Form onSubmit={handleSubmit(OnSubmitFunction)}>
        <Input
          {...register("username")}
          placeholder="Digite seu email "
        ></Input>
        <Input {...register("password")} placeholder="Digite sua senha"></Input>
        <button type="submit"> Enviar</button>
      </Form>
      <Display isAuthenticated={isAuthenticated} />
      <NotAuth notAthenticated={notAuthenticated} />
    </Container>
  );
};
export default Login;
