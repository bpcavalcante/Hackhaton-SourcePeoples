import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EntregasComponent } from './entregas/entregas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidoComponent } from './pedido/pedido.component';
import { MinhasentregaComponent } from './minhasentrega/minhasentrega.component';
import { EntregaspartedoisComponent } from './entregaspartedois/entregaspartedois.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    EntregasComponent,
    PedidosComponent,
    PedidoComponent,
    MinhasentregaComponent,
    EntregaspartedoisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
