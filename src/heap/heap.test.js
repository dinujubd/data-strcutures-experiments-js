
const heapSort = require("./max_heap");
const MeanHeap = require("./mean_heap");

describe("mean heap", () => {
    it("should initialize properly", () => {
        const {Heap} = new MeanHeap([1,2,3]);
        expect(Heap).toStrictEqual([1,2,3])
    });

    it("verify is mean heap", () => {
        const h1 = new MeanHeap([7,6,5,4,3,2,1]);
        const h2 = new MeanHeap([1,2,3,4,5,6,7]);
        expect(h1.isHeap(0)).toBe(false);
        expect(h2.isHeap(0)).toBe(true);
    });

    it("heapify properly", () => {
        const {Heap, heapify} = new MeanHeap([7,6,5,4,3,2,1]);
        heapify(Heap.length-1, Heap.length);
        expect(Heap).toStrictEqual([7,6,5,4,3,2,1]);
        heapify(2, Heap.length);
        expect(Heap).toStrictEqual([7,6,1,4,3,2,5]);
        heapify(1, Heap.length);
        expect(Heap).toStrictEqual([7,3,1,4,6,2,5]);
        heapify(0, Heap.length);
        expect(Heap).toStrictEqual([1,3,2,4,6,7,5]);
    });

    it("prepare heap should heapify properly", () => {
        const {Heap, prepareHeap} = new MeanHeap([7,6,5,4,3,2,1]);
        prepareHeap();
        expect(Heap).toStrictEqual([1,3,2,4,6,7,5]);
    });

    it("sort should heapify properly", () => {
        const {Heap, sort} = new MeanHeap([7,6,5,4,3,2,1]);
        sort();
        expect(Heap).toStrictEqual([7,6,5,4,3,2,1]);
    });

    it("add item should heapify properly", () => {
        const {Heap,prepareHeap ,add ,sort} = new MeanHeap([7,6,5,4,3,2]);
        prepareHeap();
        add(1);
        sort();
        expect(Heap).toStrictEqual([7,6,5,4,3,2,1]);
        add(0);
        sort();
        expect(Heap).toStrictEqual([7,6,5,4,3,2,1,0]);
    });

    it("peek K element should return to k elements", () => {
        const {Heap,prepareHeap ,peekTop} = new MeanHeap([7,6,5,4,3,2,1]);
        prepareHeap();
        const tops = peekTop(3);
        expect(tops).toStrictEqual([1,2,3]);
        const tops2 = peekTop(3);
        expect(tops2).toStrictEqual([4,5,6]);
    });
})