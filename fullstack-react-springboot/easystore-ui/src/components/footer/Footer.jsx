import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import EazyButton from "../EazyButton";

const H1 = styled.h1`
color: #5b21b6;
text-align: center;`;

export default function Footer() {
  return (
    <>
      <H1>Demo of Styled-Components from Footer.jsx</H1>
      <EazyButton>Submit</EazyButton> 
      <footer>
        {" "}
        Built with
        <FontAwesomeIcon
          icon={faHeart}
          aria-label="hidden"
          className="footer-icon"
        ></FontAwesomeIcon>
        by
        <a href="https://easybytes.com" target="_blank" rel="noreferrer">
          {" "}
          eazybytes
        </a>
      </footer>
    </>
  );
}
