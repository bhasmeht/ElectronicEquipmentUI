import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { UserAddService } from './services/user-add.service';
import { ElecteicEquipmentService } from './services/electeic-equipment.service';
import { EquipmentGroupComponent } from './components/equipment-group/equipment-group.component';
import { EquipmentCategoryComponent } from './components/equipment-category/equipment-category.component';
import { ElecteicEquipmentCategoryService } from './services/electeic-equipment-category.service';
import { ElecteicEquipmentGroupService } from './services/electeic-equipment-group.service';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateequipmentcategoryComponent } from './components/updateequipmentcategory/updateequipmentcategory.component';
import { DeleteequipmentcategoryComponent } from './components/deleteequipmentcategory/deleteequipmentcategory.component';
import { UpdateequipmentgroupComponent } from './components/updateequipmentgroup/updateequipmentgroup.component';
import { UpdateequipmentComponent } from './components/updateequipment/updateequipment.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EquipmentsComponent,
    EquipmentGroupComponent,
    EquipmentCategoryComponent,
    UpdateuserComponent,
    LoginComponent,
    UpdateequipmentcategoryComponent,
    DeleteequipmentcategoryComponent,
    UpdateequipmentgroupComponent,
    UpdateequipmentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserAddService,
    ElecteicEquipmentService,
    ElecteicEquipmentCategoryService,
    ElecteicEquipmentGroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
