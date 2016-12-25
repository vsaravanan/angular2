import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { AutoGrowDirective} from './auto-grow.directive';
import { LikeitComponent } from './likeit/likeit.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { HandlenullComponent } from './handlenull/handlenull.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    AutoGrowDirective,
    LikeitComponent,
    NgswitchComponent,
    HandlenullComponent,
    BootstrapPanelComponent,
    ZippyComponent,
    ContactFormComponent,
    HeroComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


