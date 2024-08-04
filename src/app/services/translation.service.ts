import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  translate = inject(TranslateService);
  setDefaultLang(long :string):void{
    this.translate.setDefaultLang(long);
  }
}
