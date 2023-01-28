import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSmallComponent } from './project-small.component';

describe('ProjectSmallComponent', () => {
  let component: ProjectSmallComponent;
  let fixture: ComponentFixture<ProjectSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
