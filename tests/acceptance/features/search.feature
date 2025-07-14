Feature: search
    As a user
    I want to search clothes
    So that I can buy clothes I like

    
Scenario: Search existing clothes
    Given a user has navigated to homepage
    When the user adds "shirt" to the search bar using the webUI
    Then card "shirt" should be displayed on the webUI