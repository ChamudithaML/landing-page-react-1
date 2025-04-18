namespace RegistrationApi.Models
{
    public class User
    {
        public int Id { get; set; } // Primary key
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string JobTitle { get; set; } = string.Empty;
        public string Company { get; set; } = string.Empty;
        public string MobileNumber { get; set; } = string.Empty;
        public string EmailAddress { get; set; } = string.Empty;
        public string CompanyWebsiteUrl { get; set; } = string.Empty;
    }
}
