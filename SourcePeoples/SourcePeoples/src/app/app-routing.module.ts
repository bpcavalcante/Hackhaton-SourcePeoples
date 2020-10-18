import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmarentregaComponent } from './confirmarentrega/confirmarentrega.component';
import { ConfirmarrecebimentoComponent } from './confirmarrecebimento/confirmarrecebimento.component';
import { EntregasComponent } from './entregas/entregas.component';
import { EntregaspartedoisComponent } from './entregaspartedois/entregaspartedois.component';
import { FooterComponent } from './footer/footer.component';
import { HistoricoComponent } from './historico/historico.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MeuspedidosComponent } from './meuspedidos/meuspedidos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidoentregueComponent } from './pedidoentregue/pedidoentregue.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { QrcodeComponent } from './qrcode/qrcode.component';

const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'entregas', component: EntregasComponent},
  { path: 'pedidos', component: PedidosComponent},
  { path: 'pedido', component: PedidoComponent},
  { path: 'entregaspartedois', component: EntregaspartedoisComponent},
  { path: 'meuspedidos', component: MeuspedidosComponent},
  { path: 'confirmar', component : ConfirmarrecebimentoComponent},
  { path: 'cheguei', component : ConfirmarentregaComponent},
  { path: 'pedidoentregue', component : PedidoentregueComponent},
  { path: 'qrcode', component: QrcodeComponent},
  { path: 'historico', component: HistoricoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
