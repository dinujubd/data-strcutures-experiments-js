const MeanHeap = require("./mean_heap");

describe("mean heap", () => {
    it("should initialize properly", () => {
        const { Heap } = new MeanHeap([1, 2, 3]);
        expect(Heap).toStrictEqual([1, 2, 3])
    });

    it("verify is mean heap", () => {
        const h1 = new MeanHeap([7, 6, 5, 4, 3, 2, 1]);
        const h2 = new MeanHeap([1, 2, 3, 4, 5, 6, 7]);
        expect(h1.isHeap(0)).toBe(false);
        expect(h2.isHeap(0)).toBe(true);
    });

    it("heapify properly", () => {
        const { Heap, heapify } = new MeanHeap([7, 6, 5, 4, 3, 2, 1]);
        heapify(Heap.length - 1, Heap.length);
        expect(Heap).toStrictEqual([7, 6, 5, 4, 3, 2, 1]);
        heapify(2, Heap.length);
        expect(Heap).toStrictEqual([7, 6, 1, 4, 3, 2, 5]);
        heapify(1, Heap.length);
        expect(Heap).toStrictEqual([7, 3, 1, 4, 6, 2, 5]);
        heapify(0, Heap.length);
        expect(Heap).toStrictEqual([1, 3, 2, 4, 6, 7, 5]);
    });

    it("prepare heap should heapify properly", () => {
        const { Heap, prepareHeap } = new MeanHeap([7, 6, 5, 4, 3, 2, 1]);
        prepareHeap();
        expect(Heap).toStrictEqual([1, 3, 2, 4, 6, 7, 5]);
    });

    it("sort should heapify properly", () => {
        const { Heap, prepareHeap, peekTop } = new MeanHeap([7, 6, 5, 4, 3, 2, 1]);
        prepareHeap();
        const res = peekTop(7);
        expect(res).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it("add item should heapify properly", () => {
        const { Heap, prepareHeap, add, sort } = new MeanHeap([7, 6, 5, 4, 3, 2]);
        prepareHeap();
        add(1);
        expect(Heap).toStrictEqual([1, 3, 2, 4, 6, 7, 5]);
        add(0);
        expect(Heap).toStrictEqual([0, 1, 2, 3, 6, 7, 5, 4]);
    });

    it("peek K element should return to k elements", () => {
        const { Heap, prepareHeap, peekTop } = new MeanHeap([7, 6, 5, 4, 3, 2, 1]);
        prepareHeap();
        const tops = peekTop(3);
        expect(tops).toStrictEqual([1, 2, 3]);
        const tops2 = peekTop(3);
        expect(tops2).toStrictEqual([4, 5, 6]);
        const tops3 = peekTop(1);
        expect(tops3).toStrictEqual([7]);
    });
})