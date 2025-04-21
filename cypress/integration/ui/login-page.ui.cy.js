describe("LoginPage: Given Login page opened", { testIsolation: false }, () => {
  before(() => {
    cy.visit("/");
  });
  context("LoginPage.STANDARD: When user observe the page", () => {
    it("LoginPage.STANDARD: Then user should see Title", () => {
      cy.get(selectors.loginPage.title).should("have.text", l10n.loginPage.title).and("be.visible");
    });
    it("LoginPage.STANDARD: Then user should see Username field with placeholder and empty value", () => {
      cy.get(selectors.loginPage.username).should("have.attr", "placeholder", l10n.loginPage.loginForm.username).and("have.value", "").and("be.visible");
    });
    it("LoginPage.STANDARD: Then user should see Password field with placeholder and empty value", () => {
      cy.get(selectors.loginPage.password).should("have.attr", "placeholder", l10n.loginPage.loginForm.password).and("have.value", "").and("be.visible");
    });
    it("LoginPage.STANDARD: Then user should see Login button", () => {
      cy.get(selectors.loginPage.loginButton).should("have.value", l10n.loginPage.loginForm.loginButton).and("be.visible").and("be.enabled");
    });
  });
  context("LoginPage.STANDARD: When user logins with valid credentials", () => {
    it.skip("LoginPage.STANDARD: Then user should navigate to the Inventory page", () => {
      // Not implemented yet
    });
  });
  context("LoginPage.STANDARD: When user logouts", () => {
    it.skip("LoginPage.STANDARD: Then user should navigate to the Login page", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then user should see Title", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then user should see Username field with placeholder and empty value", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then user should see Password field with placeholder and empty value", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then user should see Login button", () => {
      // Not implemented yet
    });
  });
  context("LoginPage.STANDARD: When user logins with empty Username", () => {
    it.skip("LoginPage.STANDARD: Then user should see error message that the Username field is required", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then error close button should be shown", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then username field should be highlighted and contain error icon", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then password field should be highlighted and contain error icon", () => {
      // Not implemented yet
    });
  });
  context("LoginPage.STANDARD: When user clicks on error close button after attempting to login with empty username field", () => {
    it.skip("LoginPage.STANDARD: Then error message should not be displayed", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then username field should not be highlighted and contain error icon", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then password field should not be highlighted and contain error icon", () => {
      // Not implemented yet
    });
  });
  context("LoginPage.STANDARD: When user logins with empty Password", () => {
    it.skip("LoginPage.STANDARD: Then user should see error message that the Password field is required", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then error close button should be shown", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then username field should be highlighted and contain error icon", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then password field should be highlighted and contain error icon", () => {
      // Not implemented yet
    });
  });
  context("LoginPage.STANDARD: When user clicks on error close button after attempting to login with empty password field", () => {
    it.skip("LoginPage.STANDARD: Then error message should not be displayed", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then username field should not be highlighted and contain error icon", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then password field should not be highlighted and contain error icon", () => {
      // Not implemented yet
    });
  });
  context("LoginPage.STANDARD: When user logins with wrong username", () => {
    it.skip("LoginPage.STANDARD: Then user should see error message that username or password is wrong", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then error close button should be shown", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then username field should be highlighted and contain error icon", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then password field should be highlighted and contain error icon", () => {
      // Not implemented yet
    });
  });
  context("LoginPage.STANDARD: When user clicks on error close button after attempting to login with wrong username", () => {
    it.skip("LoginPage.STANDARD: Then error message should not be displayed", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then username field should not be highlighted and contain error icon", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then password field should not be highlighted and contain error icon", () => {
      // Not implemented yet
    });
  });
  context("LoginPage.STANDARD: When user logins with wrong password", () => {
    it.skip("LoginPage.STANDARD: Then user should see error message that username or password is wrong", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then error close button should be shown", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then username field should be highlighted and contain error icon", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then password field should be highlighted and contain error icon", () => {
      // Not implemented yet
    });
  });
  context("LoginPage.STANDARD: When user clicks on error close button after attempting to login with wrong password", () => {
    it.skip("LoginPage.STANDARD: Then error message should not be displayed", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then username field should not be highlighted and contain error icon", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then password field should not be highlighted and contain error icon", () => {
      // Not implemented yet
    });
  });
  context("LoginPage.STANDARD: When user refresh the page with filled in username and password fileds", () => {
    it.skip("LoginPage.STANDARD: Then user should see Title", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then user should see Username field with placeholder and empty value", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then user should see Password field with placeholder and empty value", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.STANDARD: Then user should see Login button", () => {
      // Not implemented yet
    });
  });
  context("LoginPage.LOCKED: When user logins with locked account", () => {
    it.skip("LoginPage.LOCKED: Then user should see error message that user is locked out", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.LOCKED: Then error close button should be shown", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.LOCKED: Then username field should be highlighted and contain error icon", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.LOCKED: Then password field should be highlighted and contain error icon", () => {
      // Not implemented yet
    });
  });
  context("LoginPage.LOCKED: When user clicks on error close button after attempting to login with locked account", () => {
    it.skip("LoginPage.LOCKED: Then user should not see error message that user is locked out", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.LOCKED: Then username field should not be highlighted and contain error icon", () => {
      // Not implemented yet
    });
    it.skip("LoginPage.LOCKED: Then password field should not be highlighted and contain error icon", () => {
      // Not implemented yet
    });
  });
});
