import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-libraries-demo-publishable-library',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publishable-library.component.html',
  styleUrl: './publishable-library.component.css',
})
export class PublishableLibraryComponent {}
