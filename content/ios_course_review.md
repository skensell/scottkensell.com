Title: Course review - CS193P iPhone Application Development
Date: 2014-03-25 22:39
Category: Reviews
Slug: course-review-cs193p-iphone-development
Author: Scott Kensell
Summary: My opinions and what I took from the course *CS193P iPhone Application Development* taught by Paul Haggerty.

If you're interested in learning iOS development, skip the tutorials, skip the official documentation, and go straight to <a target="_blank" href="http://www.stanford.edu/class/cs193p/cgi-bin/drupal/">this Stanford course</a>. It's aimed at XCode 5 and iOS 7, but I think he (Paul Haggerty) teaches a new version of the course each Fall so its not likely to ever be out of date.

#### Course Material

There are 18 75-minute videos jam-packed with useful information. In almost every class he does a demo where he does lots of fast-paced live coding.  The first half of the class is typically slides.  In case you missed something on the slides though, he has *extremely* detailed and annotated pdfs of the slides. There are 6 homework assignments and 1 final project. 

All videos and slides are downloadable from iTunesU while the demos are downloadable from the class's website.

#### My Bonus Material

While going through the class I took picture and notes in an <a target="_blank" href="https://www.evernote.com/pub/kensells/iosdevelopment#b=48c3b6db-7a60-4452-8fca-08d7a6745501&st=p&n=d98e7db7-1d14-43cc-bd41-1e2c1086e5da">Evernote notebook which I made public</a>. This still serves as a valuable resource for me (rather than having to search through his pdfs).

I also have <a target="_blank" href="https://github.com/skensell/stanford-ios-course">a github repo</a> which includes most of the demos and solutions to all the homeworks.

#### Prerequisites

Some Object-Oriented Programming experience is helpful and probably necessary. I had some from my Python web-development background and that was enough.

#### What you will do

By the fourth homework assignment you will have created the card game <a target="_blank" href="http://en.wikipedia.org/wiki/Set_(game)">Set</a> as well as a playing-card matching game. The 5th and 6th homework assignments use Flickr APIs to grab recent photos taken and display them by geographic region or photographer as well as keep track of your recently viewed photos.

#### Outcome

You will become very comfortable with

- Object-Oriented Programming
- Objective-C and Cocoa
- creating iOS apps
- working with XCode as well as XCode's interface builder
- Model-View-Controller design pattern
- drawing custom views
- working with gesture recognizers and animations
- working with asynchronous network requests
- working with CoreData (iOS's datastore)
- working with photos, map-kit, camera, and other iOS stuff

#### Critique

Looking back on the course, I've realized that it contains a whole lot of information, but not  all of it is so relevant to my work at Prezi. The last 4 or 5 classes are more like a random collection of topics which I think are better viewed when you actually need to know that information. For example, you're not likely to remember how to use MapKit until you've created an app which uses it.

Also, there are a few things not mentioned in the course.

- CocoaPods is a community-driven package manager for Objective-C which really eases the integration of 3rd party stuff.
- AFNetworking is one example of an awesome 3rd party library which provides a much more straightforward way of managing network requests than with the standard NSURL stuff. The creator of AFNetworking also maintains a helpful (but somewhat advanced) blog about Objective-C at nshipster.com.
- ReactiveCocoa is another example of a 3rd party library which supports a different manner of design patterns than the traditional OOP stuff taught in the class. This is a slightly more advanced topic though.  See my blog post about FRP.

