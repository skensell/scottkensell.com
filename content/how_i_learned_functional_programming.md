Title: How I learned functional programming
Date: 2015-01-04 11:39
Category: Reviews
Slug: how-i-learned-functional-programming
Author: Scott Kensell
Summary: My roadmap on how to approach and learn functional programming, including a course and book review.

#### Step 1: Don't learn FP

Whaa? But the title of this blog post...

Relax. I still think you should eventually learn FP, but maybe it's a better idea to step back and ask yourself "Is this the right time?"

From the moment I joined Prezi, I was told that I should learn FP as well as a variety of other topics like C, UNIX, OOP, data structures, algorithms, continuous delivery, refactoring, clean code, testing, and version control. And then along the way I realized I should also learn about compilers, processors, networks, and dependency management. And oh yeah, it wouldn't hurt to be proficient with a command-line editor like emacs or vim.

Wow, that's a lot! Maybe the list of topics is smaller for you (remember I was a career-changer, not a CS major), but the question still remains: how do I prioritize all this? And where does FP fit in?

The answer is simple: learn what is urgent now, learn what isn't urgent later when you feel you have the time or when it has become urgent.

My first tasks at Prezi involved working with Django web apps. The most urgent things for me to learn were Django (obviously), UNIX (what are all these .sh files?), and version control (git commit -a -m ftw). Not as important, but it felt like the right time to learn was C (I mean I should have a deeper understanding of Python, right?) and continuous delivery (I should understand how Prezi engineering teams work). I also had a very helpful manager telling me which book to read next. 

Four months on the job, I noticed FP is everyone's favorite topic. There was even an employee-driven Haskell school meeting once a week. Man I would have loved to join, but I felt it just wouldn't fit on my plate and probably wouldn't benefit me at the moment.

Later on I joined the iOS team and it became pretty urgent to learn Objective-C and iOS development (for which there's a <a href="./course-review-cs193p-iphone-development.html">great online course</a>). On the immediate horizon I saw I needed to learn (mostly through practice and code reviews as opposed to books/courses) OOP best practices like when to use interfaces versus subclassing, how to avoid global state with dependency injection, when to use abstract classes, how to separate model and view logic and avoid massive controllers in the MVC design pattern, and when is the singleton design pattern okay. And simultaneously I needed to learn general clean code principles like how to refactor incrementally, how to handle asynchronous code with delegates and callbacks, how to write clean UI code by managing the view hierarchy and each view's geometry, and of course, how to write tests with the appropriate scope.

These are not things you can learn overnight. It takes time and raw experience. I wouldn't dare call myself an expert even after a year of working with an OOP language.

A year on the job now, FP is still everyone's favorite topic. It has been for years and it will be for years. Hearing my colleagues laugh about *monads* made me feel like I was missing out on a big inside joke. I wanted to be on the inside and possess this higher theoretical knowledge they all seem to have.

But does that mean I should start a 400 page book on Haskell tomorrow? Unless you're working in a Haskell codebase, the answer is *No*. Haskell can wait. OOP can not.

So if you find yourself craving FP knowledge while stuck in an equally unfamiliar OOP world, don't neglect OOP. It's best to become a master of your domain first before venturing elsewhere. Plus, if you talk with functional programmers, you will find that they typically learned OOP first, or if they didn't, they are very aware of OOP concepts. So you should be too!

#### Step 2: Learn a little FP

Functional programming concepts appear in and are frequently being added to newer versions of traditional OOP languages. Take for instance C++ 11 which now provides support for lambda functions.  So as a first forray into functional programming, I suggest taking a language you're already familiar with and googling "functional" plus the name of your language.  You should get familiar with map, filter, reduce, and lambda functions. Try using some immutable data structures.  Then try and incorporate these newly-learned things into your daily work.

In Prezi's iOS codebase, I noticed we were using a library called ReactiveCocoa to help with some asynchronous code. I learned that most languages have a so-called "reactive extension" to simplify user-facing UI code by combining the ideas of streams and functional programming. This is great news! It means that I can learn some functional reactive programming (thereby learning some FP concepts) while still aligning with my first priority of mastering my OOP domain.

So if you are working in a user-facing environment, google "reactive" plus the name of your language, and see if you can incorporate streams into your daily work. If you're really curious about FRP, I suggest taking a brief deep-dive into the wonderful world of Elm, a functional reactive language which compiles to html/css/javascript. I did this, and here's <a target="_blank" href="./fp-virgin-learns-elm.html">my takeaway</a>.

Exposure is helpful, but not necessary. At the least you can just read a few articles on the web about FP or even better --  attend a few Haskell meetups in your city.

#### Step 3: Learn about programming languages

Finally ready to attack an FP language, I was unsure which language to start with. As an iOS developer, I surely should get familiar with Apple's new language Swift which is said to be "much more functional" than Objective-C. But it's still OOP. Or do I learn Haskell? The language which everyone is learning at Prezi, but which might be too irrelevant to my daily work.

By mere chance, a friend of mine contacted me saying he was going to take <a target="_blank" href="https://www.coursera.org/course/proglang">this class on programming languages</a>, and would I like to join him?  I thought, wow this is perfect! A class which will teach me how FP and OOP fit into a larger picture while it strongly emphasizes functional programming topics.

I'm not going to give a complete review of the course here and now. My advice is simply to take it. The professor Dan Grossman has clearly spent way too much time optimizing the learning process. You get 4 hours of quality video lectures each week, with about 4-8 hours of homework (I confess I didn't do it all) as well as ~15 pages of LaTeXified notes from him summarizing the lectures. It's also nice that he teaches ML first because it's actually a pretty simple language, and it serves as the ancestor of other languages like OCaml.

