#include <iostream>
#include <vector>
using namespace std;
using ll = long long;

const int MAX = 100000;

ll table[MAX+5];
ll sum[MAX+5];
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n, t;
    cin >> n >> t;


    for (int i = 0; i < n; i++) {
        int k;
        cin >> k;
        for (int j = 0; j < k; j++) {
            int s, e;
            cin >> s >> e;
            table[s]++;  
            table[e]--; 
        }
    }

    for (int i = 1; i <= MAX; i++) {
        table[i] += table[i - 1];
    }
    
    sum[0] = table[0];
    for (int i = 1; i <= MAX; i++) {
        sum[i] = sum[i - 1] + table[i];
    }

    ll max_sum = sum[t-1], ans_start = 0, ans_end = t;
    for (int i = 1; i <= MAX - t + 1; i++) {
        int current_sum = sum[i + t - 1] - sum[i - 1];
        if (current_sum > max_sum) {
            max_sum = current_sum;
            ans_start = i;
            ans_end = i + t - 1;
        }
    }

    cout << ans_start << " " << ans_end << '\n';

    return 0;
}

 