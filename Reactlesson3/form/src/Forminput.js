import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    yearPublished: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmittedData(formData);
  };

  const handleReset = () => {
    setFormData({
      title: '',
      author: '',
      genre: '',
      yearPublished: '',
    });
    setSubmittedData(null);
  };

  return (
    <div>
      {submittedData ? (
        <div>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          <Button variant="primary" onClick={handleReset}>
            Reset Form
          </Button>
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="author">
            <Form.Label>Author:</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="genre">
            <Form.Label>Genre:</Form.Label>
            <Form.Control
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="yearPublished">
            <Form.Label>Year Published:</Form.Label>
            <Form.Control
              type="text"
              name="yearPublished"
              value={formData.yearPublished}
              onChange={handleChange}
              required
            />
          </Form.Group>
        <br></br>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};

export default BookForm;
