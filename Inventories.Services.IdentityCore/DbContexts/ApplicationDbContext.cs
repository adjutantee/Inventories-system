using Inventories.Services.IdentityCore.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Inventories.Services.IdentityCore.DbContexts
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
            public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
            {

            }
    }
}
