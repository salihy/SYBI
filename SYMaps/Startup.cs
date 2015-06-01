using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SYMaps.Startup))]
namespace SYMaps
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
