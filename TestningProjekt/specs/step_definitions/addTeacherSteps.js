import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

let email = "exempel@school.net";
let password = "abc123";

Given ('Im logged in and on the teachers page',()=>{
  cy.visit("http://localhost:7655/login.html");
  cy.get('#email').type(email);
  cy.get("#password").type(password);
  cy.get('[type="submit"]').click(); 
  cy.url().should('include','/');
  cy.visit('/admin/#/teachers');
})


//Scenario: As an admin I want to open the Register New Teacher page
Given ('that I am on the teachers page',()=>{
   cy.url().should('include','/admin/#/teachers' );
   
})
When("I click on Create button",()=>{
    
  cy.get('.MuiToolbar-root > a.MuiButton-root').click(); // 
  }) ;

Then ('I should see the Save button',()=> {
  cy.get('[type="submit"]').should('be.visible');
  cy.get('button[type="submit"]').should('not.be.enabled');  // Include this in the Gherkin 
  });
  

  //Scenario: As an admin I want to be able to click on the save button 
  Given ('that I am on the Register New Teacher page',()=>{
    cy.visit('/admin/#/teachers/create');
    cy.url().should('include','/admin/#/teachers/create');
    cy.get('button[type="submit"]').should('not.be.enabled');
  });
  When ('I have filled in all the fields',()=>{
    cy.get('#email').type("test");
    cy.get("#password").type("test");
    cy.get("#firstname").type("test");
    cy.get("#lastname").type("test");
    cy.get("#initials").type("test");
    cy.get("#phone").type("112");
    cy.get('#mui-component-select-roles').click();
    
    cy.contains('user').click();

  });
  Then ('the Save button should be clickable',()=>{
    cy.get('button[type="submit"]').should('be.enabled');
  });

  //Scenario: As an admin I want to create a new teacher
  Given ('that I am on the Register New Teacher page and filled in all information',()=>{
    cy.visit('/admin/#/teachers/create');
    cy.url().should('include','/admin/#/teachers/create');
    cy.get('#email').type("test@test.se");
    cy.get("#password").type("test");
    cy.get("#firstname").type("test");
    cy.get("#lastname").type("testsson");
    cy.get("#initials").type("tt");
    cy.get("#phone").type("112");
    cy.get('#mui-component-select-roles').click();
    cy.contains('user').click();
  });
  When('I click on the Save button',()=>{
    cy.get('button[type="submit"]').click({force: true});
  });
  Then('a new teacher should be in the database',()=>{
    cy.task('queryDb','SELECT firstname, FROM teachers WHERE firstname = "test"').should('have.length',1)
  })
