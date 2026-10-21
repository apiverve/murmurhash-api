# MurmurHash API - Ruby Gem

MurmurHash generates fast, non-cryptographic hashes using the MurmurHash3 algorithm. Ideal for hash tables, data partitioning, bloom filters, and checksums where cryptographic security isn't needed.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_murmurhash'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_murmurhash
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_murmurhash'

# Initialize the client
client = APIVerve::Murmurhash::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  text: "hello world",
  seed: 0,
  variant: "32"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ text: "hello world", seed: 0, variant: "32" })
  puts response["data"]
rescue APIVerve::Murmurhash::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Murmurhash::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Murmurhash::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "hash": 1586663183,
    "hashHex": "5e928f0f",
    "variant": "murmur3_32",
    "seed": 0
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/murmurhash?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/murmurhash?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/murmurhash?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
