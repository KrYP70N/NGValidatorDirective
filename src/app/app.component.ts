import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgValidatorDirective } from '../../lib/ng-validator.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgValidatorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'NgValidatorDirective';
  @ViewChild('data') data!: ElementRef
}
