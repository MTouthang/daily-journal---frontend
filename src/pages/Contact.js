import React from "react";
import { Button, Container } from "reactstrap";

const Contact = () => {
  return (
    <Container fluid="xl" className="text-center bg-light border mt-5">
      <div className="my-5">
        <h1> Contact Me</h1>
        <p className="mt-3">
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
        </p>
        <Button className="mt-3">Contact Us</Button>
      </div>
    </Container>
  );
};

export default Contact;
