class LoginPage{

    constructor(page){
        this.page = page;
        this.usernameInput = "//input[@placeholder='Username']";
        this.passwordInput = "//input[@placeholder='Password']";
        this.loginButton = "//button[normalize-space()='Login']";
    }

async gotologinPage(){
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

}
async login(username,password){
    await this.page.fill(this.usernameInput,username);
    await this.page.fill(this.passwordInput,password);
    await this.page.click(this.loginButton);
    

}


}
module.exports = LoginPage;