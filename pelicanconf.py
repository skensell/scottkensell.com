#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Scott Kensell'
SITENAME = u'scottkensell.com'
SITEURL = 'http://scottkensell.com/'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

# Social widget
SOCIAL = (('github', 'https://github.com/skensell'),
        ('prezi', 'https://prezi.com/about/scott-kensell/'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

STATIC_PATHS = ['images', 'javascript']

THEME = "./ignored/pelican-themes/SoMA2"
SITESUBTITLE = "SK"
SITETAGLINE = "a developer's blog"
