class MaxHeap {
    heap = [];
    constructor(heap) {this.heap = heap}

    get Heap () {
        return this.heap;
    }

    add = (item) => {
        this.heap.push(item);
        this.prepareHeap();
    }

    remove = () => {
        const top = this.heap[0];
        this.heap[0] = this.heap[this.heap.length-1];
        this.heap.pop();
        this.prepareHeap();
        return top;
    }

    peekTop = (n) => {
        var res = [];
        for(let i = n; i > 0; i--) res.push(this.remove());
        return res;
    }

    isHeap = (i) => {
        if(i > this.heap.length) return true;
        
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if(this.heap[left] > this.heap[i]
            || this.heap[right] > this.heap[i]
            || !this.isHeap(left)
            || !this.isHeap(right))
            return false;

        return true;
    }

    swap = (l, r) => {
        [this.heap[l], this.heap[r]] = [this.heap[r], this.heap[l]]
    }

    heapify = (i = this.heap.length - 1, n) => {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if(left < n && this.heap[largest] < this.heap[left]) {
            largest = left;
        }

        if(left < n && this.heap[largest] < this.heap[right]) {
            largest = right;
        }

        if(largest !== i) {
            this.swap(i, largest);
            this.heapify(largest, n);
        }
    }

    prepareHeap = () => {
        const n = this.heap.length;
        for(let i = n - 1 ; i >= 0; i--) 
            this.heapify(i, n);
    }
    
}

module.exports = MaxHeap;