import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yeetcommerce.com/',{ waitUntil: 'commit', timeout: 60000 });
    await page.waitForTimeout(5000); 
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Create My Free Store' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Login' }).click();
  await page1.getByRole('textbox', { name: 'Email*' }).fill('umemusfirahh@gmail.com');
  await page1.getByRole('textbox', { name: 'Password*' }).click();
  await page1.getByRole('textbox', { name: 'Password*' }).fill('Musfi@next');
  await page1.getByRole('button', { name: 'Login' }).click();
await page.waitForTimeout(5000); 
  const button = await page.locator('#add-new-dropDown');
await button.click();

  await page1.getByRole('button', { name: 'Add New Category' }).click();

  await page1.getByRole('textbox', { name: 'Name*' }).click();
  await page1.getByRole('textbox', { name: 'Name*' }).fill('Apperals');
  await page1.locator('#sDescription').getByRole('paragraph').filter({ hasText: /^$/ }).click();
  await page1.locator('.ql-editor').fill('Apperals');
  await page1.locator('#category-featured-image > img').click();
  await page1.locator('body').setInputFiles('tee.webp');
  await page1.getByRole('button', { name: 'Save' }).click();
  await page1.getByRole('cell', { name: 'Apperals' }).getByPlaceholder('Write a category name').click();
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page1.getByRole('cell', { name: 'Apperals' }).getByPlaceholder('Write a category name').click();
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await expect(page1.getByRole('cell', { name: 'Apperals' }).getByPlaceholder('Write a category name')).toBeVisible();
});