# Solution 2. Island Count

## Island Count

This problem is very similar to counting the number of connected components in an Undirected Graph. However, Graph Theory isn’t necessary to solve this problem or to understand its solution. In an undirected graph, a connected component is a group of vertices in which every vertex is connected to at least one other vertex. In a similar way, an island in the matrix is a group of adjacent (connected) 1s.

To solve this problem, we’ll traverse binaryMatrix and every time we come across a cell of 1 we’ll do the following: Change that cell and all its vertically and horizontally (but not diagonally) adjacent 1s into -1s. We do this “expansion” in order to avoid recounting of islands. Increment islands - which is our counter for number of islands - by 1. Expanding from a cell whose value is 1 to other adjacent 1s in binaryMatrix is similar to running a Breadth-First Search (BFS) or a Depth-First Search (DFS).

In our case, we’ll avoid using a recursion and instead opt for an iterative approach to expand to all adjacent 1s. We do so by using queue that holds the next indices to visit. We keep expanding to other adjacent 1s as long as the queue is not empty. Whenever we encounter a value of -1 in our traversal, we ignore it since it is part on an island we’ve already counted.


# Pseudocode

`function getNumberOfIslands(binaryMatrix):
    islands = 0
    rows = binaryMatrix.length # number of rows
    cols = binaryMatrix[0].length # number of columns

    for i from 0 to rows-1:
        for j from 0 to cols-1:
            if (binaryMatrix[i][j] == 1):
                markIsland(binaryMatrix, rows, cols, i, j)
                islands++
                
    return islands


function markIsland(binaryMatrix, rows, cols, i, j):
    q = new Queue()
    q.push([i,j])
    while (!q.isEmpty()):
        item = q.pop()
        x = item[0]
        y = item[1]
        if (binaryMatrix[x][y] == 1):
            binaryMatrix[x][y] = -1
            pushIfValid(q, rows, cols, x-1, y)
            pushIfValid(q, rows, cols, x, y-1)
            pushIfValid(q, rows, cols, x+1, y)
            pushIfValid(q, rows, cols, x, y+1)


function pushIfValid(q, rows, cols, x, y):
    if (x >= 0 AND x < rows AND y >= 0 AND y < cols):
        q.push([x,y])
`



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