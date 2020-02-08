import React, { useState, useEffect } from 'react';
//import CalculationApi from "../../../api/CalculationApi";
import Form from "react-jsonschema-form";
import axios from "axios";

//const calculationApi = new CalculationApi();

export default function ItemForm() {
  const [schema, setSchema] = useState( {});

  async function fetchSchema() {
    const result = await axios.get(`http://localhost:5000/api/v1/category/getSchemaParameters/1`);
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
