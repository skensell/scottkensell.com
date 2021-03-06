Title: Own your blog
Date: 2014-06-01 22:39
Category: Python
Slug: own-your-blog
Author: Scott Kensell
Summary: Free yourself from the confines of blogging websites and embrace the new generation of static site generation.

As a developer, one of the big things which motivates me is the ability to create things and to feel a proud ownership for that which I create. When it comes to something as simple as a blog, I'm thinking *I should be able to make that with just a little effort*. Sites like blogger and wordpress were out of the question because I knew I would be trapped in their little world.

Of course "a little effort" always turns out to take more time than expected, but here I am. I've got my blog. I can write, publish, remove, and restructure the whole site as I please with just a few keystrokes. I can even modify the date of my blog post so it looks like fresh news to you. It's my world here, I make the rules :)

#### Pelican

My secret sauce is the static site generator <a target="_blank" href="http://blog.getpelican.com/">pelican</a> which I found by googling things like "static site python like ruby jekyll". One of the reasons it's nice is the simple integration of 3rd party things like comments via Disqus or Google Analytics by just defining a few constants in the pelicanconf.py config file. Also, the jinja2 templates are nice and make theme-editing pretty easy (if you don't like the built in themes).

#### Open source

I am happy to announce that my first open-source contribution happened when somebody merged <a target="_blank" href="https://github.com/getpelican/pelican-themes/pull/223">this pull request</a>. You see, pelican is open source and so is <a target = "_blank" href="https://github.com/getpelican/pelican-themes">pelican themes</a> where you can create new themes and spice up existing ones. I chose to hipsterify the SoMA theme and so my contribution was a new SoMA2 theme.  Let me know if you like it!

#### Copy this blog

The more developer blogs out there, the better. So if you are a lazy developer who wants his own blog, feel free to <a target="_blank" href="https://github.com/skensell/scottkensell.com">fork my blog</a> and use it as a starting point for yours. Most of the files were autogenerated by doing the quickstart suggested in the pelican docs.  A few are my own scripts.  Read them and you can see my workflow. The pelicanconf.py and the publishconf.py are the config files where most of the glue is.


Happy Blogging!

