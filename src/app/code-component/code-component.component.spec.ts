import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeComponentComponent } from './code-component.component';

describe('CodeComponentComponent', () => {
  let component: CodeComponentComponent;
  let fixture: ComponentFixture<CodeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
