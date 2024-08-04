import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../services/shared.module';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterOutlet,SharedModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

}
