import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-libraries-demo-workspace-library',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workspace-library.component.html',
  styleUrl: './workspace-library.component.css',
})
export class WorkspaceLibraryComponent {}