To summarize what I took from the course: you can learn the syntax of any language as well as its idiosyncracies, but if you are armed with the knowledge of universal programming language concepts (e.g. function closures and currying), you will be able to learn, use, bend, and manipulate languages more easily. You will also understand the problems one faces when creating a language.

#### Step 4:  Learn a widely-used FP language

Having exposure to Elm and familiarity with ML and Racket (from the programming languages course), I finally felt ready to learn a widely-used functional programming language. There was no doubt it would be Haskell.  Partly because all these monad, functor, buzzword, buzzword conversations, and partly because it would allow me the opportunity to return to the world of math which I left not long ago. Hearing that category theory and abstract algebra had applications in programming absolutely befuddled me, and piqued my curiosity to the max. And of course, the community of people learning Haskell at Prezi certainly had a hand in the decision.

I read the book *Learn You a Haskell for Great Good!* and I think it was just what I wanted -- few exercises and a quick bring-me-up-to-speed-with-syntax-and-theory book.  I breezed through the first 7 or 8 chapters because a lot of it was just showing how to do things I already knew how to do in ML with Haskell syntax. Some things were new of course, like type classes, so you wouldn't want to skip any chapter.

There is a natural break between the first part of the book and the second where the author implements a nontrivial Haskell program to get used to organizing Haskell code. But come on, are polish calculators the only thing book authors ever implement?  Anyways, the second part of the book took me twice as long to read because it's deeper in theory than the first, but it was the most interesting because it's where you learn all the buzzwords.

The book has left me wanting more explanation for how these abstract concepts came into being. I emailed my math friends about good intro articles to category theory, but they've warned me that I should be careful because it's <a target="_blank" href="http://en.wikipedia.org/wiki/Turtles_all_the_way_down">turtles all the way down</a>.

I did feel that my math background gave me just a slight edge in learning these concepts because of a <a target="_blank" href="http://en.wikipedia.org/wiki/Monad_%28category_theory%29#Formal_definition">certain commutative diagram</a> I had in my head while reading about functors and monads. But at the same time, this stuff is definitely accessible to anyone, and the author does a good job of giving some guiding examples.

#### What now?

I only read a book on Haskell, but I still need to write something nontrivial before I can say that I actually can use a functional programming language, so I see that as my next step (let me know if you need help in your Haskell project ;)). 

For the time being, at those times when I normally use Python to write non-Objective-C code, I will probably try using Haskell instead. I will continue to attend Haskell meetups.  I will no doubt learn Swift sooner or later and apply the FP concepts I've learned. I can talk with my colleagues about ways to bend Objective-C in a functional way, check out monad libraries, have a better understanding of some ReactiveCocoa stuff, etc.


#### Conclusion

There's no rush to learn FP. Keep calm and learn OOP, if it feels right.

You can do little things to get familiar with FP to make the wait more bearable. Check out reactive extensions and FRP!

Then when you do learn FP, consider learning an older, simpler FP language first like ML or take a course which teaches you about programming languages in general.

When you feel ready, learn a widely-used FP language which has a supportive community near you!

