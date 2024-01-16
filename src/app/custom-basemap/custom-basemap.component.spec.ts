import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBasemapComponent } from './custom-basemap.component';

describe('CustomBasemapComponent', () => {
  let component: CustomBasemapComponent;
  let fixture: ComponentFixture<CustomBasemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomBasemapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomBasemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
