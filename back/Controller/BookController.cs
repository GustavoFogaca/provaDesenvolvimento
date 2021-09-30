using System;
using System.Collections.Generic;
using System.Linq;
using back.Data;
using back.Models;
using Microsoft.AspNetCore.Mvc;

namespace back.Controller
{
    [ApiController]
    [Route("api/book")]
    public class BookController : ControllerBase
    {
        private readonly DataContext _context;

        //Construtor
        public BookController(DataContext context) => _context = context;

        //POST: api/book/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Book book)
        {
            _context.Books.Add(book);
            _context.SaveChanges();
            return Created("", book);
        }

        //GET: api/book/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Books.ToList());

        //GET: api/book/getbyid/1
        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            //Buscar um book pela chave primária
            Book book = _context.Books.Find(id);
            if (book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }

        //PUT: api/book/create
        [HttpPut]
        [Route("update")]
        public IActionResult Update([FromBody] Book book)
        {
            _context.Books.Update(book);
            _context.SaveChanges();
            return Ok(book);
        }


    }
}