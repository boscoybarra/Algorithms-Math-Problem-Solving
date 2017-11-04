//: Playground - noun: a place where people can play

import Foundation

//Explanation
//For every grade higher than the other, these two students get one point. If they draw in one of them, they do not get credit. What is the final result?

// Enter your code here

let arrayA = [5,6,7]
let arrayB = [3,6,10]

func checkScores2(arrayA: [Int], arrayB: [Int]){
    
    var alice = 0
    var bob = 0
    
    for index in 0...2{
        if arrayA[index] > arrayB[index]{
            alice += 1
        }
        if arrayA[index] < arrayB[index] {
            bob += 1
        }
    }
    print(alice, bob)
}


checkScores2(arrayA: arrayA, arrayB: arrayB)
