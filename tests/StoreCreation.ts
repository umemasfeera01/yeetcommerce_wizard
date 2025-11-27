import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
   test.setTimeout(30000);
  await page.goto('https://yeetcommerce.com/', { waitUntil: 'commit', timeout: 60000 });
  await page.waitForTimeout(5000); // give it time to render
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Create My Free Store' }).click();
  const page1 = await page1Promise;
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('button', { name: 'Continue With Google' }).click();
  const page2 = await page2Promise;
  await page2.getByRole('textbox', { name: 'Email or phone' }).click();
  await page2.getByRole('textbox', { name: 'Email or phone' }).fill('umemusfirahh@gmail.com');
  await page2.getByRole('button', { name: 'Next' }).click();
  await page2.getByRole('textbox', { name: 'Enter your password' }).fill('Musfi@next');
  await page2.getByRole('button', { name: 'Next' }).click();
  await page2.goto('https://accounts.google.com/signin/oauth/consent?authuser=0&part=AJi8hAPxDrKeILHT5SnlHFUqVgkC74SZVo52Jbe4TqhECiUlhRg5vfsCgeMBgV6rb-Qu4zBBwoUUyPKNzfzktxr1IwvrrJ7p0E46YfGKI__Dl6BQ86o37nR5EgWvOz8kJOipm-bJV7rqsVGPCPyA-0jpM5vdbhuVGB1jXFfwHQ2O881c5OUnuHHyYlevCI5C0iaga7umW-wOyVms6V0XSDAJBMLXtPCk8w6UwK0jFgNDeASxBjp61MLsvJcLdB0hl1K23l2H1fH-fwx7UxJZtPXCnnL4Q6KbPOPFXUbnz24W1Az2Q9tU8R5pKMEpPu5wmD45HXKPxogXZ0sMk0e8u-lLwkj-8gwjiEJM7KpiMyPYdlh7oq-RZlrnuo4nxPeVqucAt-J2t-E_Rbkhj8mf0l5N5k8SG6zyc-ZuV-YKRF6x2M52ykNXXba6dyVSb7ksdOwKKuevGCrb6fuhMk2tTWs00NYIOGYd3bhchCVTI6aoiQH4P2UbS84&flowName=GeneralOAuthFlow&as=S-771555822:1762508786179706&client_id=1085173511679-vaod6rf9kgse066e2t7qcl2i81j39c0a.apps.googleusercontent.com&rapt=AEjHL4M4fbojVbCdmo-NBRBa5lFoiUGMJQ8PWFpKqxc5xQIZjCaixWoNzLjusM2x72A5lB6Pvtb3Bb40P2P_Iq3J6AoIEzMDaTlRbaldXQp2wS7E6x-vqGA#',{ waitUntil: 'networkidle',
      timeout: 90000 });
    page.setDefaultNavigationTimeout(90000);
  await page1.getByRole('textbox', { name: 'First Name*' }).click();
  await page1.getByRole('textbox', { name: 'Last Name*' }).click();
  await page1.getByRole('textbox', { name: 'Enter your contact number' }).click();
  await page1.getByRole('textbox', { name: 'Enter your contact number' }).fill('+121233 35676');
  await page1.getByRole('textbox', { name: 'Password*' }).fill("Musfi@next");
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.getByLabel('Country*').selectOption('[object Object]');
  await page1.getByLabel('Theme*').selectOption('[object Object]');
  await page1.getByRole('textbox', { name: 'Your Store/Domain Name*' }).click();
  await page1.getByRole('textbox', { name: 'Your Store/Domain Name*' }).fill('mystore');
  await page1.locator('div:nth-child(5) > .themeImgOnBoarding > .hoverLayerBox').click();
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.locator('div:nth-child(5) > .themeImgOnBoarding > .hoverLayerBox').click();
  await page1.locator('#confirmation').check();
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.getByRole('button', { name: 'Choose Plan' }).nth(1).click();
  await page1.getByRole('button', { name: 'Yes' }).click();
  await page1.getByRole('button', { name: 'Begin Trial' }).click();
  await page1.getByRole('button', { name: 'Yes' }).click();
  await page1.getByRole('link', { name: 'Manage Your Store' }).click();
  await page1.getByRole('textbox', { name: 'Email*' }).click();
  await page1.getByRole('textbox', { name: 'Email*' }).fill('umem');
  await page1.locator('.modalBg.modal-active > .modalBody > .modalCloseIcon > button').click();
  await page1.getByRole('link', { name: 'Ume Musfirahh' }).click();
  await page1.getByRole('button', { name: 'Profile' }).click();
  await page1.getByRole('button', { name: 'Process' }).click();
  await page1.locator('div').filter({ hasText: 'Don\'t Show Again' }).nth(4).click();
  await page1.locator('iframe[title="YouTube video player"]').contentFrame().getByRole('button', { name: 'Play' }).click();
  await page1.locator('.modalBg.modal-active > .modalBody > .modalCloseIcon > button').click();

  await page1.getByRole('textbox', { name: 'Last Name *' }).click();
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page1.getByRole('textbox', { name: 'Last Name *' }).dblclick();
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page1.getByRole('textbox', { name: 'Last Name *' }).dblclick();
  await expect(page.getByText(/musfirahh/)).toBeVisible();
});