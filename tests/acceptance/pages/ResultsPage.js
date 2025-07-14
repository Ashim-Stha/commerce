class ResultsPage {
  page;
  resultsSection;

  constructor(page) {
    this.page = page;
    this.resultsSection = this.page.locator("a.ProductCard_root__HqXTt");
  }

  async getResults() {
    let resultsName = [];
    const results = await this.resultsSection.all();
    for (const result of results) {
      resultsName.push(result);
    }
    return resultsName;
  }
}

module.exports = ResultsPage;
