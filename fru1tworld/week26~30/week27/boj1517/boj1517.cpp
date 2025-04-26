#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <math.h>
using namespace std;

#define  FASTIO cin.tie(0);  cout.tie(0);  ios_base::sync_with_stdio(false);

typedef  long long ll;
typedef pair<int, int> pii;

int MAX = 0x3f3f3f3f;
int MIN = -0x3f3f3f3f;

int tree[500000*4+1];

void update(int now, int s, int e, int idx) {
    if(s == e) {
        tree[now] = 1;
        return;
    }
    int mid = (s+e)/2;
    if(idx <= mid) update(now * 2, s, mid, idx);
    else update(now * 2 + 1, mid + 1, e, idx);
    tree[now] = tree[now * 2] + tree[now * 2 + 1];
}

int sum(int now, int s, int e, int l, int r) {
    if(l > e || r < s) return 0;
    if(l <= s && r >= e) return tree[now];
    int mid = (s+e)/2;
    return sum(now * 2, s, mid, l, r) +
        sum(now * 2 + 1, mid + 1, e, l, r);

}
void solve() {
    int i,j,k;
    int n; cin >> n;
    vector<pii> v;
    v.push_back({MIN,0});
    for(i=1; i<=n; i++) {
        int x;
        cin >> x;
        v.push_back({x,i});
    }
    sort(v.begin(), v.end());
    ll ans = 0;
    for(i=1; i<=n; i++) {
        ans += (ll)sum(1,1, n,v[i].second + 1, n);
        update(1, 1, n, v[i].second);
    }

    cout << ans << '\n';
}
int main() {
    FASTIO
    solve();
}