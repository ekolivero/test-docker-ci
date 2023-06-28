import { test, expect } from '@playwright/test';

test('has correct div value', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  
  const div = await page.$('div');
  const text = await div?.innerText();
  expect(text).toBe('Hello world');
});