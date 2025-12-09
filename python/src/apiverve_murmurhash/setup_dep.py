from setuptools import setup, find_packages

setup(
    name='apiverve_murmurhash',
    version='1.1.12',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='MurmurHash generates fast, non-cryptographic hashes using the MurmurHash3 algorithm. Ideal for hash tables, data partitioning, bloom filters, and checksums where cryptographic security isn't needed.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
