# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "apiverve_murmurhash"
  spec.version       = "1.2.3"
  spec.authors       = ["APIVerve"]
  spec.email         = ["hello@apiverve.com"]

  spec.summary       = "MurmurHash API - Ruby Client"
  spec.description   = "MurmurHash generates fast, non-cryptographic hashes using the MurmurHash3 algorithm. Ideal for hash tables, data partitioning, bloom filters, and checksums where cryptographic security isn't needed."
  spec.homepage      = "https://apiverve.com/marketplace/murmurhash?utm_source=ruby&utm_medium=referral&utm_content=homepage"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 2.7.0"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/apiverve/murmurhash-API/tree/main/ruby"
  spec.metadata["changelog_uri"] = "https://apiverve.com/changelog"
  spec.metadata["documentation_uri"] = "https://docs.apiverve.com/ref/murmurhash"

  spec.files = Dir.glob("{lib}/**/*") + %w[README.md LICENSE]
  spec.require_paths = ["lib"]

  spec.add_dependency "faraday", ">= 1.0", "< 3.0"
  spec.add_dependency "faraday-multipart", "~> 1.0"
  spec.add_dependency "json", "~> 2.0"
end
