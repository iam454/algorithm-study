#include <iostream>
#include <vector>
#include <deque>
#include <string>

using namespace std;

void solve() {
    int n;
    cin >> n;
    string S;
    cin >> S;

    vector<char> chars(S.begin(), S.end());
    n = chars.size();

    vector<int> prev(n, -1), next(n, -1);
    for (int i = 0; i < n; ++i) {
        if (i > 0) prev[i] = i - 1;
        if (i < n - 1) next[i] = i + 1;
    }
    deque<int> queue;
    vector<bool> in_queue(n, false);
    for (int i = 0; i < n; ++i) {
        if (chars[i] == 'A') {
            queue.push_back(i);
            in_queue[i] = true;
        }
    }

    while (!queue.empty()) {
        int i = queue.front();
        queue.pop_front();
        in_queue[i] = false;

        if (chars[i] != 'A') continue;
        if (next[i] == -1 || next[next[i]] == -1) continue;
        int j = next[i];
        int k = next[j];
        if (chars[j] == 'B' && chars[k] == 'B') {
            chars[i] = 'B';
            chars[j] = 'A';

            next[j] = next[k];
            if (next[k] != -1) {
                prev[next[k]] = j;
            }

            vector<int> indices = {
                prev[prev[i]] != -1 ? prev[prev[i]] : -1,
                prev[i], i, j, next[j]
            };
            for (int idx : indices) {
                if (idx != -1 && chars[idx] == 'A' && !in_queue[idx]) {
                    queue.push_back(idx);
                    in_queue[idx] = true;
                }
            }
        }
    }

    string result;
    int idx = 0;
    while (prev[idx] != -1) idx = prev[idx];
    while (idx != -1) {
        result.push_back(chars[idx]);
        idx = next[idx];
    }

    cout << result << endl;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int t;
    cin >> t;
    while (t--) {
        solve();
    }

    return 0;
}
