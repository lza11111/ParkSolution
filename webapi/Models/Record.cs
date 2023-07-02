using ApiService.Enums;

namespace ApiService.Models
{
    public class Record
    {
        public string Id { get; set; }
        public string Position { get; set; }

        public PositionType Type { get; set; }
    }
}
