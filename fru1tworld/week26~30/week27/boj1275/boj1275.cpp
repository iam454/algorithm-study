#include <iostream>
#include <vector>
#include <string>
using namespace std;

#define  FASTIO cin.tie(0);  cout.tie(0);  ios_base::sync_with_stdio(false);
typedef  long long ll;

ll tree[100000 * 4 + 1];

ll init(int now, int s, int e, vector<ll> &v) {
    if(s == e) return tree[now] = v[s];
    int mid = (s+e)/2;
    return tree[now] =  init(now * 2, s, mid, v) +init(now * 2 + 1 , mid + 1, e, v);
}

ll find(int now, int s, int e, int l, int r) {
    if (r < s || e < l) return 0;
    if(l <= s && e <= r) return tree[now];
    int mid = (s+e)/2;
    return find(now * 2, s,mid, l , r) + find(now * 2 +  1 ,mid + 1,e,l,r);
}

void update(int now, int s, int e, int idx, ll diff) {
    if(idx < s || e < idx ) return;
    tree[now] += diff;
    if(s != e) {
        int mid = (s+e)/2;
        update(now * 2 , s, mid, idx, diff);
        update(now * 2 + 1 , mid + 1, e, idx, diff);
    }
}
void solve() {
    int i,j,k;
    int n,q;
    cin >> n >> q;
    vector<ll> v(n+1);
    for(i=1; i<=n; i++) {
        cin >> v[i];
    }

    init(1, 1,n,v);
    while(q--) {
        int x,y,a,b;
        cin >> x >> y >> a >> b;
        if(x > y) swap(x,y);
        cout << find(1, 1, n, x, y) << '\n';
        ll diff = b - v[a];
        v[a] = b;
        update(1,1,n,a,diff);
    }

}
int main() {
    FASTIO
    solve();
}

