import React, { useState } from "react";
import { BsAt, BsEyeSlash, BsEye, BsKey } from "react-icons/bs/";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Stack,
  Heading,
  Image,
  Link,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import "./style.scss";

export default function Login({ onClickFunc }) {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const navigate = useNavigate();

  return (
    <Stack className="login-container">
      <Stack className="decorative-container"></Stack>
      <form className="login-form">
        <Heading className="header" as="h1">
          Welcome!
        </Heading>
        <InputGroup>
          <InputLeftElement children={<BsAt />} />
          <Input type="email" placeholder="Email" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement children={<BsKey />} />
          <Input type={passwordVisibility ? "text" : "password"} placeholder="Password" />
          <InputRightElement>
            <IconButton
              icon={passwordVisibility ? <BsEye /> : <BsEyeSlash />}
              onClick={() => setPasswordVisibility(!passwordVisibility)}
            />
          </InputRightElement>
        </InputGroup>
        <Link className="forgot-link">Forgot password?</Link>
        <Button onClick={() => navigate("/main-page")}>Sign In</Button>
      </form>
    </Stack>
  );
}
