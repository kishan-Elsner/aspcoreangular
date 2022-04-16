using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aspcoreangular.Model
{
    public class EmployeeContect : DbContext
    {

        //This one constructor created
        public EmployeeContect(DbContextOptions<EmployeeContect> options):base(options)
        {

        }
        public DbSet<TblEmployee> TblEmployee { get; set; }

        public DbSet<TblDesigneation> TblDesigneation { get; set; }
    }
}
