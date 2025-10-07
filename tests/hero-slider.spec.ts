import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const activeClassPattern = /(?:^|\s)active(?:\s|$)/;
const whiteDotClassPattern = /(?:^|\s)bg-white(?:\s|$)/;

test.describe('Hero Slider', () => {
  test('should automatically rotate to the second slide', async ({ page }) => {
    const filePath = path.join(process.cwd(), 'index.html');
    const fileUrl = pathToFileURL(filePath).href;

    await page.goto(fileUrl);

    const slides = await page.locator('#home .slide').all();
    const dots = await page.locator('.slider-dots button').all();

    await expect(slides[0]).toHaveClass(activeClassPattern);
    await expect(dots[0]).toHaveClass(whiteDotClassPattern);
    await expect(slides[1]).not.toHaveClass(activeClassPattern);
    await expect(dots[1]).not.toHaveClass(whiteDotClassPattern);

    await page.waitForTimeout(7100);

    await expect(slides[0]).not.toHaveClass(activeClassPattern);
    await expect(dots[0]).not.toHaveClass(whiteDotClassPattern);
    await expect(slides[1]).toHaveClass(activeClassPattern);
    await expect(dots[1]).toHaveClass(whiteDotClassPattern);
  });
});
