import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const SearchBar = ({ city, onCityChange, onSearch }) => {
  return (
    <div className="search-bar">
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          aria-label="City Name"
        />
        <Button variant="primary" onClick={onSearch}>Search</Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
