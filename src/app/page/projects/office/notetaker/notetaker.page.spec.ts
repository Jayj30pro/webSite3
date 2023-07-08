import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotetakerPage } from './notetaker.page';

describe('NotetakerPage', () => {
  let component: NotetakerPage;
  let fixture: ComponentFixture<NotetakerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotetakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
