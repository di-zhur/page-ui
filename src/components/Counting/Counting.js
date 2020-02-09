import React, { useState, useEffect } from 'react';
import Form from "react-jsonschema-form";
import Http from "axios";
import {CATEGORY_URL} from "../../util/ApiConstants"

export default function Counting() {
  const [schema, setSchema] = useState( {});

  async function fetchSchema() {
    const result = await Http.get(CATEGORY_URL);
    setSchema(result.data);
  }

  useEffect(() => {
    fetchSchema();
  }, []);

  const onSubmitForm = ({formData}, e) => {
    console.log("Data submitted: ",  formData);
  }

  const onErrorForm = (errors) => {
    console.log("I have", errors.length, "errors to fix");
  }

  const onSubmit = ({formData}, e) => console.log("Data submitted: ",  formData);

  return (
    <div>
      <Form schema={schema}
            onSubmit={onSubmit}
            onError={onErrorForm} />
    </div>
  );

}
