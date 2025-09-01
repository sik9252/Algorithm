#include <bits/stdc++.h>

using namespace std;

const int maxN = 51;

int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};
int T, M, N, K, X, Y, graph[maxN][maxN], visited[maxN][maxN], worm;

void DFS(int y, int x) {
    visited[y][x] = 1;

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            int ny = y + dy[i];
            int nx = x + dx[i];

            if (ny < 0 || ny >= N || nx <0 || nx >= M || graph[y][x] == 0) continue;
            if (visited[ny][nx]) continue;

            if(graph[ny][nx] == 1) {
                DFS(ny, nx);
            }
        }
    }
}

int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

    // 테스트 케이스
    cin >> T;

    while (T--) {
        // 배추밭 크기, 배추 개수
        cin >> M >> N >> K;

        memset(graph, 0, sizeof(graph));
        memset(visited, 0, sizeof(visited));
        worm = 0;

        // 배추가 심어져 있는 위치
        for (int i = 0; i < K; i++) {
            cin >> X >> Y;
            graph[Y][X] = 1;
        }

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (graph[i][j] == 1 && !visited[i][j]) {
                    worm++;
                    DFS(i, j);
                }
            }
        }

        cout << worm << "\n";
    }

    return 0;
};

