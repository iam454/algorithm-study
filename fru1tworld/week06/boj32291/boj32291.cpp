#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
using ll = long long;

int main() {
    ll x;
    cin >> x;
    x++; 
    vector<ll> factor;
    for(ll i=1; i*i<=x; i++) {
        if(x%i == 0L) {
            factor.push_back(i);
        }
    }
    int len = (int)factor.size();
    for(int i=1; i<len; i++) {
        if(factor[i] * factor[i] == x) break;
        factor.push_back(x/factor[i]);
    }
    sort(factor.begin(), factor.end());
    for(auto x: factor) {
        cout << x << ' ';
    }
}

