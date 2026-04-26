import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import EazyButton from "../EazyButton";

const H1 = styled.h1`
color: #5b21b6;
text-align: center;`;

export default function Footer() {
  return (
      <footer className="flex justify-center items-center py-4 font-primary text-gray-700">
        {" "}
        Built with
        <FontAwesomeIcon
          icon={faHeart}
          aria-label="hidden"
          className="text-red-600 mx-1 animate-pulse"
        ></FontAwesomeIcon>
        by
        <a href="https://easybytes.com" target="_blank" rel="noreferrer"
        className="text-primary font-semibold px-1 transition-colors duration-300 hover:text-dark">
          {" "}
          eazybytes
        </a>
      </footer>
  );
}
