import { test } from "@playwright/test";
import { MainPage } from "../pages/mainPage";

test("Add track using + button", async ({ page }) => {
  const playlist = new MainPage(page);

  await playlist.open();
  const trackIndex = 0;
  const trackTitle = await playlist.getTrackTitle(trackIndex).textContent();

  await playlist.clickAddButton(trackIndex);
  await playlist.expectTrackInPlaylist(trackTitle);
});
