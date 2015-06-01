using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SYMaps.Controls;

namespace SYMaps.Controllers
{
    public class DefaultController : Controller
    {
        // GET: Default
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult TestCallback()
        {
            ISYControl btn1 = new SYButton() { Name = "btn1", Id = 1 };
            ISYControl btn2 = new SYButton() { Name = "btn2", Id = 2 };
            ISYControl btn3 = new SYButton() { Name = "btn3", Id = 3 };

            List<ISYControl> retList = new List<ISYControl>();
            retList.Add(btn1);
            retList.Add(btn2);
            retList.Add(btn3);

            return Content(Newtonsoft.Json.JsonConvert.SerializeObject(retList));
        }
    }
}