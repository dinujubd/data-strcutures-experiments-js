class MeanHeap {
    heap = []
    constructor(heap) {
        this.heap = heap;
    }

    get Heap() {
        return this.heap;
    }

    add = (value) => {
        this.heap.push(value);
        this.prepareHeap();
    }

    remove = () => {
        const top = this.heap[0];
        this.swap(0, this.heap.length-1);
        this.heap.pop();
        this.prepareHeap();
        return top;
    }

    isHeap = (i) => {
        if (i > this.heap.length - 1) return true;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        if (this.heap[i] > this.heap[left]
            || this.heap[i] > this.heap[right]
            || !this.isHeap(left)
            || !this.isHeap(right)) {
            return false;
        }
        return true;
    }

    swap = (l, r) => {
        [this.heap[l], this.heap[r]] = [this.heap[r], this.heap[l]];
    }

    heapify = (i = this.heap.length - 1, n) => {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let smallest = i;

        if (left < n && this.heap[smallest] > this.heap[left]) {
            smallest = left;
        }

        if (right < n && this.heap[smallest] > this.heap[right]) {
            smallest = right;
        }

        if (smallest !== i) {
            this.swap(i, smallest);
            this.heapify(smallest, n);
        }
    }

    peekTop = (n) => {
        n = Math.min(n,this.heap.length);

        const res = [];

        for(var i = 1; i <= n; i++) {
            res.push(this.remove());
        }
        
        return res;
    }

    sort = () => {
        this.prepareHeap();
        const n = this.heap.length;
        for (let i = n-1; i > 0; i--) {
            this.swap(0, i);
            this.prepareHeap(i);
        }
    }

    prepareHeap = (n = this.heap.length) => {
        for (let i = n-1; i >= 0; i--)
            this.heapify(i, n);
    }


}

module.exports = MeanHeap