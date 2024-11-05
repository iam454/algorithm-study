#include <iostream>
#include <vector>
#include <cstdio>

using namespace std;

typedef long long ll;

struct str {
    int x;
    int y;
};

int main() {
    int i, j, k;
    int n, m;
    str p[51];
    cin >> n;
    for (i = 0; i < n; i++) {
        cin >> p[i].x >> p[i].y;
    }
    for (i = 0; i < n; i++) {
        int cnt = 1;
        for (j = 0; j < n; j++) {
            if (p[i].x < p[j].x && p[i].y < p[j].y) {
                cnt++;
            }
        }
        printf("%d ", cnt);
    }
}
