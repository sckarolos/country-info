import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectDropdownComponent } from './select-dropdown.component';
import { StoreModule } from '@ngrx/store';

describe('SelectDropdownComponent', () => {
  let SelectDropdownComponent: SelectDropdownComponent;
  let fixture: ComponentFixture<SelectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectDropdownComponent]
      , imports: [StoreModule.forRoot({})]
    })
      .compileComponents();
  });

});
