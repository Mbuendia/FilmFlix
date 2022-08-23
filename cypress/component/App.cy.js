import React from 'react';
import { mount } from 'cypress/react'
import App from '../../src/components/App';

describe('App.cy.js', () => {

  const items = [];
  it('mount ActiveLink', () => {
    // Arrange
    mount(<App />)
    // Assert
    cy.get('.wrapper').
  })
})
