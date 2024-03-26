import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {ExperienceComponent} from "./experience/experience.component";
import {CIModule, CIConfig, CI_CONFIG} from 'ng-cloudimage-responsive';

const ciConfig: Partial<CIConfig> = {
  token: 'cjddvdjbma',
  baseUrl: 'https://derekcurrycompsci.com/assets/',
  apiVersion: ''
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    LandingComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FontAwesomeModule,
    MatCardModule,
    NgbModule,
    NgOptimizedImage,
    CIModule
  ],
  providers: [
    { provide: CI_CONFIG, useValue: ciConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
