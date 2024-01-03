import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMainContextComponent } from './footer-main-context.component';

describe('FooterMainContextComponent', () => {
  let component: FooterMainContextComponent;
  let fixture: ComponentFixture<FooterMainContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMainContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMainContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
