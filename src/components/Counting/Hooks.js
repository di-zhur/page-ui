import {useEffect, useState} from "react";
import Http from "axios";
import {CATEGORY_URL, CALCULATION_FIND_URL} from "../../constants/ApiConstants";

export function useCalculationSchema(categoryId) {
  const [schema, setSchema] = useState( {});

  async function fetchSchema() {
    const result = await Http.get(CATEGORY_URL);
    setSchema(result.data);
  }

  useEffect(() => {
    fetchSchema();
  }, [categoryId]);

  return schema;
}

export function useCalculationList(categoryId) {
  const [calculations, setCalculations] = useState( []);

  async function fetchCalculations() {
    const result = await getCalculations(categoryId);
    setCalculations(result.data);
  }

  useEffect(() => {
    fetchCalculations();
  }, [categoryId]);

  return [calculations, setCalculations];
}

export const getCalculations = (categoryId) => {
  return Http.get(CALCULATION_FIND_URL, {
    params: {
      userId: 1,
      categoryId: 1
    }
  });
};
