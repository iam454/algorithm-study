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

void solve() {
    int i,j,k;
    int n,a,b,c;
    cin >> n >> a >> b >> c;
    vector<int> v(n);
    for(auto &i : v) cin >> i;
    sort(all(v), greater<>());
    int sumK = c;
    int ans = c/a;
    for(i=1; i<=n; i++) {
        sumK += v[i-1];
        int sumP = a + i * b;
        ans = max(ans, sumK/sumP);
    }
    cout << ans;
}

int main() {
    FASTIO
    solve();
}