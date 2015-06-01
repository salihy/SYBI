using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYMaps.Controls
{
    public interface ISYControl
    {
        String Name { get; set; }
        String Id { get; set; }
        String Type { get; set; }
        String Value { get; set; }
        SYControlType GetType();
    }
}
