import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { WorkareaComponent } from './workarea/workarea.component';
import { ImageService } from './image.service';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    WorkareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
