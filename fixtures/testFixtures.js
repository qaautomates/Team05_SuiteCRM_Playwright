import { test as base, createBdd } from 'playwright-bdd';
import { login } from '../pages/loginPage';
import { quotes } from '../pages/quotesPage';

export const test = base.extend({
    loginPage: async ({page}, use) => {
        await use(new login(page));
    },
    quotesPage: async ({page}, use) => {
        await use(new quotes(page));
    }
});

export const { Given, When, Then } = createBdd(test);