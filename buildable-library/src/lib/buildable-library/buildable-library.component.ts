import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-libraries-demo-buildable-library',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buildable-library.component.html',
  styleUrl: './buildable-library.component.css',
})
export class BuildableLibraryComponent {}
