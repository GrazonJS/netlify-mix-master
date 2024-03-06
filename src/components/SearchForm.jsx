import React from "react";
import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";

function SearchForm({ searchTerm }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="text"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button type="submit" disabled={isSubmitting} className="btn">
          {isSubmitting ? "Searching" : "Search"}
        </button>
      </Form>
    </Wrapper>
  );
}

export default SearchForm;
