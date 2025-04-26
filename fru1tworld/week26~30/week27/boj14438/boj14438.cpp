#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <math.h>
using namespace std;

#define  FASTIO cin.tie(0);  cout.tie(0);  ios_base::sync_with_stdio(false);

typedef  long long ll;
typedef pair<int, int> pii;

int min_tree[100000 * 4];

int MAX = 0x3f3f3f3f;
int MIN = -0x3f3f3f3f;

int init_min_tree(int now, int s, int e, vector<int> &v) {
    if(s == e) return min_tree[now] = v[s];
    int mid = (s+e)/2;
    return min_tree[now] = min(
        init_min_tree(now*2, s, mid, v),
        init_min_tree(now*2+1, mid+1, e, v));
}


int find(int now, int s, int e, int l, int r) {
    if (r < s || e < l) return MAX;
    if (l <= s && e <= r) return min_tree[now];
    int mid = (s + e) / 2;
    return min(find(now*2, s, mid, l, r),
               find(now*2+1, mid+1, e, l, r));
}

int update(int now, int s, int e, int idx, int value) {
    if(idx < s || e < idx) return min_tree[now];
    if(s == e) {
        return min_tree[now] = value;
    }

    int mid = (s+e)/2;
    int left = update(now * 2, s, mid, idx, value);
    int right = update(now * 2 + 1, mid+1 , e, idx, value);
    return min_tree[now] =  min(left, right);
}

void solve() {
    int i,j,k;
    int n; cin >> n;
    vector<int> v(n+1);
    for(i=1; i<=n; i++) {
        cin >> v[i];
    }
    init_min_tree(1,1,n,v);

    int q;
    cin >> q;
    while(q--) {
        int op, x, y;
        cin >> op >> x >> y;
        if(op == 1) {
            update(1, 1,n,x,y);
        }else {
            cout << find(1,1,n,x,y) << '\n';
        }
    }
}
int main() {
    FASTIO
    solve();
}
