import React from "react";
import { Container } from "reactstrap";

const About = () => {
  return (
    <Container fluid="xl" className="bg-light border text-center my-5">
      <h1 className="mt-3"> About us</h1>
      <hr />
      <p className="my-5">
        t is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on p
      </p>
    </Container>
  );
};

export default About;
