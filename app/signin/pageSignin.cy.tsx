import React from "react";
import Signin from "./page";
import "../globals.css";

describe("<Signin />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Signin />);
  });

  it("Should allow users to sign in to website", () => {
    cy.mount(<Signin />);
    cy.get("#email").eq(0).type("test@example.com");
    cy.get("#password").eq(0).type("test@example.com");
    cy.get(".space-y-4 > .w-full").click();
    cy.url().should("include", "/home");
  });

  it("Should allow users to click on a forgot password button", () => {
    cy.mount(<Signin />);
    cy.get(".cursor-pointer").click();
    cy.url().should("include", "/forgot-password");
  });
  it("Should allow users to click on a sign up button", () => {
    cy.mount(<Signin />);
    cy.get("#signin").click();
    cy.url().should("include", "/signup");
  });
});
