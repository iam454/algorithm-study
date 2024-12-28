## 문제

[208](https://leetcode.com/problems/implement-trie-prefix-tree/?envType=study-plan-v2&envId=leetcode-75)

## 해결 방법

- trie를 구현하면 됩니다.
- trie는 prefix tree 입니다.
- 구현해야하는 기능은 insert, search, startsWith 입니다.
- search를 prefix 여부를 기본값으로 넣어두고

```cpp
            if (!p->child[i]) return false;
        if (prefix==false) return p->isWord;
```

- 기본 serach 로직에 위와 같은 로직을 추가하면 됩니다.
