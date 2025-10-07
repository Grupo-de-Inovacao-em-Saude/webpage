# Handling Git Merge Conflicts in This Project

Merging the website updates from GitHub into your local `work` branch can surface conflicts because many files share the same sections (for example, the navigation markup and shared asset links). Instead of blindly accepting the “incoming” version, walk through the following steps so you keep the best parts of both histories.

## 1. Fetch and review before merging
1. Run `git fetch origin` to download the latest commits without touching your working tree.
2. Inspect the differences with `git log --oneline --graph --decorate --all` and `git diff origin/main...work` to see what changed on each side before attempting a merge.

## 2. Start the merge and inspect conflict markers
* Run `git merge origin/main` (replace `main` with the branch you are syncing against).
* Git will pause on conflicts and add markers in the affected files:
  ```html
  <<<<<<< HEAD
  <!-- Your local version -->
  =======
  <!-- Incoming version from origin/main -->
  >>>>>>> origin/main
  ```
* Never accept an entire side without looking. Each conflict usually contains both a “current” block (your local work) and an “incoming” block (the remote update). Decide which portions of each block you actually need.

## 3. Decide how to reconcile each conflict
* **Keep both when the sections are complementary.** Copy the essential pieces from each block and delete the markers.
* **Choose one side when the other is obsolete.** For example, if the remote branch removes an inline `<style>` that you already extracted to `assets/css/site.css`, keep your cleaned-up version and delete the outdated block.
* **Rename or update asset paths together.** All HTML pages should load `assets/css/site.css` and `assets/js/site.js`; make sure the final conflict resolution preserves those `<link>` and `<script>` tags.

## 4. Test locally before committing
1. Run `npm install` and your Playwright tests if you use them (`npx playwright test`).
2. Open the affected HTML files in a browser to confirm the layout, shared styling, and parallax interactions still behave correctly after the merge.

## 5. Finish the merge
1. Stage the resolved files: `git add <file> ...`
2. Commit the merge: `git commit`
3. Push the updated branch: `git push origin work`

Taking the time to review each conflict protects you from accidentally discarding the recent refactors (shared CSS/JS, parallax hero, updated researcher links) while still incorporating improvements that landed on GitHub.
