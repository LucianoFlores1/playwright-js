class LoginPage {
  constructor(page) {
    this.page = page;
    // Centralizamos los locators en el constructor
    this.userInput = page.getByPlaceholder('Username');
    this.passInput = page.getByPlaceholder('Password');
    this.loginBtn  = page.getByRole('button', { name: 'Login' });
  }

  // Método para navegar a la URL
  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  // Método que representa la acción del usuario
  async login(user, pass) {
    await this.userInput.fill(user);
    await this.passInput.fill(pass);
    await this.loginBtn.click();
  }
}

module.exports = { LoginPage };