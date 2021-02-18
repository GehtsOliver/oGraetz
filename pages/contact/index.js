import React, { useState } from "react";
import styled from "styled-components";

import Video from "../../components/landing-page/Entry/Video";
import HeadElement from "../../components/partials/Head";
import Page from "../../components/landing-page/utility/Page";
import StyledHeader from "../../components/landing-page/utility/Header";
import BurgerMenu from "../../components/landing-page/Entry/BurgerMenu";
import Message from "../../components/landing-page/utility/Message"

const StyledPage = styled(Page)`
  min-height: 100vh;
  overflow: hidden;
  background: none;
`;

const Form = styled("form")`
  position: relative;
  top: 3rem;
  overflow: hidden;
  display: flex;
  row-gap: 2.5rem;
  padding: 3rem;
  height: 45rem;
  width: 40%;
  flex-direction: column;
  background: white;
  border-radius: 5%;
  color: black;
  opacity: 0.9;

  > div {
    display: flex;
    flex-direction: column;
  }

  > div > label {
    font-weight: bold;
  }

  > div > input,
  textarea {
    margin-top: 0.7rem;
    height: 2.5rem;
    border-radius: 1rem;
    outline: none;
    padding: 0 1rem;
    border: 1px solid #2e0347;

    :focus {
      box-shadow: 0 0 0.2rem 0.2rem #2e0347;
    }
  }
  > div textarea {
    resize: none;
    border-radius: 0;
    height: 10rem;
    padding: 0.5rem;
  }

  > button {
    width: 50%;
    cursor: pointer;
    margin: 0 auto;
    height: 3rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    font-weight: bold;

    :hover {
      box-shadow: 0 0 0.2rem 0.3rem #2e0347;
    }
  }

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

const index = () => {
  const [burgerClicked, setBurgerClicked] = useState(false),
    [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [number, setNumber] = useState(""),
    [message, setMessage] = useState(""),
    [error, setError] = useState(""),
    [statusMessage, setStatusMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { name, email, number, message };
    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        setStatusMessage(
          "Thank you for getting in touch with me. I will get back to you ASAP."
        );
      }
    } catch {
      setError("Something didn't work out well. Please, try again.");
    }
  };

  return (
    <>
      <HeadElement />
      <StyledHeader
        burgerClicked={burgerClicked}
        setBurgerClicked={setBurgerClicked}
      />
      <Video />
      <StyledPage>
        {error && <h1>{error}</h1>}
        {statusMessage && !burgerClicked ? (
          <Message statusMessage={statusMessage} />
        ) : !statusMessage && burgerClicked ? (
          <BurgerMenu />
        ) : (
          <Form onSubmit={submitHandler}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                autoFocus
                type="text"
                name="name"
                required
                placeholder="John Doe"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                name="email"
                placeholder="John-doe@aol.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="number">Phone Number</label>
              <input
                type="tel"
                name="number"
                placeholder="+436708889701"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                required
                placeholder="Hi Oliver, my name is John and I want to give you all my money. Just contact me!"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit">
              Submit <i className="far fa-paper-plane"></i>
            </button>
          </Form>
        )}
      </StyledPage>
      )
    </>
  );
};

export default index;
