import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberSavvyComponent } from './cyber-savvy.component';

describe('CyberSavvyComponent', () => {
  let component: CyberSavvyComponent;
  let fixture: ComponentFixture<CyberSavvyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberSavvyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberSavvyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
