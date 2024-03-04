import React from "react";
import ProfilePage from "./page";
import "../globals.css";

describe("<ProfilePage />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProfilePage />);
  });

  it("Should allow users to edit their profile", () => {
    cy.mount(<ProfilePage />);
    cy.get("button").click();
    cy.get("#fullName").eq(0).type("NewName");
    cy.get("#phoneNumber").eq(0).type("1234");
    cy.get("button").click();
  });
});
