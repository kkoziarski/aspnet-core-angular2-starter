using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using AspNetCoreAngular2Starter.Backend.Data;

namespace aspnetcoreangular2starter.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AspNetCoreAngular2Starter.Backend.Models.Hero", b =>
                {
                    b.Property<int>("Id").ValueGeneratedOnAdd();
                    b.Property<string>("Name");
                    b.HasKey("Id");
                    b.ToTable("Hero");
                });
        }
    }
}
