import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FormAddComponent } from './form-add.component';

describe('FormAddComponent', () => {
  let component: FormAddComponent;
  let fixture: ComponentFixture<FormAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddComponent ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
