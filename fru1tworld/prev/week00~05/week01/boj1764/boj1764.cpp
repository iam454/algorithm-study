#include <iostream>
#include <set>
#include <unordered_set>
#include <string>

using namespace std;

typedef long long ll;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int i, j, k;
    int n, m;
    set<string> ans;
    unordered_set<string> umset;

    string s;
    cin >> n >> m;
    for (i = 0; i < n; i++) {
        cin >> s;
        umset.insert(s);
    }
    for (i = 0; i < m; i++) {
        cin >> s;
        if (umset.find(s) != umset.end()) ans.insert(s);
    }
    cout << ans.size() << '\n';
    for (auto i : ans) {
        cout << i << '\n';
    }
}
