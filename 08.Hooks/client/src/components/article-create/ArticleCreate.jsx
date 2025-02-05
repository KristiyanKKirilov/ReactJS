import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./ArticleCreate.module.css";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constants";

export default function ArticleCreate() {
  const navigate = useNavigate();
  const {user} = useContext(UserContext);

  const fields = {
    title: "title",
    content: "content",
    imageUrl: "imageUrl",
  };

  const initialFormValues = {
    [fields.title]: "",
    [fields.content]: "",
    [fields.imageUrl]: "",
  };

  const formSubmitHandler = async (values) => {

    const listRequest = fetch(`${BASE_URL}/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: values.title,
        imageUrl: values.imageUrl,
      }),
    });

    const detailsRequest = fetch(`${BASE_URL}/details`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        author: user.username
      }),
    });

    Promise.all([listRequest, detailsRequest])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(results => {
        navigate('/articles');
      });
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialFormValues,
    formSubmitHandler
  );

  return (
    <div className={styles["form"]}>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Article title</Form.Label>
          <Form.Control
            type="text"
            name={fields.title}
            value={values.title}
            placeholder="Cyber Security"
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Article image url</Form.Label>
          <Form.Control
            type="text"
            name={fields.imageUrl}
            value={values.imageUrl}
            placeholder="steam-image.jpg"
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Article information</Form.Label>
          <Form.Control
            as="textarea"
            name={fields.content}
            rows={3}
            placeholder="Cyber Security is main topic in..."
            value={values.content}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit" variant="dark">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
