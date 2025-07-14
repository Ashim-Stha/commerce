const ResultsPage = require("./ResultsPage");

const URL = "https://commerce-v1.vercel.store";

class HomePage {
  page;
  searchBox;

  constructor(page) {
    this.page = page;
    this.searchBox = this.page.locator('//*[@id="search"]');
  }

  async navigateToHomePage() {
    await this.page.goto(URL);
    await this.searchBox.waitFor();
  }

  async searchClothes(name) {
    await this.searchBox.fill(name);
    await this.page.keyboard.press("Enter");
    const resultsPage = new ResultsPage(this.page);
    return resultsPage;
  }
}

module.exports = HomePage;
