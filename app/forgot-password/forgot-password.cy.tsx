import React from "react";
import ForgotPassword from "./page";
import "../globals.css";

describe("User Forgot Password", () => {
  it("should display an input field for email address", () => {
    cy.mount(<ForgotPassword />);

    cy.get("#email").eq(0).type("test@example.com");
  });

  it("Should enable a button when users enter email", () => {
    cy.mount(<ForgotPassword />);

    cy.get("#email").eq(0).type("test@example.com");
    cy.get(".space-y-6 > .w-full").should("not.be.disabled");
  });
});
