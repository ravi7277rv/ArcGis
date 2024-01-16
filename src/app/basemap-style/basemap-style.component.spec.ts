import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasemapStyleComponent } from './basemap-style.component';

describe('BasemapStyleComponent', () => {
  let component: BasemapStyleComponent;
  let fixture: ComponentFixture<BasemapStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasemapStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasemapStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
