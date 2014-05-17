Title: The p and w directories 
Date: 2014-03-29 21:20
Category: UNIX
Slug: the-p-and-w-directories
Author: Scott Kensell
Summary: A simple strategy for organizing personal and work directories.

With my inaugural blog post, I'd like to talk about one of my favorite topics:
*staying organized in the file system*.

Since I spend most of my time on my work computer, I end up doing a lot of 
personal things on it too. To avoid mixing my work and personal files I 
obviously needed to create separate places for these things to live. 
And so `~/work` and `~/personal` were born.

Over time `~/work` and `~/personal` got so bloated that it became difficult to
find things. All of my old, irrelevant projects were blocking my view.
Occasionally I would reorganize their contents into more logical
folders, but this made matters worse when I couldn't remember where I'd moved
things.
Perhaps the stupidest folder I made was `~/work/archive` where I would just throw all the old projects I'd worked on. I could never remember if something was old enough to be in the archive or not.

Solution
--------
Don't overorganize the subdirectories of `~/work` and `~/personal`.
Instead, *organize by year*.

The way I tried to restructure the subdirectories of `~/work` and `~/personal` was like trying to create an unnecessarily complicated database schema.
I think it's much easier to remember in which year I worked on a project and then simply `ls` in the appropriate year.

And so `~/work/201{3,4}` and `~/personal/201{3,4}` were born.

I was pretty happy with this new structure. That is, until I realized how many keystrokes I was wasting as I switched to these directories: `~/wo<TAB>/2<TAB>4`.
Oh and that really long prompt is a sight for sore eyes:

![My long prompt]({filename}/images/long_prompt.png)

Fortunately both of these problems can be fixed with some symlink magic.

    :::bash
    ln -s ~/work/2014 ~/w
    ln -s ~/personal/2014 ~/p

Maybe this strategy for organizing your directories is old news, but I was pretty proud of myself when I realized how well this works for me.
