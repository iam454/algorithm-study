#include<iostream>
#include<algorithm>
#include<math.h>
#include<vector>
using namespace std;
typedef long long ll;

void solve() {
    int i,j,k;
    int n,a,b;
    cin >> n >> k >> a >> b;
    vector<int> v(n, k);
    int day = 0;
    while(v.front() > day){
        for(int i=0; i<a; i++){
            v[i] += b;
        }
        sort(v.begin(), v.end());
        day++; 
    }
    cout << day;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    solve();
}