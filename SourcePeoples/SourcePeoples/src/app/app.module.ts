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
import { TesteComponent } from './teste/teste.component';
import { MeuspedidosComponent } from './meuspedidos/meuspedidos.component';
import { ConfirmarrecebimentoComponent } from './confirmarrecebimento/confirmarrecebimento.component';
import { ConfirmarentregaComponent } from './confirmarentrega/confirmarentrega.component';
import { PedidoentregueComponent } from './pedidoentregue/pedidoentregue.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { HistoricoComponent } from './historico/historico.component';

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
    EntregaspartedoisComponent,
    TesteComponent,
    MeuspedidosComponent,
    ConfirmarrecebimentoComponent,
    ConfirmarentregaComponent,
    PedidoentregueComponent,
    QrcodeComponent,
    HistoricoComponent
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
