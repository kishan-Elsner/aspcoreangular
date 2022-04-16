using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace aspcoreangular.Model
{
    public class TblEmployee
    {

        [Key]
        //This Represent Autogenerate
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
         
        public string Designation { get; set; }
    }
}
