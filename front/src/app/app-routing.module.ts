import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateBookComponent } from "./components/create-book/create-book.component";
import { ListBookComponent } from "./components/list-book/list-book.component";

const routes: Routes = [
  {
    path: "",
    component: ListBookComponent,
  },
  {
    path: "book/list",
    component: ListBookComponent,
  },
  {
    path: "book/create",
    component: CreateBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
