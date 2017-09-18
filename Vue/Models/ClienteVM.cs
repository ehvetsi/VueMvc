using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Vue.Models
{
    public class ClienteVM
    {
        public int Cpf { get; set; }

        [Required]
        public string Email { get; set; }

        public int Id { get; set; }

        [Required]
        public int Idade { get; set; }

        [Required]
        public string Nome { get; set; }
    }
}