#include <bits/stdc++.h>

using namespace std;

const int maxN = 10;
const int EMPTY = 0, WALL = 1, VIRUS = 2;

int n, m, graph[maxN][maxN], maxSafeAreaCount;
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, -1, 0, 1};

vector<pair<int, int>> emptyAreaPos;
vector<pair<int, int>> virusAreaPos;

// 빈칸 위치를 저장해두었다가
// 해당 위치 중 3개를 골라서 벽을 세울 조합을 전부 탐색
// 백트래킹으로 벽을 세웠다가 지웠다가 하며 안전영역 최대값 갱신

// 1. 바이러스를 확신시키며 안전영역 개수 세는 bfs
int virusDiffusion() {
    int temp[maxN][maxN];

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            temp[i][j] = graph[i][j];
        }
    }

    queue<pair<int, int>> q;

    for (auto virus: virusAreaPos) {
        q.push(virus);
    }

    while (!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();

        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

            if (temp[nx][ny] == EMPTY) {
                temp[nx][ny] = VIRUS;
                q.push({nx, ny});
            }
        }
    }

    int safeCount = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (temp[i][j] == EMPTY) {
                safeCount++;
            }
        }
    }

    return safeCount;
}

// 2. 벽 세울 조합 구하기
void buildWalls(int wallCount, int start) {
    // 기저 사례
    if (wallCount == 3) {
        int safeAreaCount = virusDiffusion();
        maxSafeAreaCount = max(maxSafeAreaCount, safeAreaCount);
        return;
    }

    for (int i = start; i < emptyAreaPos.size(); i++) {
        int x = emptyAreaPos[i].first;
        int y = emptyAreaPos[i].second;

        // 벽 세웠다가
        graph[x][y] = WALL;
        buildWalls(wallCount + 1, i + 1);

        // 탐색 이후 되돌리기
        graph[x][y] = EMPTY;
    }
}

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

    cin >> n >> m;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> graph[i][j];

            if (graph[i][j] == EMPTY) {
                emptyAreaPos.push_back({i, j});
            } else if (graph[i][j] == VIRUS) {
                virusAreaPos.push_back({i, j});
            }
        }
    }

    buildWalls(0, 0);

    cout << maxSafeAreaCount << "\n";

    return 0;
};