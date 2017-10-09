# Problem 1. Award Budget Cuts

The awards committee of your alma mater (i.e. your college/university) asked for your assistance with a budget allocation problem they’re facing. Originally, the committee planned to give N research grants this year. However, due to spending cutbacks, the budget was reduced to newBudget dollars and now they need to reallocate the grants. The committee made a decision that they’d like to impact as few grant recipients as possible by applying a maximum cap on all grants. Every grant initially planned to be higher than cap will now be exactly cap dollars. Grants less or equal to cap, obviously, won’t be impacted.

Given an array grantsArray of the original grants and the reduced budget newBudget, write a function findGrantsCap that finds in the most efficient manner a cap such that the least number of recipients is impacted and that the new budget constraint is met (i.e. sum of the N reallocated grants equals to newBudget).

Analyze the time and space complexities of your solution.

# Example:

'input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190

output: 47 # and given this cap the new grants array would be
           # [2, 47, 47, 47, 47]. Notice that the sum of the
           # new grants is indeed 190'


### Hints

Award Budget Cuts

* If you peer is stuck, ask them how they can use sorting in order to arrive to the solution. It’s probably easier to solve if the array is sorted in a descending order. However, this is not a must.

* If your peer doesn’t know how to proceed, suggest to them to test out each of the values in the sorted grants array as a potential cap.

* A key step in the solution is knowing how to test whether a certain value is indeed the cap. Push your peer to provide a clear explanation on how to do that.

* If your peer is in the right direction, they’d be able to find out a lower bound to the cap, based on the given grants values. The next step in the solution then would be to calculate the exact cap given that lower bound.

* Note that there can be only one possible value of cap. You peer may not pay attention to the cap definition and use a lower cap that affects more grants. Make sure your peer is solving for the right cap as defined - one that affects the minimum number of grants.

### Solution

You can check the solution here: SOLUTION Problem 1.md , in the Solution folder you will also find the Swift Playground with my response. Not necessarily the "correct" one.


### Tech

The problems uses the following tech:

* [Swift] - Swift is a powerful and intuitive programming language for macOS, iOS, watchOS and tvOS.
* [Xcode] - Xcode is a complete developer toolset for creating apps for Mac, iPhone, iPad, Apple Watch, and Apple TV.


### Todos

 - Add the option to include collaborations.
 - Improve Swift sintax for the hints and solutions.

### License

Exercises are from www.pramp.com

MIT License

Copyright (c) 2017 TED

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

MIT