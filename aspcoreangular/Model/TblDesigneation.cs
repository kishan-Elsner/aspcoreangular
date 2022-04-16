using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace aspcoreangular.Model
{
    public class TblDesigneation
    {
        //This Represent primary key
        [Key]
        //This Represent Autogenerate
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]


        public int Id { get; set; }


        //StringLength database ki length StringLength ka use kar ke 

        [StringLength(150)]
        public string Name { get; set; }

        [StringLength(150)]
        public string LastName { get; set; }

        [StringLength(250)]
        public string Email { get; set; }

        public int Age { get; set; }

        public DateTime Doj { get; set; }
        [StringLength(20)]
        public string Gender { get; set; }

        public int IsMarried { get; set; }

        public int IsActive { get; set; }

        public int DesignationId { get; set; }

        //This NotMapped means table ke andar column ko use nahi karna
        [NotMapped]
        public string Designation { get; set; }



    }
}
