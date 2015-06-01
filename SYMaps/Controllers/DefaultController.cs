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
            ISYControl btn1 = new SYButton() { Name = "btn1", Id = "btn1" };
            ISYControl btn2 = new SYButton() { Name = "btn2", Id = "btn2" };
            ISYControl btn3 = new SYButton() { Name = "btn3", Id = "btn3" };
            ISYControl cbox1 = new SYCheckbox() { Name = "cbox1", Id = "cbox1" };
            ISYControl cbox2 = new SYCheckbox() { Name = "cbox2", Id = "cbox2" };

            List<ISYControl> retList = new List<ISYControl>();
            retList.Add(btn1);
            retList.Add(btn2);
            retList.Add(btn3);
            retList.Add(cbox1);
            retList.Add(cbox2);

            return Content(Newtonsoft.Json.JsonConvert.SerializeObject(retList));
        }
    }
}