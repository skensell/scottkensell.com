Title: My first iOS app: Ten Movies
Date: 2014-09-28 12:47
Category: Objective-C
Slug: my-first-app
Author: Scott Kensell
Summary: From idea to app store, this is the story of my first iOS app.

Most developers make things to ease people's lives, to solve common problems, and to generally make the world a better place. Choosing the problem to solve can be quite the challenge if you really want to make an impact in the world. Fortunately, my goals aren't so lofty. First, I just want to solve a common problem in *my* world, and maybe in doing so it solves something for you too.

#### The Problem

It's a weekday, 9pm. *Let's watch a movie!* Ok, what movie? I google "Popular movies 2013" because I can't remember what was popular last year. I find John Doe's top ten list, and it's a really weird looking list. I go to IMDB, I browse some lists but I get annoyed by their UI. I want to filter by genre, year, voter average. I want to see the main actors and watch trailers instantly. I don't want to click all over the place.

#### The Solution

Wouldn't it be great if there were an app which would instantly give me a list of 10 movie suggestions based on simple search criteria, and I could see the main actors and the trailer with just a tap? And an app which doesn't try to be social with sharing and likes and acccounts and all that garbage. It shouldn't be that hard to make either provided there is a movie database with a public api.

And so the journey began: File -> New -> Project, project name: *Ten Movies*

Despite the name, it actually gives you an infinitely scrollabe list of movies, but when I added that functionality it was too late to change the name (plus Ten Movies is catchier than Infinite Movies I think). Go ahead and download the app from <a target="_blank" href="">the app store</a> and let me know what you think!

Here's what it looks like:


#### The Technical Journey

- Movie database source: TMDB. Why? Well documented, and I had used it before. I didn't want to use any of the clients because I wouldn't have as much control over the network stack as I'd like, and it would be trickier for me to hook it up with ReactiveCocoa in the way I wanted.
- Writing the TDMB client: 
- How I wanted to use ReactiveCocoa and AFNetworking: include snippet from viewDidLoad.
- Storing the query preferences in a simple model which sits in NSUserDefaults.
- Design phase: drew pictures for a few hours.
- Design phase 2: Improvise in Interface Builder
- Found a youtube player library on cocoapods.
- Tweaking stuff: not super proud of it, as it's a pet project which I rarely worked on, the way that I write code changed a lot and I realized I had some bad practicies. But the product manager in me told me I should just get it out there.
- Submitting to the app store. iOS 8 and iPhone 6 annoyances.

That feeling of completion.

