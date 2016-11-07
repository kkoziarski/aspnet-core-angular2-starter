using System;
using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreAngular2Starter.Backend
{
    [Route("api/[controller]")]
    public class HeroesController : Controller
    {
        private static readonly List<Hero> Heroes = new List<Hero>
        {
            new Hero { Id = 11, Name = "Mr. Nice"},
            new Hero { Id = 12, Name = "Narco" },
            new Hero { Id = 13, Name = "Bombasto" },
            new Hero { Id = 14, Name = "Celeritas" },
            new Hero { Id = 15, Name = "Magneta" },
            new Hero { Id = 16, Name = "RubberMan" },
            new Hero { Id = 17, Name = "Dynama" },
            new Hero { Id = 18, Name = "Dr IQ" },
            new Hero { Id = 19, Name = "Magma" },
            new Hero { Id = 20, Name = "Tornado" }
        };

        // GET api/heroes
        [HttpGet]
        public IEnumerable<Hero> Get()
        {
            return Heroes;
        }

        // GET api/heroes/5
        [HttpGet("{id}")]
        public Hero Get(int id)
        {
            return Heroes.Find(h => h.Id == id);
        }

        // GET api/heroes/search/?name=abc
        [HttpGet("Search")]
        public Hero[] Search(string name)
        {
            return Heroes.Where(hero => hero.Name.IndexOf(name, StringComparison.OrdinalIgnoreCase) >= 0).ToArray();
        }

        // POST api/heroes
        [HttpPost]
        public Hero Post([FromBody]Hero hero)
        {
            hero.Id = Heroes.Count;
            Heroes.Add(hero);
            return hero;
        }

        // PUT api/heroes/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Hero hero)
        {
            var foundHero = Heroes.FirstOrDefault(h => h.Id == id);
            if (hero != null && foundHero != null)
            {
                foundHero.Name = hero.Name;
            }
        }

        // DELETE api/heroes/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var hero = Heroes.FirstOrDefault(h => h.Id == id);
            if (hero != null)
            {
                Heroes.Remove(hero);
            }
        }
    }
}
