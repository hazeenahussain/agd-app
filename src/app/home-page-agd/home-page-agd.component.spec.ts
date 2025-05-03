import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageAgdComponent } from './home-page-agd.component';

describe('HomePageAgdComponent', () => {
  let component: HomePageAgdComponent;
  let fixture: ComponentFixture<HomePageAgdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageAgdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageAgdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
