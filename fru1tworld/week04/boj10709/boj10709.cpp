#include <iostream>
#include <vector>
#include <cstring>  // for memset
#include <string>
using namespace std;

typedef long long ll;
typedef long double ldb;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;
typedef pair<double, double> pdd;
#define FASTIO ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
#define TEST int tt; cin >> tt; while(tt--) solve();

int edge[105][105];
string s[105];
void solve(){
    int i, j, k;
    int n, m; cin >> n >> m;
    memset(edge, -1, sizeof(edge));
    for(i = 0; i < n; i++){
        cin >> s[i];
        s[i] += '.';
        for(j = 0; j < m; j++){
            if(s[i][j] == 'c') edge[i][j] = 0;
        }
    }
    for(i = 0; i < n; i++){
        int cnt = 0;
        for(j = 0; j < m; j++){
            cnt++;
            for(k = m - 1; k >= 0; k--){
                swap(s[i][k], s[i][k + 1]);
                if(s[i][k + 1] == 'c' && edge[i][k + 1] == -1){
                    edge[i][k + 1] = cnt;
                }
            }
            s[i][k + 1] = '.';
        }
    }
    for(i = 0; i < n; i++){
        for(j = 0; j < m; j++){
            cout << edge[i][j] << ' ';
        } 
        cout << endl;
    }
}

int main() {
    FASTIO
    solve();
}
