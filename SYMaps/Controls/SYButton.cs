﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYMaps.Controls
{
    public class SYButton : ISYControl
    {
        public String Name { get; set; }
        public String Id { get; set; }
        public String Type { get { return SYControlType.Button.ToString(); } set { } }
        public string Value { get; set; }

        public new SYControlType GetType()
        {
            return SYControlType.Button;
        }



    }
}
