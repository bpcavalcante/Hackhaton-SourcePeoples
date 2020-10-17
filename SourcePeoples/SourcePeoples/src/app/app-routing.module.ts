import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntregasComponent } from './entregas/entregas.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'entregas', component: EntregasComponent},
  { path: 'pedidos', component: PedidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
