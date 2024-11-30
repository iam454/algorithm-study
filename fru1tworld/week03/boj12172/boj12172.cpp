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

int tc;
bool omino(int x, int r, int c) {
    if (x >= 7) return false;  
    if ((r * c) % x != 0) return false;  
    if (x > max(r, c)) return false;  
    if ((x + 1) / 2 > min(r, c)) return false;  
    if (x == 4 && min(r, c) == 2) return false;  
    if (x == 5 && min(r, c) == 3 && max(r, c) == 5) return false;  
    if (x == 6 && min(r, c) == 3) return false; 
    return true;
}

void solve() {
    int tt;
    cin >> tt;
    for (int tc = 1; tc <= tt; ++tc) {
        int x, r, c;
        cin >> x >> r >> c;
        cout << "Case #" << tc << ": " << (omino(x, r, c) ? "GABRIEL" : "RICHARD") << "\n";
    }
}

int main() {
    FASTIO
    solve();
}