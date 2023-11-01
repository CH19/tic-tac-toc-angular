import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TocContainerComponent } from './toc-container.component';

describe('TocContainerComponent', () => {
  let component: TocContainerComponent;
  let fixture: ComponentFixture<TocContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TocContainerComponent]
    });
    fixture = TestBed.createComponent(TocContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
