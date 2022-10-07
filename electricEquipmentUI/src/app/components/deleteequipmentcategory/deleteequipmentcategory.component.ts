import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ElecteicEquipmentCategoryService } from 'src/app/services/electeic-equipment-category.service';

@Component({
  selector: 'app-deleteequipmentcategory',
  templateUrl: './deleteequipmentcategory.component.html',
  styleUrls: ['./deleteequipmentcategory.component.css']
})
export class DeleteequipmentcategoryComponent implements OnInit {

  constructor(private deleteEquipmentCategoryService: ElecteicEquipmentCategoryService) { }

  ngOnInit(): void {
  }

  equipmentCategoryForm = new FormGroup({
    
    equipmentcategoryid: new FormControl(""),
  });

  equipmentCategoryDeleted(){
    this.deleteEquipmentCategoryService.deleteEquipmentCategory([
      this.equipmentCategoryForm.value.equipmentcategoryid
      ]).subscribe()
  }

}
