import React from "react";
import Signin from "./page";
import "../globals.css";

describe("Rendering In", () => {
	it("renders", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<Signin />);
	});
});

describe("Signing In", () => {
	it("renders", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<Signin />);
	});

	it("Should allow users to sign in to website", () => {
		cy.mount(<Signin />);
		cy.get("#email").eq(0).type("test@example.com");
		cy.get("#password").eq(0).type("Test123");
		cy.get(".space-y-4 > .w-full").click();
		cy.url().should("include", "/home");
	});
});

describe("Wrong User Name", () => {
	it("Should allow users to sign in to website", () => {
		cy.mount(<Signin />);
		cy.get("#email").eq(0).type("");
		cy.get("#password").eq(0).type("test@example.com");
		cy.get(".space-y-4 > .w-full").click();
		cy.url().should("include", "/signin");
	});
});

describe("Wrong Password", () => {
	it("Should allow users to sign in to website", () => {
		cy.mount(<Signin />);
		cy.get("#email").eq(0).type("test@example.com");
		cy.get("#password").eq(0).type("");
		cy.get(".space-y-4 > .w-full").click();
		cy.url().should("include", "/signin");
	});
});