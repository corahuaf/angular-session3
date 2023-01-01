import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuNavegationComponent } from './menu-navegation/menu-navegation.component';
import { BodyComponent } from './body/body.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuNavegationComponent,
    BodyComponent,
    ContenidoComponent,
    BarraLateralComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
