import React  from 'react';
import Form from "react-jsonschema-form";
import { useCalculationSchema } from "./Hooks"
import {CALCULATION_CREATE_URL} from "../../constants/ApiConstants";
import Http from "axios";

export default function CountingForm({categoryId}) {
  const schema = useCalculationSchema(categoryId);

  async function onSubmitForm({formData}, e) {
    const result = await Http.post(CALCULATION_CREATE_URL, formData);
    alert(result);
    console.log("Data submitted: ",  formData, result);
  }

  const onErrorForm = (errors) => {
    console.log("error submit", errors);
  }

  return (
    <div>
      <Form schema={schema}
            onSubmit={onSubmitForm}
            onError={onErrorForm} />
    </div>
  );

}
