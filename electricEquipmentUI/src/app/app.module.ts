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

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EquipmentsComponent,
    EquipmentGroupComponent,
    EquipmentCategoryComponent
    
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
