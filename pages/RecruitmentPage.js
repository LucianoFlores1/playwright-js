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
    }

    async goToRecruitment() {
        await this.menuRecruitment.click();
    }



    async fillCandidateData(fname, lname, mail) {
        await this.firstName.fill(fname);
        await this.lastName.fill(lname);
        await this.email.fill(mail);
        await this.saveButton.click();
    }
}