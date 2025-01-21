#include<iostream>
#include<algorithm>
#include<math.h>
#include<vector>
using namespace std;
typedef long long ll;
#define MAX 100005

int check[MAX];
int dp[MAX];
void solve() {
    int i,j,k;
    int n; cin >> n;
    vector<int> v(n);
    for(i=0; i<n; i++) cin >> v[i];
    for(i=1; i<n; i++) {
        if(v[i] < v[i-1]) {
            check[i]++;
        }
    }

    for(i=1; i<n; i++) {
        dp[i] = dp[i-1] + check[i];
    }
    int q; cin >> q;
    while(q > 0) {
        int r,l; cin >> l >> r;

        cout <<  dp[--r] - dp[--l] << '\n';
        q--;
    }
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    solve();
}