import { test } from "@playwright/test";
import { MainPage } from "../pages/mainPage";

test("Search filters", async ({ page }) => {
  const playlist = new MainPage(page);
  const searchValue = 's';

  await playlist.open();
  await playlist.searchTrack(searchValue.toLowerCase());
  await playlist.expectAllTracksContain(searchValue);

});
