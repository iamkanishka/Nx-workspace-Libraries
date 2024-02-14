import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildableLibraryComponent } from './buildable-library.component';

describe('BuildableLibraryComponent', () => {
  let component: BuildableLibraryComponent;
  let fixture: ComponentFixture<BuildableLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildableLibraryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildableLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
