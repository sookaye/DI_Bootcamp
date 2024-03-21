import { useState, ChangeEvent } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';
import storeItems from '../data/items.json';

export function Store() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(storeItems);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = storeItems.filter((item) =>
      item.name.toLowerCase().includes(term)
    );

    setFilteredItems(filtered);
  };

  return (
    <>
      <Form.Control
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-3"
      />

      <Row md={2} xs={1} lg={4} className="g-3 store">
        {filteredItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
