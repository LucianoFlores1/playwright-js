// pages/RecruitmentPage.js
export class RecruitmentPage {
    constructor(page) {
        this.page = page;
        this.menuRecruitment = page.getByRole('link', { name: 'Recruitment' });
        this.addButton = page.getByRole('button', { name: 'Add' });
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.email = page.locator('input[placeholder="Type here"]').first(); // Selector específico si no hay roles
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.successToast = page.locator('#oxd-toaster_1');

        //nuevo elementos de la seccion para agregar candidatos
        this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
        this.middleNameInput = page.getByRole('textbox', { name: 'Middle Name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
        this.jobElection = page.locator('i').nth(5);
        this.vacancyOption = page.getByRole('option', { name: 'Software Engineer' });
        this.emailInput = page.getByRole('textbox', { name: 'Type here' }).first();
        this.emailequired = page.getByText('Expected format: admin@');
        this.numberInput = page.getByRole('textbox', { name: 'Type here' }).nth(1);
        this.keywordInput = page.getByRole('textbox', { name: 'Enter comma seperated words...' });
        this.notes = page.locator('textarea');

        //elementos para el test de filtros
        this.vacancyFilter = page.getByText('-- Select --').nth(1);
        this.vacancyOption = page.locator('form').getByText('Senior QA Lead');
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.firstResultRow = page.locator('.oxd-table-card').first();
        this.tabVacancies = page.locator('.oxd-pagination-page-item.oxd-pagination-page-item--previous-next')
        this.searchByKeywordInput = (page.getByRole('textbox', { name: 'Enter comma seperated words...' }))
    }

    async goToRecruitment() {
        await this.menuRecruitment.click();
    }

    async vacancyFilterSelect() {
        await this.vacancyFilter.click();
        await this.vacancyOption.click();
        await this.searchButton.click();
    }

    async searchByKeyword(keyword) {
        await this.searchByKeywordInput.fill(keyword);
        await this.searchButton.click();
    }

    async fillCandidateData(fname, mname, lname, mail, tnumber, keyword, notes) {
        await this.firstNameInput.fill(fname);
        await this.middleNameInput.fill(mname);
        await this.lastNameInput.fill(lname);
        await this.jobElection.click();
        await this.vacancyOption.click();
        await this.emailInput.fill(mail);
        await this.numberInput.fill(tnumber);
        await this.keywordInput.fill(keyword);
        await this.notes.fill(notes);
        await this.saveButton.click();
    }
}