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
        public string LastName { get; set; }
    }
}