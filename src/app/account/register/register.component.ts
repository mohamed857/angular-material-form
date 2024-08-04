import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../../services/shared.module';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  hidePassword = true;
  hideConfirmPassword = true;
  form: FormGroup;
  user = {
    userName: new FormControl<string>('test', {
      updateOn: 'blur',
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(12)],
    }),
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initFormModels();
  }
  private initFormModels(): void {
    this.form = new FormGroup(
      {
        userName: this.user.userName,
        email: new FormControl<String>(
          { value: 'hello', disabled: false},
          { updateOn: 'blur' ,validators:Validators.email}
        ),
        mobilNumber: new FormControl<string>('', {
          validators: Validators.required,
        }),
        password: new FormControl(''),
        confirmPassword: new FormControl('',{validators: Validators.required}),
      },
      { validators: ValidationService.mustMatch('password', 'confirmPassword') }
    );
    // this.form=this.formBuilder.group({
    //   userName:['',[Validators.required]],
    //   email:'',
    //   mobilNumber:'',
    //   password:'',
    //   confirmPassword:''
    // })
  }
  // private hellow ='';
  public hi = '';
  reset = (): void => {
    this.user.userName.reset();
  };
}
