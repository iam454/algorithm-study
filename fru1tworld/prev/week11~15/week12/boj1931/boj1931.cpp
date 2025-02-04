#include <bits/stdc++.h>

using namespace std;
typedef long long ll;

struct str{
    int start;
    int end;
};
str arr[100001];

bool cmp(str &a, str &b){
    if(a.end < b.end ) return a.end < b.end;
    else if(a.end == b.end ) return a.start < b.start;
    else return false;

}
int main(){
    ios_base::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);
    int i,j,k;
    int n,ans,time;
    ans = 0 ;
    cin >> n; for(i=0; i<n; i++) cin >> arr[i].start >>  arr[i].end;
    sort(arr, arr + n , cmp);
    ans++;
    time = arr[0].end;
    for(i=1; i<n; i++){
        if(time <= arr[i].start ){
            ans++;
            time = arr[i].end;
        }
    }
    cout << ans;
}