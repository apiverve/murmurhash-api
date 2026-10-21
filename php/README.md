# MurmurHash API - PHP Package

MurmurHash generates fast, non-cryptographic hashes using the MurmurHash3 algorithm. Ideal for hash tables, data partitioning, bloom filters, and checksums where cryptographic security isn't needed.

## Installation

Install via Composer:

```bash
composer require apiverve/murmurhash
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Murmurhash\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'text' => 'hello world',
    'seed' => 0,
    'variant' => '32'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Murmurhash\Client;
use APIVerve\Murmurhash\Exceptions\APIException;
use APIVerve\Murmurhash\Exceptions\ValidationException;

try {
    $response = $client->execute(['text' => 'hello world', 'seed' => 0, 'variant' => '32']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/murmurhash?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/murmurhash?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/murmurhash?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
