#include <bits/stdc++.h>

using namespace std;

int n, root = -1, deleteNode;
vector<int> children[52];
bool deleted[52];

// 1. 트리 구조 만들기
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

// 2. 해당 노드와 자식들 삭제하기
void deleteNodes(int node) {
    // 자기 자신 삭제
    deleted[node] = true;

    // 해당 노드의 자식들도 삭제되어야함
    for (int child: children[node]) {
        deleteNodes(child);
    }
}

// 3. 리프 노드 개수 세기
int countLeafNodes() {
    int leafCount = 0;

    for (int i = 0; i < n; i++) {
        // 지워진 노드면 건너뛰기
        if (deleted[i]) continue;

        // 자식이 살아있는지 확인
        int hasAlivedChild = false;
        for (int child : children[i]) {
            if (!deleted[child]) {
                hasAlivedChild = true;
                break;
            }
        }

        // 살아있는 자식이 없으면 리프노드임
        if (!hasAlivedChild) {
            leafCount++;
        }
    }

    return leafCount;
}

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

    cin >> n;

    // 트리 구조 만들기
    makeTree();

    cin >> deleteNode;

    // 노드 삭제하기
    // 리프 노드를 삭제하는 경우는 다 사라지는것
    if (deleteNode == -1) {
        cout << 0 << "\n";
        return 0;
    }

    // 삭제할 노드를 포함한 자식 노드들 삭제
    deleteNodes(deleteNode);

    // 리프 노드 세기
    int result = countLeafNodes();

    cout << result << "\n";

    return 0;
};