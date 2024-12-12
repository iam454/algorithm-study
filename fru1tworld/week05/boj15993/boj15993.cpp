#include<iostream>
#include<stdio.h>
#include<vector>
using namespace std;
typedef long long ll;

ll odd[100005];
ll even[100005];
#define MAX 100000
#define MOD 1000000009
#define FASTIO cin.tie(0), cout.tie(0), ios_base::sync_with_stdio(false);
int main() {
    FASTIO
    int tt; cin >> tt;
    odd[1] = 1;
    odd[2] = 1;
    odd[3] = 2;
    even[1] = 0;
    even[2] = 1;
    even[3] = 2;
    for(int i=4; i<=MAX; i++){
        even[i] = (odd[i-1] + odd[i-2] + odd[i-3]) % MOD;
        odd[i] = (even[i-1] + even[i-2] + even[i-3]) % MOD;
    }
    while(tt--) {
        int n; cin >> n;
        cout << odd[n] << ' ' << even[n] << '\n';
    }
}