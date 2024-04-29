import React from "react";
import HomePage from "./page";

describe("Has Componenets", () => {
	it("renders", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<HomePage />);
	});
});

describe("Create a New List", () => {
	it("Allows users to create a new list", () => {
		cy.mount(<HomePage />);
		cy.get(".MuiDivider-wrapper > .MuiButtonBase-root").click();
		cy.get(":nth-child(3) > .MuiInputBase-root > #outlined-basic")
			.eq(0)
			.type("Component Test");
		cy.get(":nth-child(5) > .MuiInputBase-root > #outlined-basic")
			.eq(0)
			.type("Test Description");
		cy.get(".MuiBox-root > .MuiButtonBase-root").click();
		cy.contains("Component Test");
	});
});

describe("Edit List", () => {
	it("Allows user to edit list", () => {
		cy.mount(<HomePage />);
		cy.get(
			":nth-child(1) > .MuiPaper-root > .MuiCardActions-root > a > .MuiButtonBase-root"
		).click();
		cy.url().should("include", "/list");
	});
});
