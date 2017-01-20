using AspNetCoreAngular2Starter.Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace AspNetCoreAngular2Starter.Backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Hero> Heroes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Hero>().ToTable("Hero");
        }
    }
}