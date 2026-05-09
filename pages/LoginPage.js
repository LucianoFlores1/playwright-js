
export class LoginPage {
  constructor(page) {
    this.page = page; // Recibe la página de Playwright
    
    // Definimos los selectores (Locators)
    this.userInput = page.getByPlaceholder('Username');
    this.passInput = page.getByPlaceholder('Password');
    this.loginBtn  = page.getByRole('button', { name: 'Login' });
  }

  async login(username, password) {
    await this.userInput.fill(username);
    await this.passInput.fill(password);
    await this.loginBtn.click();
  }
}