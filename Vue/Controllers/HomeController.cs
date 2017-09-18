using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
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
        public ActionResult GetData([DataSourceRequest]DataSourceRequest request)
        {
            var model = new List<ClienteVM>();
            for (int i = 0; i < 10; i++)
            {
                model.Add(new ClienteVM()
                {
                    Email = "teste@teste1.com.br" + i,
                    Nome = "teste" + i,
                });
            }

            return Json(model.ToDataSourceResult(request));
        }

        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
    }
}