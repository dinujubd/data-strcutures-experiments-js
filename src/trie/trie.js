
const Trie = () => {
    const root = { char: '\0', children: {}, isWord: false };

    const insert = (word) => {
        let current = root;

        for (var i = 0; i < word.length; i++) {
            const c = word[i];

            if (!(c in current.children)) {
                current.children[c] = { char: c, children: {}, isWord: false }
            }

            current = current.children[c];
        }

        current.isWord = true;
    };

    const search = (word) => {
        const n = getNode(word);
        return !!n && !!n.isWord;
    };

    const startsWith = (prefix) => {
        const n = getNode(prefix);
        return !!n;
    };

    const remove = (word, node = root, dep = 0) => {
        if (word.length === dep) {
            if (Object.keys(node.children).length === 0) {
                return true;
            } else {
                node.isWord = false;
                return false;
            }
        } else {
            const nextNode = node.children[word[dep]];
            if (remove(word, nextNode, dep + 1)) {
                delete node.children[word[dep]]
                return Object.keys(node.children).length === 0;
            }
        }

        return false;
    }

    const getNode = (word) => {
        let current = root;
        for (var i = 0; i < word.length; i++) {
            if (!current) return null;
            current = current.children[word[i]];
        }
        return current;
    }

    return { insert, search, startsWith, remove };

};


module.exports = Trie;