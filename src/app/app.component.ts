import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { CorsService } from './cors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PoC_CORS-Angular';
  message!: string;
  constructor(private corsService: CorsService) {}

  ngOnInit() {
    this.corsService.callMethod1().subscribe({
      next: (response: string) => {
        this.message = response;
        console.log(this.message);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
    this.corsService.callMethod2().subscribe({
      next: (response: string) => {
        this.message = response;
        console.log(this.message);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }
}
