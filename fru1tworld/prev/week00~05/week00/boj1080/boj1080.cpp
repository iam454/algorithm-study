#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <time.h>
#include <stdlib.h>
#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
#include <set>
#include <map>
#include <string>
#include <numeric>
#include <functional>
#include <tuple>
#include <math.h>
#include <stack>
#define MOD 1000000007
#define MAX 0x3f3f3f3f
#define MAX2 0x3f3f3f3f3f3f3f3fll
#define all(a) (a).begin(), (a).end()
#define FASTIO ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
#define TEST int tt; cin >> tt; while(tt--) solve();
#define fi first
#define se second
#define sz(a) ((int)(a).size())
#define pb(x) push_back(x)
#define mem(a, b) memset(a, (b), sizeof(a))
#define FOR int i,j,k;
using namespace std;

typedef long long ll;
typedef long double ldb;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
typedef pair<double, double> pdd;
typedef tuple<int, int, int> tiii;

string a[55], b[55];
void turn(int x, int y) {
    for(int i=0; i<3; i++) {
        for(int j=0; j<3; j++) {
            a[x+i][y+j] == '0' ? a[x+i][y+j] = '1' : a[x+i][y+j] = '0';
        }
    }
}
void solve() {
    int i,j,k;
    int n,m; cin >> n >> m;
    for(i=0; i<n; i++) cin >> a[i];
    for(i=0; i<n; i++) cin >> b[i];

    int ans = 0;
    for(i=0; i<n-2; i++) {
        for(j=0; j<m-2; j++) {
            if(a[i][j] != b[i][j]) {
                turn(i,j);
                ans++;
            }
        }
    }

    for(i=0; i<n; i++) {
        if(a[i] != b[i]) {
            cout << "-1";
            return;
        }
    }
    cout << ans;
}

int main() {
    FASTIO
    solve();
}