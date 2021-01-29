import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';

import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RoutingModule } from '../routing/routing.module';

@NgModule({
  declarations: [HeaderComponent, SideNavComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    AngularMaterialModule,
    MatBadgeModule,
    RoutingModule,
  ],
  exports: [HeaderComponent, SideNavComponent],
})
export class SharedModule {}
