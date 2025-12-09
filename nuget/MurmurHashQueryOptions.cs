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
        /// Example: hello world
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }

        /// <summary>
        /// Seed value for the hash function
        /// Example: 0
        /// </summary>
        [JsonProperty("seed")]
        public string Seed { get; set; }

        /// <summary>
        /// Hash variant: 32 (32-bit) or 128 (128-bit)
        /// Example: 32
        /// </summary>
        [JsonProperty("variant")]
        public string Variant { get; set; }
    }
}
