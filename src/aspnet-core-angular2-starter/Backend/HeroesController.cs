using System;
using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;
using AspNetCoreAngular2Starter.Backend.Models;

namespace AspNetCoreAngular2Starter.Backend
{
    using System.Threading.Tasks;

    using AspNetCoreAngular2Starter.Backend.Data;

    using Microsoft.EntityFrameworkCore;

    [Route("api/[controller]")]
    public class HeroesController : Controller
    {
        private ApplicationDbContext dbContext;
        public HeroesController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // GET api/heroes
        [HttpGet]
        public async Task<IEnumerable<Hero>> Get()
        {
            return await this.dbContext.Heroes.ToListAsync();
        }

        // GET api/heroes/5
        [HttpGet("{id}")]
        public async Task<Hero> Get(int id)
        {
            return await this.dbContext.Heroes.FirstOrDefaultAsync(h => h.Id == id);
        }

        // GET api/heroes/search/?name=abc
        [HttpGet("Search")]
        public async Task<Hero[]> Search(string name)
        {
            return await this.dbContext.Heroes.Where(hero => hero.Name.IndexOf(name, StringComparison.OrdinalIgnoreCase) >= 0).ToArrayAsync();
        }

        // POST api/heroes
        [HttpPost]
        public async Task<Hero> Post([FromBody]Hero hero)
        {
            this.dbContext.Add(hero);
            await this.dbContext.SaveChangesAsync();
            return hero;
        }

        // PUT api/heroes/5
        [HttpPut("{id}")]
        public async Task Put(int id, [FromBody]Hero hero)
        {
            var foundHero = this.dbContext.Heroes.FirstOrDefault(h => h.Id == id);
            if (hero != null && foundHero != null)
            {
                foundHero.Name = hero.Name;
                this.dbContext.Update(foundHero);
                await this.dbContext.SaveChangesAsync();
            }
        }

        // DELETE api/heroes/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            var hero = this.dbContext.Heroes.FirstOrDefault(h => h.Id == id);
            if (hero != null)
            {
                this.dbContext.Heroes.Remove(hero);
                await this.dbContext.SaveChangesAsync();
            }
        }
    }
}
