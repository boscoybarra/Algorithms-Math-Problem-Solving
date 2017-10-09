# Problem 1. Island Count

Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

Explain and code the most efficient solution possible and analyze its time and space complexities.

# Example:

input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

output: 6 # since this is the number of islands in binaryMatrix.
          # See all 6 islands color-coded below.


### Hints

Award Budget Cuts

* If your peer is stuck, ask them if they know how to traverse a undirected graph.

* At this point, you peer may come up with a recursive solution by using a Breadth-First Search (BFS) or a Depth-First Search (DFS) algorithm. While this works, see if you can nudge them toward an iterative solution. This is not a must, but preferable.

* Make sure that your peer’s code does not access out of bound indices, especially when trying to traverse adjacent cells in binaryMatrix.

* Watch out for duplicate island counting in your peer’s code. It’s important that a visited cell of 1 is marked properly to avoid redundant counting.

* Any solution that takes more than O(N⋅M) time isn’t optimal.

### Solution

You can check the solution here: SOLUTION Problem 2.md , in the Solution folder you will also find the Swift Playground with my response. Not necessarily the "correct" one.


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