using System;

namespace back.Models
{
    public class Book
    {
     
        public Book() => CriadoEm = DateTime.Now;
     
     public int Id {get; set;}
     public string Nome { get; set; }    
     public string Escritor {get;set;}
     public string Editora {get;set;}
     public DateTime CriadoEm {get; set; }
    
    
      public override string ToString() =>
      $"Nome: {Nome} | Editora:{Editora} |  CriadoEm em: {CriadoEm}";
    
    }
}