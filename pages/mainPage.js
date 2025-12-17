import { expect } from "@playwright/test";

export class MainPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.getByText("Create your own unique");
    this.searchField = page.getByRole("textbox", { name: "Search" });
    this.playlistTotalDuration = page.getByTestId("playlist-duration");
    this.trackList = page.locator("#tracklist");
    this.trackItem = this.trackList.locator(".MuiGrid-root.MuiGrid-container");
    this.playList = page.getByTestId("playlist");
    this.playListItem = this.playList.locator(
      ".MuiGrid-root.MuiGrid-container"
    );
  }

  async open() {
    await this.page.goto("https://vite-react-alpha-lemon.vercel.app/");
  }
  async reload() {
    await this.page.reload();
  }

  async waitForTrackList() {
    await this.trackItem.first().waitFor();
  }

  convertToSeconds(time) {
    const [minutes, seconds] = time.split(":").map(Number);
    return minutes * 60 + seconds;
  }

  async getPlaylistTotalDurationFromUI() {
    const text = await this.playlistTotalDuration.textContent();
    return Number(text);
  }

  async searchTrack(name) {
    await this.searchField.fill(name);
  }

  getTrackItem(index) {
    return this.trackItem.nth(index);
  }

  getTrackTitle(index) {
    return this.getTrackItem(index).locator(".MuiTypography-root").nth(0);
  }

  getTrackDuration(index) {
    return this.getTrackItem(index).getByText(/\d{2}:\d{2}/);
  }

  async clickAddButton(index) {
    await this.getTrackItem(index).getByRole("button", { name: "+" }).click();
  }

  async expectAllTracksContain(text) {
    const trackCount = await this.trackItem.count();

    expect(trackCount).toBeGreaterThan(0);

    for (let i = 0; i < trackCount; i++) {
      const title = await this.getTrackTitle(i).textContent();
      expect(title.toLowerCase()).toContain(text.toLowerCase());
    }
  }

  async expectTrackInPlaylist(title) {
    const playListTitles = this.playListItem
      .locator(".MuiTypography-root")
      .nth(0);

    await expect(playListTitles).toContainText(title);
  }
}
