import Http from "axios";
import {CATEGORY_URL} from "../../constants/ApiConstants";
import {useEffect, useState} from "react";

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
