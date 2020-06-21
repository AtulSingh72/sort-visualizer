export function getQuickSortAnimation(newArray) {
    let animations = [];
    let array = newArray;
    quickSort(array, animations, 0, array.length - 1);
    const JSSortedArray = array.slice().sort((a, b) => a - b); // Sorting array using predifined method to check if our array is actually sorted or not
    if (isEqual(JSSortedArray, array)) {
        console.log("Quick Sort works correctly");
    } else {
        console.log("Quick Sort not working");
    }
    newArray = array;
    return [animations, newArray];
}

function quickSort(array, animations, start, end) {
    if (start >= end) {
        return;
    }
    let pi = partition(array, animations, start, end);
    quickSort(array, animations, start, pi - 1);
    quickSort(array, animations, pi + 1, end);
}

function partition(array, animations, low, high) {
    let pivot = array[high];
    let i = low;
    for (let j = low; j < high; j++) {
        animations.push([0, i, high]);
        animations.push([0, i, high]);
        if (array[j] <= pivot) {
            animations.push([1, i, array[j]]);
            animations.push([1, j, array[i]]);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
        }
    }

    animations.push([1, i, array[high]]);
    animations.push([1, high, array[i]]);
    let temp = array[i];
    array[i] = array[high];
    array[high] = temp;

    return i;
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
