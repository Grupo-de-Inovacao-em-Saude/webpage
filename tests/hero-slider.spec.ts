// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Hero Slider', () => {
  test('should automatically rotate to the second slide', async ({ page }) => {
    await page.goto('./index.html');

    const slides = await page.locator('#home .slide').all();
    const dots = await page.locator('.slider-dots button').all();

    await expect(slides[0]).toHaveClass(/active/);
    await expect(dots[0]).toHaveClass(/bg-white/);
    await expect(slides[1]).not.toHaveClass(/active/);
    await expect(dots[1]).not.toHaveClass(/bg-white/);

    await page.waitForTimeout(7100);

    await expect(slides[0]).not.toHaveClass(/active/);
    await expect(dots[0]).not.toHaveClass(/bg-white/);
    await expect(slides[1]).toHaveClass(/active/);
    await expect(dots[1]).toHaveClass(/bg-white/);
  });
});
