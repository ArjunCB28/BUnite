import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeLanceComponent } from './free-lance.component';

describe('FreeLanceComponent', () => {
  let component: FreeLanceComponent;
  let fixture: ComponentFixture<FreeLanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeLanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeLanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
