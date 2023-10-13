import { test } from '@playwright/test';

test('tests for searching a record and updating it', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByTestId('select-dropdown').getByLabel('​').click();
  await page.getByTestId('firstName').click();
  await page.getByLabel('Search...').click();
  await page.getByLabel('Search...').fill('IDM');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('row', { name: 'IDM ENG idm.test@idm.com 9999999999' }).getByTestId('first-name').click();
  await page.getByLabel('Choose date, selected date is Nov 18, 2021').click();
  await page.getByRole('gridcell', { name: '2', exact: true }).click();
  await page.getByLabel('Room Quantity').click();
  await page.getByLabel('Room Quantity').fill('4');
  await page.getByLabel('Cash').check();
  await page.getByLabel('Tags').click();
  await page.getByLabel('Tags').fill('car');
  await page.getByLabel('Tags').press('Enter');
  await page.getByLabel('I confirm the information given above').check();
  await page.getByRole('button', { name: 'UPDATE' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('row', { name: 'IDM PM idm.op@idm.com 1234567890' }).getByTestId('first-name').click();
  await page.getByRole('button', { name: 'DELETE' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});