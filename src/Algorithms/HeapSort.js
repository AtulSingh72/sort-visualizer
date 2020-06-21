export function getHeapSortAnimations(newArray) {
    let animations = [];
    let array = newArray;
    heapSort(array, animations);
    const JSSortedArray = array.slice().sort((a, b) => a - b); // Sorting array using predifined method to check if our array is actually sorted or not
    if (isEqual(JSSortedArray, array)) {
        console.log("Heap Sort works correctly");
    } else {
        console.log("Heap Sort not working");
    }
    newArray = array;
    return [animations, newArray];
}

function heapSort(array, animations) {
    const n = array.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, animations, n, i);
    }

    for (let i = n - 1; i >= 0; i--) {
        animations.push([0, 0, i]);
        animations.push([0, 0, i]);
        animations.push([1, 0, array[i]]);
        animations.push([1, i, array[0]]);
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        heapify(array, animations, i, 0);
    }
}

function heapify(array, animations, n, i) {
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < n && array[l] > array[largest]) {
        animations.push([0, largest, l]);
        animations.push([0, largest, l]);
        largest = l;
    }

    // If right child is larger than largest so far
    if (r < n && array[r] > array[largest]) {
        animations.push([0, largest, r]);
        animations.push([0, largest, r]);
        largest = r;
    }

    // If largest is not root
    if (largest != i) {
        animations.push([1, i, array[largest]]);
        animations.push([1, largest, array[i]]);
        let swap = array[i];
        array[i] = array[largest];
        array[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(array, animations, n, largest);
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
