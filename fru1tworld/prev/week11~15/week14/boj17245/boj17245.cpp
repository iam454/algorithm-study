#include <iostream>
#include <algorithm>
#include <cmath>
#include <vector>
#include <climits>
using namespace std;
typedef long long ll;

#define MAX 1005
ll grid[MAX][MAX];

void solve() {
    int n;
    cin >> n;
    ll sum = 0, l = 0, r = 0;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> grid[i][j];
            sum += grid[i][j];
            r = max(r, grid[i][j]);
        }
    }

    if (sum == 0) {
        cout << 0 << '\n';
        return;
    }

    ll ans = LLONG_MAX;
    while (l <= r) {
        ll mid = (l + r) / 2;
        ll temp = 0;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                temp += min(mid, grid[i][j]);
            }
        }

        if (temp >= (sum + 1) / 2) { 
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    cout << ans << '\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    solve();
}
