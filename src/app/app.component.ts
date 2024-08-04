import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { SharedModule } from './services/shared.module';
import { TranslationService } from './services/translation.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ChildComponent,SharedModule]
})
export class AppComponent implements OnInit{
  title = 'future_code';
  
  method =(x:string)=>{
    console.log(x)
  }
  translationService = inject(TranslationService)
  ngOnInit(): void {
    this.translationService.setDefaultLang('ar');
  }

}
