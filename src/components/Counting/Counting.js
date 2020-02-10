import React, { useState, useEffect } from 'react';
import Form from "react-jsonschema-form";
import Http from "axios";
import {CATEGORY_URL} from "../../constants/ApiConstants"

export default function Counting({categoryId}) {
  const [schema, setSchema] = useState( {});

  async function fetchSchema() {
    const result = await Http.get(CATEGORY_URL);
    setSchema(result.data);
  }

  useEffect(() => {
    fetchSchema();
  }, [categoryId]);

  function onSubmitForm({formData}, e) {
    console.log("Data submitted: ",  formData);
  }

  const onErrorForm = (errors) => {
    console.log("I have", errors.length, "errors to fix");
  }

  const onSubmit = ({formData}, e) => console.log("Data submitted: ",  formData);

  return (
    <div>
      <Form schema={schema}
            onSubmit={onSubmitForm}
            onError={onErrorForm} />
    </div>
  );

}
