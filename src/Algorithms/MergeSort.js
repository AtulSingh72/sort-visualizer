export function getMergeSortAnimations(newArray) {
    let animations = [];
    let array = newArray;
    mergeSort(array, animations, 0, array.length - 1);
    const JSSortedArray = array.slice().sort((a, b) => a - b); // Sorting array using predifined method to check if our array is actually sorted or not
    if (isEqual(JSSortedArray, array)) {
        console.log("Merge Sort works correctly");
    } else {
        console.log("Merge Sort not working");
    }
    newArray = array;
    return [animations, newArray];
}

function mergeSort(array, animations, start, end) {
    if (start == end) {
        return;
    }
    const mid = Math.floor((start + end) / 2);
    mergeSort(array, animations, start, mid);
    mergeSort(array, animations, mid + 1, end);
    merge(array, start, end, mid, animations);
}

function merge(array, start, end, mid, animations) {
    let sortArray = [];
    let i = start;
    let j = mid + 1;
    while (i <= mid && j <= end) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (array[i] < array[j]) {
            animations.push([sortArray.length + start, array[i]]);
            sortArray.push(array[i++]);
        } else {
            animations.push([sortArray.length + start, array[j]]);
            sortArray.push(array[j++]);
        }
    }
    while (i <= mid) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([sortArray.length + start, array[i]]);
        sortArray.push(array[i++]);
    }
    while (j <= end) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([sortArray.length + start, array[j]]);
        sortArray.push(array[j++]);
    }
    for (let i = start; i <= end; i++) {
        array[i] = sortArray[i - start];
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
