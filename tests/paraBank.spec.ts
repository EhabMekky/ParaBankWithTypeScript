import { test, expect } from '@playwright/test';

let username: string = `tautester${Date.now()}`;
let password: string = 'P@ssw0rd123!';
test.describe('Para Bank Auth', () => {
    test.beforeEach('Registar on Para Bank App', async ({ page }) => {
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');

        await page.getByText('Register').click();
        await page.locator('[id="customer.firstName"]').fill('Layla');
        await page.locator('[id="customer.lastName"]').fill('Ehab');
        await page.locator('[id="customer.address.street"]').fill('123 Main St');
        await page.locator('[id="customer.address.city"]').fill('Los Angeles');
        await page.locator('[id="customer.address.state"]').fill('CA');
        await page.locator('[id="customer.address.zipCode"]').fill('90001');
        await page.locator('[id="customer.phoneNumber"]').fill('555-0199');
        await page.locator('[id="customer.ssn"]').fill('000-00-0000');
        await page.locator('[id="customer.username"]').fill(username);
        await page.locator('#repeatedPassword').fill(password);
        await page.locator('[id="customer.password"]').fill('P@ssw0rd123!');
        await page.getByRole('button', { name: 'Register' }).click();
    });

    test('login test steps', async ({ page }) => {

        //Login
        await page.locator('input[name="username"]').fill(username);
        await page.locator('input[name="password"]').fill(password);
        await page.getByRole('button', { name: 'Log In' }).click();

        await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
    })
})

/*
{
    "firstName": "John",
    "lastName": "Doe",
    "address": "123 Main St",
    "city": "Los Angeles",
    "state": "CA",
    "zipCode": "90001",
    "phoneNumber": "555-0199",
    "ssn": "000-00-0000",
    "usernamePrefix": "tautester",
    "password": "P@ssw0rd123!",
    "confirmPassword": "P@ssw0rd123!"
  }

*/