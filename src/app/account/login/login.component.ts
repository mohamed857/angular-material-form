import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../services/shared.module';


interface ILoginDto {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  onEmailChanged(email: string): void {
    console.log(email);
  }
  // login = (loginForm: NgForm) => {
  //   console.log('loginForm', loginForm.value);
  // };
  // loginData:{
  //   email:String,
  //   password:string
  // }={email:'',password:''}
  loginData: ILoginDto = { email: 'mohamed@gmail.com', password: '123456' };
  hide: boolean = true;
  alert?: boolean;
  counter = signal(0);
  increase=()=> {
    this.counter.set(this.counter() + 1)
  }
}
