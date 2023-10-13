import { test } from '@playwright/test';

test('tests adding a record and updating it', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Add New Reservation' }).click();
  await page.locator('div').filter({ hasText: /^Date of Arrival$/ }).getByLabel('Choose date, selected date is Apr 17, 2022').click();
  await page.getByRole('gridcell', { name: '4', exact: true }).click();
  const ele = page.getByLabel('Room Quantity');
  await ele.waitFor({state: "visible"});
  // await page.locator('#room-size').click();
  // await page.getByTestId('business-suite').click();
  //await page.getByLabel('Room Quantity').click();
  await ele.click();
  await ele.fill('1');
  await page.getByLabel('First Name *').click();
  await page.getByLabel('First Name *').fill('Nikith');
  await page.getByLabel('Last Name *').click();
  await page.getByLabel('Last Name *').fill('Shetty');
  await page.getByLabel('E-Mail *').click();
  await page.getByLabel('E-Mail *').fill('nikithshetty5@gmail.com');
  await page.getByLabel('Phone Number *').click();
  await page.getByLabel('Phone Number *').fill('9999999999');
  await page.getByLabel('Street Name').click();
  await page.getByLabel('Street Name').fill('Kaneff');
  await page.getByLabel('Zip').click();
  await page.getByLabel('Zip').fill('L5A3Y5');
  await page.getByLabel('State').click();
  await page.getByLabel('State').fill('ON');
  await page.getByLabel('City').click();
  await page.getByLabel('City').fill('Mississauga');
  await page.locator('#extra-utility').click();
  await page.getByTestId('extraTV').click();
  await page.getByTestId('extraParking').click();
  await page.locator('#menu- div').first().click();
  await page.getByLabel('Cash').check();
  await page.getByLabel('Personal Note').click();
  await page.getByLabel('Personal Note').fill('abcd');
  await page.getByLabel('Personal Note').press('Enter');
  await page.getByLabel('Tags').click();
  await page.getByLabel('Tags').fill('abc');
  await page.getByLabel('Tags').press('Enter');
  await page.getByLabel('Send me a Reminder').check();
  await page.getByLabel('Subscribe to newsletter').check();
  await page.getByLabel('I confirm the information given above').check();
  await page.getByRole('button', { name: 'ADD' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByTestId('select-dropdown').getByLabel('​').click();
  await page.getByTestId('firstName').click();
  await page.getByLabel('Search...').click();
  await page.getByLabel('Search...').fill('Nikith');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByTestId('first-name').click();
  await page.getByLabel('Room Quantity').click();
  await page.getByLabel('Room Quantity').fill('5');
  await page.getByRole('button', { name: 'UPDATE' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});