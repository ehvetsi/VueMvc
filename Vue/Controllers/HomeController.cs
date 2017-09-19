using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vue.Models;

namespace Vue.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            var model = new ClienteVM();
            model.LastName = "teste";
            return View(model);
        }
    }
}