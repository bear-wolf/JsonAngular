import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {templateRefExtractor} from '@angular/core/src/render3';

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'jsonAngular';
  formData: FormGroup = null;

  step1 = false;

  visiting = [
    {id: 1, name: "Любое"},
    {id: 2, name: "Посещена"},
    {id: 3, name: "Не посещена"}
  ];

  hasVisa = [
    {id: 1, name: "Любое"},
    {id: 2, name: "Есть виза"},
    {id: 3, name: "Нет визы"}
  ];

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private formBuilder: FormBuilder,){
    this.formData = this.formBuilder.group({
      User: ['', [Validators.required]],
      Country: [''],
      Visiting: [''],
      hasVisa: ['']
    });
  }

  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  onShow(){
    let controls = this.formData.controls;
    this.step1 = true;

    // this.searchFilter.TextSearch = controls.Login.value;
    // this._managerService.getAll(this.searchFilter).subscribe(
    //   (x: SearchManagers)=>{
    //     if (x.Managers.length) {
    //       controls.Login.setErrors({
    //         login: 'Login already in the system'
    //       });
    //       this.goScroll(this.form);
    //     } else {
    //       this.createManager();
    //     }
    //   },
    //   (data: HttpErrorResponse)=>{
    //     this._notificationService.error(data.error.Error.Message);
    //   })
  }

  onApply(){

  };

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}

