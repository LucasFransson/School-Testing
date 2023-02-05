// Cypress.Commands.add('login', (username, password) => {
//     cy.visit("http://localhost:7655/login.html");
//     cy.get("#email").type(username);
//     cy.get("#password").type(password);
//     cy.get('[type=submit]').click();
//   });

// Given('Given the user is logged in ', () => {
//     beforeEach(() => {
//       cy.login();
//     })



 // Since I had no real html code to base this test-code upon, I used selectors based on a html layout that I probably would have used now if I tried to design the html code using what i've learned in this course
 // For example the 'cy.get('.sidebar-button-personal').click();' html hierarchy would look something like this
 //<Body>
 //    <div class = "wrapper">
 //         <section class ="sidebar">
 //             <section class = "sidebar-buttons">
 //                  <button class ="sidebar-button">



 Given('Given the user is logged in ', () => {
    cy.visit("http://localhost:7655/login.html");
    cy.get("#email").type(username);
    cy.get("#password").type(password);
    cy.get('[type=submit]').click();
})

And ('the user is on the administration page',()=>{
    cy.visit('http://localhost:7655/login.html/admin');
})

When('the user clicks on #My Schedule',()=>{
    cy.get('.sidebar-button-personal').click();
})

Then ('the Personal Schedule page should open',()=>{
    cy.url.should('include','/admin/#/personal')
})


And ('the user is on the Personal Schedule page',()=>{
    cy.url.should('include','/admin/#/personal')
})

When('the user clicks #Show Schedule',()=>{
    cy.get('[personal-schedule="my-schedule-button"]').click();
})

Then('the planned activities for the user should display',()=>{
    cy.get('[personal-schedule="personal-table-schedule"]').should('exist');
})


When('the user clicks on the first item',()=>{
    cy.get('[personal-schedule = "personal-schedule-item]').first().click();
})
Then('a pop-up with detailed information about the item should display',()=>{
    cy.get('[data-test="activity-details-popup"]').should('exist');
    cy.get('[data-test="activity-details-popup"]h2').should('have.length.greaterThan', 0);    // Checking for a activity title to exist
})

