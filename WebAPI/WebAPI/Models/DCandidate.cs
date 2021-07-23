using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class DCandidate
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string  fullName { get; set; } 
        //comp

        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string password { get; set; }//comp

        [Column(TypeName = "nvarchar(100)")]
        public string UserName { get; set; } //comp
        [Column(TypeName = "Date")]
        public DateTime  dateofBirth { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string Gender { get; set; }

        public bool Status { get; set; }


    }
}
