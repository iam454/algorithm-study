#include<iostream>
#include<algorithm>
#include<math.h>

using namespace std;
typedef long long ll;
#define MAX 1000001
ll arr[MAX];
ll dp[MAX];
int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    int i,j,k;
    int n; cin >> n;

    for(i=0; i<n; i++) cin >> arr[i];
    for(i=1; i<n; i++) dp[i] = 0x3f3f3f3f;
    for(i=1; i<n; i++) {
        for(j=0; j<i; j++) {
            dp[i] = min(dp[i],
                max(dp[j], (i-j) * (1 + abs(arr[i] - arr[j]))));
        }
    }
    cout << dp[n-1];
}