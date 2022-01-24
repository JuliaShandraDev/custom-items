import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTexareaComponent } from './custom-texarea.component';

describe('CustomTexareaComponent', () => {
  let component: CustomTexareaComponent;
  let fixture: ComponentFixture<CustomTexareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTexareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTexareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
