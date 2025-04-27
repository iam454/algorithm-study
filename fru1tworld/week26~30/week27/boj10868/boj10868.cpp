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
int max_tree[100000 * 4];

int MAX = 0x3f3f3f3f;
int MIN = -0x3f3f3f3f;

int init_min_tree(int now, int s, int e, vector<int> &v) {
    if(s == e) return min_tree[now] = v[s];
    int mid = (s+e)/2;
    return min_tree[now] = min(
        init_min_tree(now*2, s, mid, v),
        init_min_tree(now*2+1, mid+1, e, v));
}

int init_max_tree(int now, int s, int e, vector<int> &v) {
    if(s == e) return max_tree[now] = v[s];
    int mid = (s+e)/2;
    return max_tree[now] = max(
        init_max_tree(now*2, s, mid, v),
        init_max_tree(now*2+1, mid+1, e, v));
}

pii find(int now, int s, int e, int l, int r) {
    if(r < s || e < l) return {MAX, MIN};
    if(l <= s && e <= r) return {min_tree[now], max_tree[now]};
    int mid = (s+e)/2;
    pii left = find(now*2, s,mid,l,r);
    pii right = find(now*2+1, mid+1, e,l,r);
    return {
    min(left.first, right.first),
    max(left.second, right.second)};
}


void solve() {
    int i,j,k;
    int n, m;
    cin >> n >> m ;
    vector<int> v(n+1);
    for(i=1; i<=n; i++) {
        cin >> v[i];
    }
    init_min_tree(1,1,n,v);
    init_max_tree(1,1,n,v);

    while(m--) {
        int x,y;
        cin >> x >> y;
        pii res = find(1,1,n,x,y);
        cout << res.first << '\n';
    }
}
int main() {
    FASTIO
    solve();
}
