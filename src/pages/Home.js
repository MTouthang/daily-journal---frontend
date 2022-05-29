import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { getPost } from "../helper/getPost";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const loadPosts = () => {
    getPost()
      .then((response) => {
        if (!response.ok) {
          throw Error("Server not reachable!");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <Container
      fluid="xl"
      className="bg-light border mt-5 mb-6"
      style={{ marginBottom: "100px" }}
    >
      {error && <div> {`Server: ${error} posts data`} </div>}
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <h1 className="mb-5">{post.title}</h1>
            <p className="mb-5">{post.content}</p>
            <p> Posted at - {post.createdAt.slice(0, 10)}</p>
            <hr />
          </div>
        );
      })}
    </Container>
  );
};

export default Home;
