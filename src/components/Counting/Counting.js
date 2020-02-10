import React  from 'react';
import Form from "react-jsonschema-form";
import { useCalculationSchema } from "./hooks"

export default function Counting({categoryId}) {
  const schema = useCalculationSchema(categoryId);

  function onSubmitForm({formData}, e) {
    console.log("Data submitted: ",  formData);
  }

  const onErrorForm = (errors) => {
    console.log("I have", errors.length, "errors to fix");
  }

  return (
    <div>
      <Form schema={schema}
            onSubmit={onSubmitForm}
            onError={onErrorForm} />
    </div>
  );

}
