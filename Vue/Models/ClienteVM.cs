using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Vue.Models
{
    public class ClienteVM
    {
        [Required]
        [Display(Name = "Idade")]
        public int Age { get; set; }

        [Required]
        [Display(Name = "Sobrenome")]
        public string LastName { get; set; }
    }
}