# MurmurHash API - Dart/Flutter Client

MurmurHash generates fast, non-cryptographic hashes using the MurmurHash3 algorithm. Ideal for hash tables, data partitioning, bloom filters, and checksums where cryptographic security isn't needed.

[![pub package](https://img.shields.io/pub/v/apiverve_murmurhash.svg)](https://pub.dev/packages/apiverve_murmurhash)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [MurmurHash API](https://apiverve.com/marketplace/murmurhash?utm_source=dart&utm_medium=referral&utm_content=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_murmurhash: ^1.2.5
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_murmurhash/apiverve_murmurhash.dart';

void main() async {
  final client = MurmurhashClient('YOUR_API_KEY');

  try {
    final response = await client.execute({
      'text': 'hello world',
      'seed': 0,
      'variant': '32'
    });

    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

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

## API Reference

- **API Home:** [MurmurHash API](https://apiverve.com/marketplace/murmurhash?utm_source=dart&utm_medium=referral&utm_content=readme)
- **Documentation:** [docs.apiverve.com/ref/murmurhash](https://docs.apiverve.com/ref/murmurhash?utm_source=dart&utm_medium=referral&utm_content=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme)
