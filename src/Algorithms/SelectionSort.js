export function getSelectionSortAnimation(newArray) {
    let animations = [];
    let array = newArray.slice();
    SelectionSort(array, animations);
    const JSSortedArray = array.slice().sort((a, b) => a - b); // Sorting array using predifined method to check if our array is actually sorted or not
    if (isEqual(JSSortedArray, array)) {
        console.log("Selection Sort works correctly");
    } else {
        console.log("Selection Sort not working");
    }
    newArray = array;
    return [animations, newArray];
}

function SelectionSort(array, animations) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let min_index = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[min_index]) {
                min_index = j;
            }
            animations.push([0, j, min_index]);
            animations.push([0, j, min_index]);
        }
        animations.push([1, i, array[min_index]]);
        animations.push([1, min_index, array[i]]);
        swap(array, i, min_index);
    }
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
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
