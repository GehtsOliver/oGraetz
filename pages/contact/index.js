import React, { useState } from "react";
import styled from "styled-components";

import Video from "../../components/landing-page/Entry/Video";
import Page from "../../components/utility/Page";
import Navbar from "../../components/utility/Navbar";
import BurgerMenu from "../../components/utility/BurgerMenu";
import Message from "../../components/utility/Message";
import Meta from "../../components/utility/Meta";

const StyledPage = styled(Page)`
  min-height: 100vh;
  background: none;
  justify-content: normal;
`;

const Form = styled("form")`
  display: flex;
  row-gap: 2rem;
  padding: 2rem;
  height: 40rem;
  width: 30%;
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

  @media (max-width: 1400px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 95%;
    row-gap: 0.5rem;
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
          "Thank you for getting in touch. I will get back to you ASAP."
        );
      }
    } catch (err) {
      setError(`An error occured: ${err}`);
    }
  };

  return (
    <>
      <Meta title="Contact Me" />
      <Video />
      <StyledPage>
        <Navbar
          burgerClicked={burgerClicked}
          setBurgerClicked={setBurgerClicked}
        />
        {error && <h1>{error}</h1>}
        {statusMessage && !burgerClicked ? (
          <Message statusMessage={statusMessage} />
        ) : statusMessage && burgerClicked ? (
          <BurgerMenu />
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
                placeholder="Hi Oliver, I am interested in you and me working together. Please, contact me."
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
    </>
  );
};

export default index;
