//: Playground - noun: a place where people can play

import Foundation

// Given Array of grants
var grantsArray = [2, 100, 50, 120, 1000]
// Array were to store the impact of as few grant recipients as possible
var newBudgetArray = [Array<Int>]()
// Finalist
var finalBudgetArrayToPresentToUniversity = [Array<Int>]()

let newBudget = 190
grantsArray.count

// Normal distribution of a Gaussian distribution taking into the account the hypothesis that we want the maximum N to benefit from grants with the current limitations.

let totalAmountForAll = newBudget / 5

func findGrantsCap(grantsArray: [Int], newBudget: Int) {

    for grant in grantsArray {
        if grant >= totalAmountForAll {
            newBudgetArray.append([grant])
        } else {
            print("There was a grant lower than what the avarage provides")
        }
    }

}

findGrantsCap(grantsArray: grantsArray, newBudget: newBudget)

print(newBudgetArray)

let finalist = newBudgetArray.count

let grantsForAll = newBudget / finalist

func findGrantsCapWithNewAmount(grantsArray: [Int], newBudget: Int) {
    
    for grant in grantsArray {
        if grant >= grantsForAll {
            finalBudgetArrayToPresentToUniversity.append([grantsForAll])
        } else {
            finalBudgetArrayToPresentToUniversity.append([grant])
        }
    }
    
}

findGrantsCapWithNewAmount(grantsArray: grantsArray, newBudget: newBudget)
print(finalBudgetArrayToPresentToUniversity)


