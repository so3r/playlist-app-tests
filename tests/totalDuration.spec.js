import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/mainPage";

test("Verify total duration of playlist in seconds", async ({ page }) => {
  const playlist = new MainPage(page);

  await playlist.open();
  await playlist.waitForTrackList();

  const indexesToAdd = [0, 1, 2];
  let expectedTotalSeconds = 0;

  for (const index of indexesToAdd) {
    const durationText = await playlist.getTrackDuration(index).textContent();

    expectedTotalSeconds += playlist.convertToSeconds(durationText);
    await playlist.clickAddButton(index);
  }

  const actualTotalSeconds = await playlist.getPlaylistTotalDurationFromUI();

  expect(actualTotalSeconds).toBe(expectedTotalSeconds);
});
