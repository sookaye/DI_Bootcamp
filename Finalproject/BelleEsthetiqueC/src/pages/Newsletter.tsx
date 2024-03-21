// Update the import statements at the top of your React component file
import { useState, ChangeEvent, FormEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// ... (import statements)

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const emailValue = email; // Assuming email is a state variable in your component

      const response = await fetch('http://localhost:3002/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue }),
      });

      const result = await response.json();

      if (result.success) {
        console.log('Successfully subscribed:', result.data);
        setSubscriptionSuccess(true);
      } else {
        console.error('Subscription failed:', result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    // Reset the subscription success message when email changes
    setSubscriptionSuccess(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {subscriptionSuccess && (
        <p className="success-message">Subscription successful! Thank you for subscribing.</p>
      )}
      <Row className="intro">
        <h2 className="titlep">Subscribe to our Newsletter</h2>
      </Row>
      <Form.Group as={Row} className="mb-3 news" controlId="formHorizontalEmail">
        <Col sm={8}>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </Col>
        <Col sm={{ span: 2 }}>
          <Button type="submit">Subscribe</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}
