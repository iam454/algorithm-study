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

char print_wind(int i, int j, int x ,int y) {
    if(i > x) return 'N';
    if(i < x) return 'S';
    if(j > y) return 'W';
    if(j <= y) return 'E';
}

void solve() {
    int i,j,k;
    int n,m,x,y;
    cin >> n >> m >> x >> y;
    for(i=0; i<n; i++) {
        for(j=0; j<m; j++) {
            cout << print_wind(i,j,x,y);
        }
        cout << '\n';
    }
}

int main() {
    FASTIO
    solve();
}