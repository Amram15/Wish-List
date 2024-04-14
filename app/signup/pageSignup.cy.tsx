import React from "react";
import Signup from "./page";
import "../globals.css";

describe("<Signup />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Signup />);
  });
  it("Should allow users to sign up", () => {
    cy.mount(<Signup />);
    cy.get("#email").eq(0).type("test@example.com");
    cy.get("#password").eq(0).type("test1234");
    cy.get("#passwordConfirm").eq(0).type("test1234");
    cy.get("#signup").click();
  });
});
