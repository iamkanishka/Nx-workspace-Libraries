import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublishableLibraryComponent } from './publishable-library.component';

describe('PublishableLibraryComponent', () => {
  let component: PublishableLibraryComponent;
  let fixture: ComponentFixture<PublishableLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishableLibraryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublishableLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
