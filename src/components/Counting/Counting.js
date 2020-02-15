import React  from 'react';
import Form from "react-jsonschema-form";
import {useCalculationList, useCalculationSchema, getCalculations} from "./Hooks"
import {CALCULATION_CREATE_URL} from "../../constants/ApiConstants";
import Http from "axios";
import {Col, Table, Button} from "react-bootstrap";

export default function Counting({categoryId}) {
  const schema = useCalculationSchema(categoryId);
  const [calculations, setCalculations] = useCalculationList(categoryId);

  async function onSubmitForm({formData}, e) {
    const result = await Http.post(CALCULATION_CREATE_URL, formData);
    if (result.status === 201) {
      const result = await getCalculations(categoryId);
      setCalculations(result.data);
    }
  }

  const onErrorForm = (errors) => {
    console.log("error submit", errors);
  }

  const calculationItems = calculations.map(e => {
    return <tr key={e.id}>
      <th>{new Date(e.date).toLocaleString()}</th>
      <th>{e.status}</th>
      <th>{e.parameters}</th>
      <th>{e.result}</th>
      <th><Button variant="info">Details</Button></th>
    </tr>
  });

  return (
    <div>
      <div>
        <Form schema={schema}
              onSubmit={onSubmitForm}
              onError={onErrorForm} />
      </div>
      <div className="pt-5">
        <h4>Latest</h4>
        <Col sm={12}>
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
              <th>Parameters</th>
              <th>Result</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {calculationItems}
            </tbody>
          </Table>
        </Col>
      </div>
    </div>
  );
}
