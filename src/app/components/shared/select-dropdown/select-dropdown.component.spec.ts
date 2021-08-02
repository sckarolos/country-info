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

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDropdownComponent);
    SelectDropdownComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should be created', () => {
    expect(SelectDropdownComponent).toBeTruthy();
  });

  it('Should emit an event when an option is selected', () => {
    const selected = 'Europe';
    const select = SelectDropdownComponent.regionsForm.controls.area.setValue(selected);
    spyOn(SelectDropdownComponent.selectedItemEvent, 'emit');
    SelectDropdownComponent.getSelectedOption();
    expect(SelectDropdownComponent.selectedItemEvent.emit).toHaveBeenCalledWith(selected);
  });
});
