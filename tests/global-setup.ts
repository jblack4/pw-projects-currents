import { test as setup } from "@playwright/test";

setup.describe("setup", () => {
  const credentials = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
  ];

  for (const credential of credentials) {
    setup(`setup for ${credential.username}`, () => {
      console.log(`setup for ${credential.username}`);
    });
  }
});
