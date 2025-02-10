#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int solve(const string& s) {
    int n = s.size();
    int a = 0; 

    for (char c : s) {
        if (c == 'a') a++;
    }
    if (a == 0 || a == n) {
        return 0;
    }

    int minSwaps = a; 
    int currentA = 0;

    for (int i = 0; i < a; i++) {
        if (s[i] == 'a') {
            currentA++;
        }
    }
    minSwaps = a - currentA;

    for (int i = 1; i < n; i++) {
        if (s[i - 1] == 'a') {
            currentA--;
        }
        if (s[(i + a - 1) % n] == 'a') {
            currentA++;
        }
        minSwaps = min(minSwaps, a - currentA);
    }

    return minSwaps;
}

int main() {
    string s;
    cin >> s;
    cout << solve(s) << endl;
    return 0;
}