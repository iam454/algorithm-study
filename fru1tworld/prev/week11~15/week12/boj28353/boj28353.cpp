#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
typedef long long ll;

void solve() {
    int i,j,k;
    int n; cin >> n >> k;
    vector<int> v(n);
    for(i=0; i<n; i++) {
        cin >> v[i];
    }
    sort(v.begin(),v.end());
    int l = 0, r = n-1;
    int ans=0;
    while(l<r){
        if(v[l]+v[r] <= k) {
            ans++;
            l++;
            r--;
        }else{
            r--;
        }
    }
    cout << ans;
}


int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve();

    return 0;
}
