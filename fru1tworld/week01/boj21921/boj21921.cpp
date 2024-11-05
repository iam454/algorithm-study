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
    int n,m; cin >> n >> m;
    vector<int>v(n);
    for(auto &x: v) cin >> x;
    int ans = 0;
    int cnt = 0;
    for(i=0; i<m; i++) ans += v[i];
    cnt = 1;
    int sum = ans;
    for(i=1; i<=n-m; i++) {
        sum -= v[i-1];
        sum += v[i+m-1];
        if(ans == sum) cnt++;
        else if(ans < sum){
            cnt = 1;
            ans = sum;
        }
    }


    ans ? cout << ans << '\n' << cnt : cout << "SAD";
}

int main() {
    FASTIO
    solve();
}