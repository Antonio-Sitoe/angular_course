import { Component, OnInit } from '@angular/core';
import { FormBuilderComponent } from './components/form-builder-component/form-builder-component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryService } from './services/countries.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [FormBuilderComponent, ReactiveFormsModule],
  templateUrl: './app.html',
})
export class App implements OnInit {
  constructor(private readonly _countryService: CountryService) {}

  ngOnInit() {
    this._countryService.getCountries().subscribe({
      next: (countries: any) => {
        console.log(countries);
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        console.log('Complete');
      },
    });
  }
}
