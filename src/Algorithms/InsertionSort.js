export function getInsertionSortAnimation(newArray) {
    let animations = [];
    let array = newArray;
    insertionSort(array, animations);
    const JSSortedArray = array.slice().sort((a, b) => a - b); // Sorting array using predifined method to check if our array is actually sorted or not
    if (isEqual(JSSortedArray, array)) {
        console.log("Selection Sort works correctly");
    } else {
        console.log("Selection Sort not working");
    }
    newArray = array;
    return [animations, newArray];
}

function insertionSort(array, animations) {
    const n = array.length;
    for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            animations.push([0, i, j]);
            animations.push([1, j + 1, array[j]]);
            array[j + 1] = array[j];
            animations.push([0, i, j]);
            j = j - 1;
        }
        animations.push([1, j + 1, key]);
        array[j + 1] = key;
    }
}

function isEqual(array1, array2) {
    if (array2.length != array1.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            return false;
        }
    }

    return true;
}
