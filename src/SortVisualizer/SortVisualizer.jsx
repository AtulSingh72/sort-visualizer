import React, { Component } from "react";
import "./SortVisualizer.css";
import { getBubbleSortAnimation } from "../Algorithms/BubbleSort";
import { getSelectionSortAnimation } from "../Algorithms/SelectionSort";
import { getInsertionSortAnimation } from "../Algorithms/InsertionSort";
import { getMergeSortAnimations } from "../Algorithms/MergeSort";
import { getQuickSortAnimation } from "../Algorithms/QuickSort";
import { getHeapSortAnimations } from "../Algorithms/HeapSort";

var cancel = false;
var timer;

class SortVisualizer extends Component {
    state = {
        array: [],
    };
    componentDidMount() {
        console.log("Array Generated");
        this.generateArray();
    }

    generateArray = () => {
        const array = [];
        for (var i = 0; i < 400; i++) {
            array.push(this.randomIntFromInterval(10, 560));
        }
        this.setState({ array: array });
    };

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    render() {
        return (
            <div>
                <div
                    className="array-container"
                    style={{ textAlign: "center", margin: "30px auto" }}
                >
                    {this.state.array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{ height: value.toString().concat("px") }}
                        ></div>
                    ))}
                </div>
                <div className="navigate" style={{ textAlign: "center" }}>
                    <button
                        className="btn m-2 btn-sm btn-light btn-outline-dark"
                        onClick={this.generateArray}
                    >
                        Generate Array
                    </button>
                    <button
                        className="btn m-2 btn-sm btn-light btn-outline-dark"
                        onClick={this.bubbleSort}
                    >
                        Bubble Sort
                    </button>
                    <button
                        className="btn m-2 btn-sm btn-light btn-outline-dark"
                        onClick={this.mergeSort}
                    >
                        Merge Sort
                    </button>
                    <button
                        className="btn m-2 btn-sm btn-light btn-outline-dark"
                        onClick={this.insertionSort}
                    >
                        Insertion Sort
                    </button>
                    <button
                        className="btn m-2 btn-sm btn-light btn-outline-dark"
                        onClick={this.heapSort}
                    >
                        Heap Sort
                    </button>
                    <button
                        className="btn m-2 btn-sm btn-light btn-outline-dark"
                        onClick={this.quickSort}
                    >
                        Quick Sort
                    </button>
                    <button
                        className="btn m-2 btn-sm btn-light btn-outline-dark"
                        onClick={this.selectionSort}
                    >
                        Selection Sort
                    </button>
                </div>
            </div>
        );
    }

    bubbleSort = () => {
        const [animations, array] = getBubbleSortAnimation(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i % 4 === 0 || i % 4 === 1;
            const arrayBars = document.getElementsByClassName("array-bar");
            if (isColorChange === true) {
                const color = i % 4 === 0 ? "red" : "turquoise";
                const [barone, bartwo] = animations[i];
                const baroneStyle = arrayBars[barone].style;
                const bartwoStyle = arrayBars[bartwo].style;
                setTimeout(() => {
                    baroneStyle.backgroundColor = color;
                    bartwoStyle.backgroundColor = color;
                }, i * 10);
            } else {
                const [barindex, newHeight] = animations[i];
                if (barindex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barindex].style;
                setTimeout(() => {
                    barStyle.height = newHeight.toString().concat("px");
                }, i * 10);
            }
        }
    };

    selectionSort = () => {
        const [animations, array] = getSelectionSortAnimation(this.state.array);
        var c = 0;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            if (animations[i][0] === 0) {
                const color = c % 2 === 0 ? "red" : "turquoise";
                c = c + 1;
                const [random, barone, bartwo] = animations[i];
                const baroneStyle = arrayBars[barone].style;
                const bartwoStyle = arrayBars[bartwo].style;
                setTimeout(() => {
                    baroneStyle.backgroundColor = color;
                    bartwoStyle.backgroundColor = color;
                }, i * 10);
            } else {
                const [random, barindex, newHeight] = animations[i];
                const barStyle = arrayBars[barindex].style;
                setTimeout(() => {
                    barStyle.height = newHeight.toString().concat("px");
                }, i * 10);
            }
        }
    };

    insertionSort = () => {
        const [animations, array] = getInsertionSortAnimation(this.state.array);
        var c = 0;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            if (animations[i][0] === 0) {
                const color = c % 2 === 0 ? "red" : "turquoise";
                c = c + 1;
                const [random, barone, bartwo] = animations[i];
                const baroneStyle = arrayBars[barone].style;
                const bartwoStyle = arrayBars[bartwo].style;
                setTimeout(() => {
                    baroneStyle.backgroundColor = color;
                    bartwoStyle.backgroundColor = color;
                }, i * 10);
            } else {
                const [random, barindex, newHeight] = animations[i];
                const barStyle = arrayBars[barindex].style;
                setTimeout(() => {
                    barStyle.height = newHeight.toString().concat("px");
                }, i * 10);
            }
        }
    };

    mergeSort = () => {
        const [animations, array] = getMergeSortAnimations(this.state.array);
        const arrayBars = document.getElementsByClassName("array-bar");
        for (let i = 0; i < animations.length; i++) {
            if (i % 3 == 1 || i % 3 == 0) {
                const color = i % 3 == 0 ? "red" : "turquoise";
                const [barone, bartwo] = animations[i];
                const baroneStyle = arrayBars[barone].style;
                const bartwoStyle = arrayBars[bartwo].style;
                timer = setTimeout(() => {
                    baroneStyle.backgroundColor = color;
                    bartwoStyle.backgroundColor = color;
                }, i * 10);
            } else {
                const [barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                timer = setTimeout(() => {
                    barStyle.height = newHeight.toString().concat("px");
                }, i * 10);
            }
        }
    };

    quickSort = () => {
        const [animations, array] = getQuickSortAnimation(this.state.array);
        const arrayBars = document.getElementsByClassName("array-bar");
        let c = 0;
        for (let i = 0; i < animations.length; i++) {
            if (animations[i][0] === 0) {
                const color = c % 2 === 0 ? "red" : "turquoise";
                c = c + 1;
                const [random, barone, bartwo] = animations[i];
                const baroneStyle = arrayBars[barone].style;
                const bartwoStyle = arrayBars[bartwo].style;
                setTimeout(() => {
                    baroneStyle.backgroundColor = color;
                    bartwoStyle.backgroundColor = color;
                }, i * 10);
            } else {
                const [random, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = newHeight.toString().concat("px");
                }, i * 10);
            }
        }
    };

    heapSort = () => {
        const [animations, array] = getHeapSortAnimations(this.state.array);
        const arrayBars = document.getElementsByClassName("array-bar");
        let c = 0;
        for (let i = 0; i < animations.length; i++) {
            if (animations[i][0] === 0) {
                const color = c % 2 === 0 ? "red" : "turquoise";
                c = c + 1;
                const [random, barone, bartwo] = animations[i];
                const baroneStyle = arrayBars[barone].style;
                const bartwoStyle = arrayBars[bartwo].style;
                setTimeout(() => {
                    baroneStyle.backgroundColor = color;
                    bartwoStyle.backgroundColor = color;
                }, i * 10);
            } else {
                const [random, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = newHeight.toString().concat("px");
                }, i * 10);
            }
        }
    };
}

export default SortVisualizer;
