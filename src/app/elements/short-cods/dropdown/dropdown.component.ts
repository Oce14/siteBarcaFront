import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() dropdown: any | undefined;
  getValue: any = '';
  selectValue: string = '';
  style: string = '';
  ngOnInit() {
    this.getValue = this.dropdown.value;
    this.style = this.dropdown.styleType;
    this.selectValue = this.dropdown.select;
  }
  getValueDrop(get: any) {
    this.selectValue = get.item;
  }
}
