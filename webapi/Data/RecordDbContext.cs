using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ApiService.Models;

namespace ApiService.Data
{
    public class RecordDbContext : DbContext
    {
        public RecordDbContext (DbContextOptions<RecordDbContext> options)
            : base(options)
        {
        }

        public DbSet<Record> Record { get; set; } = default!;
    }
}
