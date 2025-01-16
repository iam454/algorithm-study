#include <bits/stdc++.h>

using namespace std;

int visited[1001];
vector<int> v[1001];

void dfs(int n){
    visited[n] = true;
    for(int i=0; i<v[n].size();i++){
        int num = v[n][i];
        if(!visited[num]){
            dfs(num);
        }
    }
}
int main(){
    ios_base::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);
    int n,m;
    cin >> n >> m;
    int ans = 0;
    for(int i=0; i<m; i++){
        int a,b; cin >> a >> b;
        v[a].push_back(b);
        v[b].push_back(a);
    }
    for(int i=1; i<= n; i++){
        if(visited[i]) continue;

        dfs(i);
        ans++;
    }
    cout << ans;
}