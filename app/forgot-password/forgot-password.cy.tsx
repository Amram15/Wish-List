import React from "react";
import ForgotPassword from "./page";
import "../globals.css";

describe("Components Exist", () => {
	it("Check Button Exists", () => {
		cy.mount(<ForgotPassword />);
		cy.get("#email").should("be.visible");
	});
	it("Check Text Box Exists", () => {
		cy.mount(<ForgotPassword />);
		cy.get(".space-y-6 > .w-full").should("be.visible");
	});
});

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

//Negative test case for tying invalid email
describe("User Enters invalid email", () => {
	it("Should not enable a button when users enter email", () => {
		cy.mount(<ForgotPassword />);

		cy.get("#email").eq(0).type("notAEmail");
		cy.get(".space-y-6 > .w-full").should("be.disabled");
	});
});
