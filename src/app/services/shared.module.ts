import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';



const modules = [
   CommonModule,
   TranslateModule, 
   FormsModule,
   RouterLink,
   ReactiveFormsModule,
   MatFormFieldModule,
   MatIconModule,
   MatListModule,
  //  MatInputModule,
  //  MatLabel
  ];

@NgModule({
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  declarations: [],
  imports: modules,
  exports: [...modules],
})
export class SharedModule {}
