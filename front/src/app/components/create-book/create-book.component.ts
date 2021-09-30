import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Book } from "src/app/models/book";
import { BookService } from "src/app/services/book.service";
// import { AppModule } from "./app/app.module";

@Component({
  selector: "app-cadastrar-book",
  templateUrl: "./create-book.component.html",
})
export class CreateBookComponent implements OnInit {
  nome!: string;
  escritor!: string;
  editora!: string;

  constructor(private service: BookService, private router: Router) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let book: Book = {
      nome: this.nome,
      escritor: this.escritor,
      editora: this.editora,
    };
    this.service.create(book).subscribe((book) => {
      console.log(book);
      this.router.navigate(["book/list"]);
    });
  }
}
