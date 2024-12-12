#include <iostream>
#include <vector>
#include <string>
#include <sstream>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, k, q;
    cin >> n >> k >> q;

    vector<long long> num(n + 1);
    for (int i = 1; i <= n; ++i) {
        cin >> num[i];
    }

    int cnt = 0; 
    if (num[1] != k) {
        cnt = 1;
        num[1] = 1;
    } else {
        num[1] = 0;
    }

    for (int i = 2; i <= n; ++i) {
        if (num[i] != k) {
            cnt++;
            num[i] = num[i - 1] + cnt;
        } else {
            num[i] = num[i - 1];
            cnt = 0;
        }
    }

    for (int i = 0; i < q; ++i) {
        int query;
        cin >> query;
        cout << num[query] << '\n';
    }

    return 0;
}
