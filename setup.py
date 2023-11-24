from setuptools import setup, find_packages

setup(
    name='word-alignment-visualization',
    version='0.1',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'ipython',
    ],
)
