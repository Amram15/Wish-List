import React from "react";
import List from "./page";

describe("<List />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<List />);
  });

  it("should allow user to create items in the list", () => {
    cy.mount(<List />);
    cy.viewport(1000, 750);
    cy.get(".MuiDivider-wrapper > .MuiButtonBase-root").click();
    cy.get('[data-field="name"] > .MuiInputBase-root > .MuiInputBase-input')
      .eq(0)
      .type("test-list");
    cy.get('[data-field="notes"] > .MuiInputBase-root > .MuiInputBase-input')
      .eq(0)
      .type("test-note");
    cy.get('[data-field="link"] > .MuiInputBase-root > .MuiInputBase-input')
      .eq(0)
      .type("test-link");
    cy.get(".css-uxfybn-MuiButtonBase-root-MuiIconButton-root").click();
    cy.contains("test-list");
  });

  it("should allow user to delete items in the list", () => {
    cy.mount(<List />);
    cy.viewport(1000, 750);
    cy.get(".Mui-selected > .actions");
  });

  it("should allow user to edit items in the list", () => {
    cy.mount(<List />);
    cy.viewport(1000, 750);
    cy.get(".Mui-selected > .actions");
  });

  it("should allow user to move to home page", () => {
    cy.mount(<List />);
    cy.viewport(1000, 750);
    cy.get("a > .MuiButtonBase-root").click();
    cy.url().should("include", "/home");
  });
});
