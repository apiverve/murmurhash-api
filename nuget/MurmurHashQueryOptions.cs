using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.MurmurHash
{
    /// <summary>
    /// Query options for the MurmurHash API
    /// </summary>
    public class MurmurHashQueryOptions
    {
        /// <summary>
        /// The text to hash
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }

        /// <summary>
        /// Seed value for the hash function, an unsigned 32-bit integer (0 to 4294967295)
        /// </summary>
        [JsonProperty("seed")]
        public int? Seed { get; set; }

        /// <summary>
        /// Hash variant: 32 (32-bit) or 128 (128-bit)
        /// </summary>
        [JsonProperty("variant")]
        public string Variant { get; set; }
    }
}
