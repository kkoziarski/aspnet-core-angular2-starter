namespace AspNetCoreAngular2Starter.Backend.Models
{
    using System.Linq;

    using AspNetCoreAngular2Starter.Backend.Data;

    public static class DbInitializer
    {
        public static void Initialize(ApplicationDbContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Heroes.Any())
            {
                return;   // DB has been seeded
            }

            var heroes = new Hero[]
            {
                new Hero { Name = "Mr. Nice"},
                new Hero { Name = "Narco" },
                new Hero { Name = "Bombasto" },
                new Hero { Name = "Celeritas" },
                new Hero { Name = "Magneta" },
                new Hero { Name = "RubberMan" },
                new Hero { Name = "Dynama" },
                new Hero { Name = "Dr IQ" },
                new Hero { Name = "Magma" },
                new Hero { Name = "Tornado" }
            };

            foreach (Hero hero in heroes)
            {
                context.Heroes.Add(hero);
            }

            context.SaveChanges();
        }
    }
}