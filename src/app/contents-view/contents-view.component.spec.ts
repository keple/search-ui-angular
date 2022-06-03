import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsViewComponent } from './contents-view.component';

describe('ContentsViewComponent', () => {
  let component: ContentsViewComponent;
  let fixture: ComponentFixture<ContentsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
