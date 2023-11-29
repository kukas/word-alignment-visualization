from setuptools import setup, find_packages

setup(
    name='word-alignment-visualization',
    version='0.1.2',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'ipython',
    ],
)
