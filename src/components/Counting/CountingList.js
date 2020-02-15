import React from "react";
import {Col, Table} from "react-bootstrap";
import { useCalculationList } from "./Hooks"

export default function CountingList({categoryId}) {
  const calculations = useCalculationList(categoryId)

  const calculationItems = calculations.map(e => {
    return <tr key={e.id}>
      <th>{new Date(e.date).toLocaleString()}</th>
      <th>{e.status}</th>
      <th>{e.parameters}</th>
      <th>{e.result}</th>
    </tr>
  });

  return (
    <Col sm={12}>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Date</th>
          <th>Status</th>
          <th>Parameters</th>
          <th>Result</th>
        </tr>
        </thead>
        <tbody>
        {calculationItems}
        </tbody>
      </Table>
    </Col>);
}
