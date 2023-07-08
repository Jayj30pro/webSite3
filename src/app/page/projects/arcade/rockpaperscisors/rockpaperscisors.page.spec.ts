import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RockpaperscisorsPage } from './rockpaperscisors.page';

describe('RockpaperscisorsPage', () => {
  let component: RockpaperscisorsPage;
  let fixture: ComponentFixture<RockpaperscisorsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RockpaperscisorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
