#include<iostream>
#include<vector>
using namespace std;
typedef long long ll;

#define FASTIO cin.tie(0); cout.tie(0); ios_base::sync_with_stdio(false);
int main() {
    long long n,m;
    cin >> n >> m;
    vector<long long> v(n);
    for(auto &x : v) cin >> x;

    int ans = 0;
    for(int i=1; i<n; i++) {
        if(v[i-1] >= v[i]+m || v[i-1] <= v[i]-m) continue;
        v[i] = -m;
        ans++;
    }
    cout << ans;
}