import { test as teardown } from "@playwright/test";

teardown.describe("teardown", () => {
  teardown("teardown", async () => {
    console.log("teardown step");
  });
});
