#include <bits/stdc++.h>

using namespace std;

const int maxN = 104;

int n, m, graph[maxN][maxN], visited[maxN][maxN], lastCheeseCnt, meltTime;
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, -1, 0, 1};

// 1. 바깥 공기 영역 찾기
void findOutsideAir() {
    fill(&visited[0][0], &visited[n][0] + n * m, false);

    queue<pair<int, int>> q;
    q.push({0, 0});
    visited[0][0] = true;

    while(!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();

        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= n || ny >= m || visited[nx][ny] || graph[nx][ny] != 0) continue;

            visited[nx][ny] = true;
            q.push({nx, ny});
        }
    }
}

// 2. 치즈의 겉면 찾기(바깥 공기와 인접한 치즈만 녹음)
 vector<pair<int, int>> findMeltCheese() {
    vector<pair<int, int>> meltCheese;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if(graph[i][j] == 1) {
                for (int k = 0; k < 4; k++) {
                    int nx = i + dx[k];
                    int ny = j + dy[k];

                    if (nx < 0 || ny < 0 || nx >= n || ny >= m || !visited[nx][ny]) continue;

                    meltCheese.push_back({i, j});
                    break;
                }
            }
        }
    }

    return meltCheese;
 }

// 3. 시뮬레이션: 바깥 공기 찾기 -> 인접한 치즈 찾기 -> 녹이기(해당 위치 0으로 바꾸기)
int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

    cin >> n >> m;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> graph[i][j];
        }
    }

    while (true) {
        int currentCheeseCnt = 0;

        // 치즈가 모두 녹았는지 지속적으로 검사
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (graph[i][j] == 1){
                    currentCheeseCnt++;
                }
            }
        }

        // 0이면 모두 녹은것이므로 중단
        if (currentCheeseCnt == 0) {
            break;
        }

        lastCheeseCnt = currentCheeseCnt;

        // 바깥 공기 영역 찾기
        findOutsideAir();

        // 치즈 겉면 찾아서 녹이기
        vector<pair<int, int>> meltCheese = findMeltCheese();

        for (auto cheese: meltCheese) {
            graph[cheese.first][cheese.second] = 0;
        }

        meltTime++;
    }

    cout << meltTime << "\n";
    cout << lastCheeseCnt << "\n";

    return 0;
};