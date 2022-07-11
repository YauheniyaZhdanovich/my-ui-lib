import { Component, Input, Optional, Self, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'my-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MyInputComponent implements ControlValueAccessor {
  @Input() public placeholder = '';
  @Input() public styledValidation = false;
  @Input() public required = false;
  // TODO clarify with designer usecases for styled success message. Do we really need one?
  @Input() public showSuccessState = false;

  public value: string = '';

  constructor(@Self() @Optional() private readonly control: NgControl) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(): void {}

  public writeValue(value: string): void {
    this.value = value;
  }

  public fireOnChange(): void {
    this.onChange(this.value);
  }

  public get invalid(): boolean {
    if (this.control) {
      return !!(this.control.invalid && this.control.dirty);
    }

    return false;
  }

  public get disabled(): boolean {
    return !!this.control?.disabled;
  }

  private onChange: (value: string) => void = () => {};
}
