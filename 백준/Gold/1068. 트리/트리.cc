#include <bits/stdc++.h>

using namespace std;

int n, root = -1, deleteNode;
vector<int> children[52];

void makeTree() {
    for (int i = 0; i < n; i++) {
        int parent;
        cin >> parent;

        if (parent == -1) {
            root = i;
        } else {
            children[parent].push_back(i);
        }
    }
}

int dfs(int node) {
    int result = 0;
    int childCnt = 0;

    for (int child: children[node]) {
        if (child == deleteNode) continue;
        result += dfs(child);
        childCnt++;
    }

    if (childCnt == 0) {
        return 1;
    }

    return result;
}

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

    cin >> n;

    // 트리 구조 만들기
    makeTree();

    cin >> deleteNode;

    // 노드 삭제하기
    if (deleteNode == root) {
        cout << 0 << "\n";
        return 0;
    }

    cout << dfs(root) << "\n";

    return 0;
};