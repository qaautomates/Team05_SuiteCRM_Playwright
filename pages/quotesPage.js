import {test, expect} from '@playwright/test';

export class quotes{
    constructor(page) {
        this.page = page;
        this.quotes = page.locator('a').filter({ hasText: /^Quotes$/ });
        this.createQuote = page.getByRole('link', { name: 'Create Quote' });
        this.viewQuotes = page.getByRole('link', { name: 'View Quotes' });
        this.import = page.getByRole('link', { name: 'Import', exact: true });
        this.importLineItems = page.getByRole('link', { name: 'Import Line Items' });
       
    }

    getMenuItem(menuName) {
        return this.page.getByRole('link', { name: menuName, exact: true });
    }
    async hoverOnQuotesTab() {
        await this.quotes.click();
    }

}