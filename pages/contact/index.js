import React from "react";
import styled from "styled-components";

import HeadElement from "../../components/partials/Head";
import Page from "../../components/landing-page/utility/Page";
import StyledHeader from "../../components/landing-page/utility/Header";

const StyledPage = styled(Page)`
  min-height: 100vh;
  background-color: gray;
  overflow: hidden;
`;


const Section = styled("section")`
  height: 100vh;
  width: 100%;
  background: #fff;
  position: relative;
  top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled("form")`
display: flex;
row-gap: 2rem;
padding: 3rem;
height: 40rem;
width: 50%;
flex-direction: column;
background: #2e0347;
border-radius: 5%;

>div {
    display: flex;
    flex-direction: column;
}
`

const index = () => {
  return (
    <>
      <HeadElement />
      <StyledHeader/>
      <StyledPage>
        <Section>
          <Form type="submit">
            <div>
            <label htmlFor="">Name</label>
            <input name="name"></input>
            </div>
            <div>
            <label htmlFor="">E-Mail</label>
            <input name="email"></input>
            </div>
            <div>
            <label htmlFor="">Phone Number</label>
            <input name="number"></input>
            </div>
            <div>
            <label htmlFor="message">Message</label>
            <textarea></textarea>
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Section>
      </StyledPage>
    </>
  );
};

export default index;
