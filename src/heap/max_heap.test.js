const MaxHeap = require("./max_heap");

describe("max heap", () => {
    it("should initialize properly", () => {
        const { Heap } = new MaxHeap([1, 2, 3]);
        expect(Heap).toStrictEqual([1, 2, 3])
    });

    it("verify is max heap", () => {
        const h1 = new MaxHeap([7, 6, 5, 4, 3, 2, 1]);
        const h2 = new MaxHeap([1, 2, 3, 4, 5, 6, 7]);
        expect(h1.isHeap(0)).toBe(true);
        expect(h2.isHeap(0)).toBe(false);
    });

    it("heapify properly", () => {
        const { Heap, heapify } = new MaxHeap([1, 2, 3, 4, 5, 6, 7]);
        heapify(Heap.length - 1, Heap.length);
        expect(Heap).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
        heapify(2, Heap.length);
        expect(Heap).toStrictEqual([1, 2, 7, 4, 5, 6, 3]);
        heapify(1, Heap.length);
        expect(Heap).toStrictEqual([1, 5, 7, 4, 2, 6, 3]);
        heapify(0, Heap.length);
        expect(Heap).toStrictEqual([7, 5, 6, 4, 2, 1, 3]);
    });

    it("prepare heap should heapify properly", () => {
        const { Heap, prepareHeap } = new MaxHeap([1, 2, 3, 4, 5, 6, 7]);
        prepareHeap();
        expect(Heap).toStrictEqual([7, 5, 6, 4, 2, 1, 3]);
    });

    it("add item should heapify properly", () => {
        const { Heap, prepareHeap, add } = new MaxHeap([6, 5, 4, 3, 2, 1]);
        prepareHeap();
        add(7);
        expect(Heap).toStrictEqual([7, 5, 6, 3, 2, 1, 4]);
        add(8);
        expect(Heap).toStrictEqual([8, 7, 6, 5, 2, 1, 4, 3]);
    });

    it("sort should heapify properly", () => {
        const { Heap, prepareHeap, peekTop } = new MaxHeap([1, 2, 3, 4, 5, 6, 7]);
        prepareHeap();
        const res = peekTop(7);
        expect(res).toStrictEqual([7, 6, 5, 4, 3, 2, 1]);
    });

    it("peek K element should return to k elements", () => {
        const { Heap, prepareHeap, peekTop } = new MaxHeap([1, 2, 3, 4, 5, 6, 7]);
        prepareHeap();
        const tops = peekTop(3);
        expect(tops).toStrictEqual([7, 6, 5]);
        const tops2 = peekTop(3);
        expect(tops2).toStrictEqual([4, 3, 2]);
        const tops3 = peekTop(1);
        expect(tops3).toStrictEqual([1]);
    });
})