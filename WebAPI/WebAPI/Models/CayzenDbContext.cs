using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class CayzenDbContext : DbContext
    {
        public CayzenDbContext(DbContextOptions<CayzenDbContext> options) : base(options)
        {
                 
        }

        public DbSet<DCandidate> DCandidates { get; set; }
    }
}
