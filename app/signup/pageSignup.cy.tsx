import React from "react";
import Signup from "./page";
import "../globals.css";

describe("Create Account", () => {
	it("renders", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<Signup />);
	});
	it("Should allow users to sign up", () => {
		cy.mount(<Signup />);
		cy.get("#email").eq(0).type("test@example.com");
		cy.get("#password").eq(0).type("projectBugButcher#24");
		cy.get("#passwordConfirm").eq(0).type("projectBugButcher#24");
		cy.get("#signup").should("not.be.disabled");
	});
});

describe("Not Valid Email", () => {
	it("Should allow users to sign up", () => {
		cy.mount(<Signup />);
		cy.get("#email").eq(0).type("test");
		cy.get("#password").eq(0).type("projectBugButcher#24");
		cy.get("#passwordConfirm").eq(0).type("projectBugButcher#24");
		cy.get("#signup").should("be.disabled");
	});
});

describe("Passwords don't match", () => {
	it("Should allow users to sign up", () => {
		cy.mount(<Signup />);
		cy.get("#email").eq(0).type("test@example.com");
		cy.get("#password").eq(0).type("projectBugButcher#24");
		cy.get("#passwordConfirm").eq(0).type("incorrectPassword");
		cy.get("#signup").should("be.disabled");
	});
});

describe("No Email Was Entered", () => {
	it("Should allow users to sign up", () => {
		cy.mount(<Signup />);
		cy.get("#password").eq(0).type("projectBugButcher#24");
		cy.get("#passwordConfirm").eq(0).type("projectBugButcher#24");
		cy.get("#signup").should("be.disabled");
	});
});

describe("Password was Not Entered", () => {
	it("Should allow users to sign up", () => {
		cy.mount(<Signup />);
		cy.get("#email").eq(0).type("test@example.com");
		cy.get("#passwordConfirm").eq(0).type("projectBugButcher#24");
		cy.get("#signup").should("be.disabled");
	});
});

describe("Confirm was Not Entered", () => {
	it("Should allow users to sign up", () => {
		cy.mount(<Signup />);
		cy.get("#email").eq(0).type("test@example.com");
		cy.get("#password").eq(0).type("projectBugButcher#24");
		cy.get("#signup").should("be.disabled");
	});
});