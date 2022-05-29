import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { createPost } from "../helper/createPost";

const Compose = () => {
  const [values, setValues] = useState({
    title: "",
    content: "",
  });

  const { title, content } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (title === "") {
      return alert("Please enter the title!");
    } else if (title.length < 5) {
      return alert("title length should be more than five chars");
    }

    if (content === "") {
      return alert("Please enter the content");
    } else if (content.length < 50) {
      return alert("content must be more than 50 chars");
    }
    createPost({ title, content })
      .then((data) => {
        setValues({
          ...values,
          title: "",
          content: "",
        });
      })
      .then(() => toast("Journal posted successfully"))
      .catch((err) => console.log(err), {
        type: "success",
      });
  };

  return (
    <Container fluid="xl" className=" mt-5">
      <Card>
        <ToastContainer />
        <Form>
          <CardHeader className="text-center p-3"> Compose Here</CardHeader>
          <CardBody>
            <FormGroup>
              <label className="mb-2"> Title</label>
              <Input
                type="text"
                name="title"
                onChange={handleChange("title")}
                placeholder="Enter the title"
                value={title}
              ></Input>
            </FormGroup>
            <FormGroup>
              <label className="mb-1"> Post</label>

              <Input
                type="textarea"
                name="content"
                onChange={handleChange("content")}
                placeholder="Start typing your post ..."
                value={content}
              ></Input>
            </FormGroup>
            <Button onClick={onSubmit}> Publish </Button>
          </CardBody>
        </Form>
      </Card>
    </Container>
  );
};

export default Compose;
