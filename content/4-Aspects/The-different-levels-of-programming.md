# The different levels of programming

Like anything else, especially trolls and onions, programming have layers. There are many solutions to the same problems.

http://worrydream.com/LearnableProgramming/

While some solutions are better than others, as a beginner it is important to understand that the definition of ‘yes it works’ is very vague when it comes to web development.

## That programming is about solving problems, not writing code.  Here are the four basic tasks that an individual programmer must perform.

	1.	Define the problem (requirements and constraints).
	2.	Define the solution (algorithms and data structures).
	3.	Express the solution in code.
	4.	Prove and/or test correctness.

A lot of people get really good at #3 because it's by far the easiest, but never master the other parts and as a result remain mediocre programmers at best.  Often a good programmer can solve a problem without writing any code at all, by using their knowledge and experience to avoid a problem or find solutions that don't require new code.  In a team, an experienced programmer can often contribute most by helping people with the other non-coding tasks, including a vast array of tasks and skills that don't even come into play for an individual working alone (and were thus left off the list for the sake of brevity).

Once you're proficient in using the tools of your trade, further expertise comes from understanding a particular problem domain other than programming.  It might be something serious like physics or medicine.  It might be something venal like ad targeting or high-frequency training.  It might be something frivolous like games.  You might switch specialties several times during your career.  In any case, being a great programmer means applying the technologies and techniques at hand to some goal other than programming itself.





1. Pick some great developers in your field, and learn about the cutting-edge things they're doing. Go to user groups when they're presenting, read their blogs, read their books, help out on their open-source projects. Try to understand the principles they're aiming at, and don't just blindly follow the techniques. I've seen IoC DI implementations go horribly awry because the developer didn't see the warning signs of the very things that pattern is supposed to avoid.

2. Avoid technique attachment ("Ooh, shiny!" syndrome). There's a tendency to always try to use the newest techniques you're learned. Event sourcing is cool, but it's not the solution to every problem. IoC makes sense, most of the time. Using lambda expressions and closures can often make a solution clearer and simpler, but you don't have to shoe-horn them into every single algorithm you write. There's nothing wrong with starting a hobby or throw-away project with the intention of learning a new technique, but when you're building code to solve a real-world problem, pick the right tool for the job.

3. Know your libraries and frameworks, and use them instead of writing your own implementations. Especially, don't try to write your own date and time routines!

4. Pay attention to warnings, whether they're coming from your compiler, IDE, or other tools. The people who write them understand the language deeply, and these warnings are their way of teaching you important details about the language. Don't just change the code to avoid the warning; make sure you understand what the person who designed that warning is trying to tell you.

5. When you're building code, constantly re-factor, and don't get too attached to a design or block of code. This point deserves fleshing out a little, so I'm going to go into some more detail:

Be prepared to throw away code. Sometimes, you'll write 20 lines, re-factor them a bit, and realise that you basically just re-implemented something offered by a framework or library you're using, or something you've already written. Throw it out! DRY doesn't just refer to your own code. It also covers DRYF ("Don't Repeat Your Framework") and DRYL ("Don't Repeat Your Libraries").

No matter how carefully you consider your up-front design (if you prefer exploratory coding, this is even more crucial), you are going to run into things you hadn't thought of - and there's a good chance your design won't quite accomodate every single detail you encounter. Aggressively refactor your own code as you're writing it (know your IDE, particularly the refactoring tools it provides). Move bits of code between classes. Introduce new classes. Split methods into two, or three, or more. Throw out classes which don't make sense. Rename things the first time you read the name and think, "what does that mean again?". Keep SRP in mind, and the moment you find yourself trying to make one class do two different things, turn it into two classes.

Writing software isn't like running a race - you don't start at the beginning, follow a pre-defined route, and end up at the finish. Think of it more as writing out post-it notes and shuffling them around on a board, sometimes making edits or throwing some notes out entirely, sometimes writing new ones, until you satisfy an on-looker (your tests!) that everything looks right.

(And finally, on that note... write automated tests. I don't buy in to the principles of TDD, but I definitely buy into the practice. I usually flip it around in my head - it's not that your code is complete once it satisfies the test; rather, your tests are complete once they demonstrate that the code functions correctly. I've seen too much code 'proven' by incorrect or incomplete tests to be happy with "write the test, write the minimum code to pass the test".)

Here's the promised tl;dr:
1. Follow good developers, and try to understand their ideas.
2. Pick the right tool, not your favourite tool.
3. Know your libraries and frameworks, so you don't repeat them.
4. Pay attention to compiler/editor/etc. warnings!
5. Refactor all the time - especially new code, especially as you're writing it.
