#include<iostream>
#include<algorithm>
#include<math.h>

using namespace std;
typedef long long ll;
#define MAX 5000000

bool prime[MAX+5];

bool isPalindrome(int num) {
    string str = to_string(num);
    for(int i=0, j=str.size()-1; i<j; i++, j--) {
        if(str[i] != str[j]) {
            return false;
        }
    }
    return true;
}


void solve() {
    int i,j,k;
    int n;
    cin >> n;
    for(i=1; i<=MAX; i++) prime[i] = true;
    prime[1] = false;
    for(i=2; i<=MAX; i++) {
        if(prime[i]) {
           prime[i] = true;
            for(j=i*2; j<=MAX; j+=i) {
                prime[j] = false;
            }
        }
    }
    for(i=n; i<=MAX; i++) {
        if(!prime[i]) continue;
        if(isPalindrome((i))) {
            cout << i;
            return;
        }
    }
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    solve();
}