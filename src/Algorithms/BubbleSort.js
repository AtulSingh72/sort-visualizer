export function getBubbleSortAnimation(newArray) {
    let animations = [];
    let array = newArray.slice();
    bubbleSort(array, animations);
    const JSSortedArray = array.slice().sort((a, b) => a - b); // Sorting array using predifined method to check if our array is actually sorted or not
    if (isEqual(JSSortedArray, array)) {
        console.log("Bubble Sort works correctly");
    } else {
        console.log("Bubble Sort not working");
    }
    newArray = array;
    return [animations, newArray];
}

// Bubble Sort algorithm
function bubbleSort(array, animations) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            if (array[j] > array[j + 1]) {
                animations.push([j, array[j + 1]]);
                animations.push([j + 1, array[j]]);
                swap(array, j, j + 1);
            } else {
                animations.push([-1, -1]);
                animations.push([-1, -1]);
            }
        }
    }
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function isEqual(array1, array2) {
    if (array1.length != array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            return false;
        }
    }
    return true;
}
