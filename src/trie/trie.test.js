const Trie = require("./trie")
describe("Trie", () => {
    let trie = null;
    beforeEach(() => {
        trie = Trie();
    });

    afterEach(() => {
        trie = null;
    });

    it("should insert properly", () => {
        trie.insert("world");

        expect(trie.startsWith("wor")).toBeTruthy();
        expect(trie.startsWith("abc")).toBeFalsy();
        expect(trie.search("world")).toBeTruthy();
        expect(trie.search("wor")).toBeFalsy();
        expect(trie.search("abc")).toBeFalsy();
    });

    it("should remove entire string for lonely branch properly", () => {
        trie.insert("work");
        trie.remove("work");

        expect(trie.search("work")).toBeFalsy();
    });

    it("should remove only the tag for word if there are dependent words", () => {
        trie.insert("work");
        trie.insert("worked");
        trie.remove("work");

        expect(trie.startsWith("work")).toBeTruthy();
        expect(trie.search("work")).toBeFalsy();
    });
})