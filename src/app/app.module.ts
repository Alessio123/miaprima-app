import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';



import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BindingComponent } from './binding/binding.component';
import { DirettiveComponent } from './direttive/direttive.component';
import { ChildComponent } from './child/child.component';
import { TemplatesComponent } from './templates/templates.component';
import { HighlightDirective } from './direttiveCreate/highlight.directive';
import { PipeComponent } from './pipe/pipe.component';
import { AboutComponent } from './componentiPerRouting/about/about.component';
import { ContactComponent } from './componentiPerRouting/contact/contact.component';
import { HomeComponent } from './componentiPerRouting/home/home.component';
import { ContattoComponent } from './componentiPerRouting/contatto/contatto.component';
import { NotfoundComponent } from './componentiPerRouting/notfound/notfound.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirettiveComponent,
    ChildComponent,
    TemplatesComponent,
    HighlightDirective,
    PipeComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ContattoComponent,
    NotfoundComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
