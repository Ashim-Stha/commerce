const HomePage = require("../pages/HomePage");

const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

let homePage, resultsPage;

Given("a user has navigated to homepage", async function () {
  homePage = new HomePage(global.page);
  await homePage.navigateToHomePage();
});

When(
  "the user adds {string} to the search bar using the webUI",
  async function (string) {
    resultsPage = await homePage.searchClothes(string);
  }
);

Then("card {string} should be displayed on the webUI", async function (string) {
  for (const result of await resultsPage.getResults()) {
    await expect(result).toContainText("Shirt");
  }
});
