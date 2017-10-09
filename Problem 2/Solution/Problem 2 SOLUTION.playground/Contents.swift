//: Playground - noun: a place where people can play

import Foundation

var binaryMatrix = [ [0,    1,    0,    1,    0],
                     [0,    0,    1,    1,    1],
                     [1,    0,    0,    1,    0],
                     [0,    1,    1,    0,    0],
                     [1,    0,    1,    0,    1] ]

// Number of rows
var rows = binaryMatrix.count
let rowsForIndex = rows-1

// Number of columns
var columns = binaryMatrix[0].count
let columnsForIndex = columns-1

let binaryMatrixSimplifed = Array(binaryMatrix)

func getNumberOfIslands(binaryMatrix: [[Int]]) -> Int {
    
    var islands = 0
    
    for i in 0...rowsForIndex {
        for j in 0...columnsForIndex{
            if binaryMatrix[i][j] == 1 {
                markIsland(binaryMatrix, rowsForIndex, columnsForIndex, i, j)
                islands += 1
            }
        }
    }
    
    return islands
}


func markIsland(binaryMarix: Array<Any>, rowsForIndex:Int, columnsForIndex: Int, i:Int, j:Int){
    let q = new Queue()
    q.append([i,j])
    while !q.isEmpty {
        x = item[0]
        y = item[1]
        if binaryMatrix[x][y] == 1{
            binaryMatrix[x][y] = -1
            pushIfValid()
        }
    
    
    }
}

func pushIfValid(q: Int, rowsForIndex:Int, columnsForIndex:Int, x:Int, y:Int){
    if x >= 0 && x < rows && y >= 0 && y < cols {
        q.append([x,y])
    }
}


