import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';
import { HeaderComponent } from './common/header/header.component';
import { LoaderComponent } from './common/loader/loader.component';
import { ModelsComponent } from './auth/project-list/models/models.component';
import { ServicesComponent } from './auth/project-list/services/services.component';
import {RouterModule} from '@angular/router';

import { ProjectListservice } from './auth/project-list/services/project-list.service';
import {routes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    LoaderComponent,
    ModelsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProjectListservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
