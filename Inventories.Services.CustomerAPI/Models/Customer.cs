using System.ComponentModel.DataAnnotations;

namespace Inventories.Services.CustomerAPI.Models
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }
        [Required]
        public string CustomerName { get; set; }
        [Required]
        public string CustomerCompany { get; set; }
        [Required]
        public string CustomerAddress { get; set; }
        [Required]
        public string CustomerCity { get; set; }
        [Required]
        public string CustomerState { get; set; }
        [Required]
        public string CustomerPhone { get; set; }
    }
}
