import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
// Las rutas se ejecutan por orden
const routes: Routes = [
  {path: "search", component: SearchComponent},
  {path: "products", loadChildren: () => import("./pages/products/products.module").then(m => m.ProductsModule)},
  {path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// ng g c [ruta]/[nombreComponente] = Para crear un componente
// ng g m [ruta]/[nombreModulo] -m=app --route [urlRuta] = Para crear un nuevo modulo, importarlo en el APP module y crear una ruta para dicho modulo
// ng g c [ruta]/[nombreComponente] --skip-test = Crear un componente sin el fichero de testing