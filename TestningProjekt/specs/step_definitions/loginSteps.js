import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

let emailCorrect = "exempel@school.net";
let passwordCorrect = "abc123";


// Scenario: Successful Login
Given("the user is on the login page", () => {
  cy.visit("http://localhost:7655/login.html");
  cy.get('[type="submit"]').should('be.visible');
});
When("the user enters their email and password",()=>{
    cy.get("#email").type(emailCorrect);
    cy.get("#password").type(passwordCorrect);
})
And ('clicks the login button',()=>{
    cy.get('[type="submit"]').click();
});
Then ('the schedule should be visible',()=> {
    cy.get('img').should('be.visible');
});

// Scenario: Failed Login with Incorrect Credentials

When('the user enters an incorrect username and password',()=>{
    cy.get("#email").type("felfelfel@coldmail.com");
    cy.get("#password").type("felfelfel");
  })

Then('the user should still be on the login page',()=>{
    cy.url().should('include', '/login');
});

// Scenario: Failed Login with Incorrect Credentials
When('the user leaves the username and password fields blank',()=>{

  })
