import React from "react";
import ProfilePage from "./page";
import "../globals.css";

describe("Rendering page", () => {
	it("renders", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<ProfilePage />);
	});
});

describe("Edit Name", () => {
	it("Should allow users to edit their profile", () => {
		cy.mount(<ProfilePage />);
		cy.get("button").click();
		cy.get("#fullName").eq(0).type("NewName");
		cy.get("#phoneNumber").eq(0).type("1234");
		cy.get("button").click();
		cy.get(".profile-details > :nth-child(1)").contains(
			new RegExp("NewName", "g")
		);
	});
});

describe("Edit Phone", () => {
	it("Should allow users to edit their profile", () => {
		cy.mount(<ProfilePage />);
		cy.get("button").click();
		cy.get("#fullName").eq(0).type("NewName");
		cy.get("#phoneNumber").eq(0).type("1234");
		cy.get("button").click();
		cy.get(".profile-details > :nth-child(3)").contains(
			new RegExp("1234", "g")
		);
	});
});

describe("Edit Phone Should only be numbers", () => {
	it("Should allow users to edit their profile", () => {
		cy.mount(<ProfilePage />);
		cy.get("button").click();
		cy.get("#fullName").eq(0).type("NewName");
		cy.get("#phoneNumber").eq(0).type("abcd");
		cy.get("button").click();
		cy.get(".profile-details > :nth-child(3)").should((value) => {
			expect(Number.isInteger(+value), "input should be an integer").to.eq(
				true
			); // passes
		});
	});
});
