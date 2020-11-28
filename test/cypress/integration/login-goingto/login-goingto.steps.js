import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

//TC01
Given('el usuario que digito su usuario y contraseña correctamente', () => {
  cy.visit('https://api-goingto.azurewebsites.net/api/register');
  cy.url().should('contains', 'https://api-goingto.azurewebsites.net/api/register');
});

When('de click en el botón -Ingresar-', () => {
    cy.visit('/register')
    cy.wait(2000)        
    cy.get('#email').type('angelesviviana@gmail.com')
    cy.get('#password').type('Test123')
    cy.get('.btn').click()
});

Then('se le mostrará la pantalla de inicio de los lugares a explorar', () => {
    cy.visit('/explore')
    cy.wait(2000)
    cy.contains('h1', 'Explore')
});


//TC02
Given('el usuario ingresa el valor de usuario', () => {
    cy.visit('/register')
    cy.wait(2000)    
    cy.get('#email').type('angelesviviana@gmail.com')
  });

And('el usuario ingresa valor de contraseña', () => {
    cy.wait(2000)    
    cy.get('#password').type('Test123!')
});
  
When('el usuario da click en el botón -Ingresar-', () => {
    cy.get('.btn').click()
});
  
Then('se muestra una ventana emergente con un mensaje de error', () => {
cy.log('Usuario o contraseña incorrecto')
});


//TC03
Given('el usuario ingresa el valor de usuario', () => {
    cy.visit('/register')
    cy.wait(2000)    
    cy.get('#email').type('angelesviviana@gmail.com')
  });

And('el usuario ingresa valor de contraseña', () => {
    cy.wait(2000)    
    cy.get('#password').should('have.value', '');
});
  
When('el usuario da click en el botón -Ingresar-', () => {
    cy.get('.btn').click()
});
  
Then('se muestra una ventana emergente con un mensaje de error', () => {
    cy.log('Verificar que el campo usuario y/o contraseña no estén vacíos')
});