const heapify = (heap, n, i) => {

    let largest = i;
    let left = 2 * i + 1;
    let right = left + 1;

    if (left < n && heap[largest] < heap[left]) {
        largest = left;
    }

    if (left < n && heap[largest] < heap[right]) {
        largest = right;
    }

    if (largest !== i) {
        [heap[i], heap[largest]] = [heap[largest], heap[i]]
        heapify(heap, largest)
    }

}

const sort = (n, heap) => {
    for (let i = n - 1; i > 0; i--) {
        [heap[0], heap[i]] = [heap[i], heap[0]];
        heapify(heap, i, 0);
    }
}

const heapSort = (heap) => {
    let n = heap.length
    for (let i = n / 2 - 1; i >= 0; i--)
        heapify(heap, n, i);

    sort(n, heap);

    return heap;
}

module.exports = heapSort
