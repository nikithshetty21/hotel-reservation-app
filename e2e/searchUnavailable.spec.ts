import { test, expect } from '@playwright/test';

test('tests for unavailable record', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByTestId('select-dropdown').getByLabel('​').click();
  await page.getByTestId('firstName').click();
  await page.getByLabel('Search...').click();
  await page.getByLabel('Search...').fill('ABC');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('No Result for the entered input').click();
});