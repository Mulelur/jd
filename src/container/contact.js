import React from "react";
import { Contact } from "../components";

export default function ContactContainer() {
  return (
    <Contact>
      <Contact.Row>
        <Contact.Col>
          <Contact.Img />
        </Contact.Col>
      </Contact.Row>
      <Contact.Row>
        <h1 style={{ font: "1.9rem" }}>Contact</h1>
      </Contact.Row>
      <Contact.Row>
        <Contact.Col>
          <Contact.Heading2>Phone</Contact.Heading2>
          <Contact.Text>+27 797385674</Contact.Text>
        </Contact.Col>
        <Contact.Col>
          <Contact.Heading2>email</Contact.Heading2>
          <Contact.Text>Mufamadijeddie28@gmail.com</Contact.Text>
        </Contact.Col>
        <Contact.Col>
          <Contact.Heading2>location</Contact.Heading2>
          <Contact.Text>
            18 William Porter Street Vanderbijlpark 1911
          </Contact.Text>
        </Contact.Col>
      </Contact.Row>
    </Contact>
  );
}
