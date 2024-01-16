import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagemapComponent } from './languagemap.component';

describe('LanguagemapComponent', () => {
  let component: LanguagemapComponent;
  let fixture: ComponentFixture<LanguagemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagemapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguagemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
