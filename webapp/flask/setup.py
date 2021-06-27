# coding: utf-8

import sys
from setuptools import setup, find_packages

NAME = "app"
VERSION = "1.0.0"

# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

REQUIRES = ["connexion"]

setup(
    name=NAME,
    version=VERSION,
    description="Swagger Profile",
    author_email="apiteam@swagger.io",
    url="",
    keywords=["Swagger", "Swagger Profile"],
    install_requires=REQUIRES,
    packages=find_packages(),
    package_data={'': ['swagger/swagger.yaml']},
    include_package_data=True,
    entry_points={
        'console_scripts': ['app=app.__main__:main']},
    long_description="""\
    This is a sample server Profile
    """
)
