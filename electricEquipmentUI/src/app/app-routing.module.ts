import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteequipmentcategoryComponent } from './components/deleteequipmentcategory/deleteequipmentcategory.component';
import { EquipmentCategoryComponent } from './components/equipment-category/equipment-category.component';
import { EquipmentGroupComponent } from './components/equipment-group/equipment-group.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateequipmentComponent } from './components/updateequipment/updateequipment.component';
import { UpdateequipmentcategoryComponent } from './components/updateequipmentcategory/updateequipmentcategory.component';
import { UpdateequipmentgroupComponent } from './components/updateequipmentgroup/updateequipmentgroup.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'login',
  component: LoginComponent
 },
 {path:'equipments',
  component: EquipmentsComponent
 },
 {path:'user',
  component: UserComponent
 },
 {path:'equipmentcategory',
  component: EquipmentCategoryComponent
 },
 {path:'equipmentgroup',
  component: EquipmentGroupComponent
 },
 {path:'updateuser',
  component: UpdateuserComponent
 },
 {
  path:'updateequipmentcategory',
  component: UpdateequipmentcategoryComponent
 },
 {
  path:'deleteequipmentcategory',
  component: DeleteequipmentcategoryComponent
 },
 {
  path:'updateequipmentgroup',
  component: UpdateequipmentgroupComponent
 },
 {
  path:'updateequipment',
  component: UpdateequipmentComponent
 },
 {path:'',
  component: LoginComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
