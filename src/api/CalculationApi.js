export default class CalculationApi {

  constructor() {
    this.url = `http://localhost:5000/api/v1/category/getSchemaParameters/1`;
  }

  async getSchemaParameters() {
    try {
      const response = await fetch(this.url);
      const result = await response.json();
      return result;
    } catch (err) {
      console.log('getSchemaParameters failed', err);
    }
  }

}
