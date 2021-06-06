import React from "react";
import { Home } from "../components";
import HomeIcon from "../icons";
import img from "../assets/jd_1.jpeg";
import cv from "../assets/cv/Mufamadi Rotondwa CV.pdf";

export default function HomeContainer() {
  return (
    <Home>
      <Home.Column>
        <Home.Text>I am mufamadi rotondwa jeddi</Home.Text>
        <Home.Title>
          A Digital Designer and Softwer Developer from the South.
        </Home.Title>
        <Home.Text>
          I am a very patient boy and a boy who is willing to accomplish his of
          becoming an industrial engineer.
        </Home.Text>
        <Home.Link href={cv} target="_blank">
          download cv
        </Home.Link>
      </Home.Column>
      <Home.Column>
        <Home.Img src={img} />
      </Home.Column>
    </Home>
  );
}
