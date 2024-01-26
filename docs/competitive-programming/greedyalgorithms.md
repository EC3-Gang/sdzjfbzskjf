---

lang: en-us
title: Greedy Algorithms
---

# Greedy Algorithms

## Greedy Algorithms explained

Greedy algorithms making sure the solution is locally optimal while maintaining the globally optimal solution

Example:

There is a shopping mall with K items and you have N monnie to buy the items. Each item costs C_i monnie each. What is the maximum number of items you can buy?

Sample input:

    10 4
    3 9 4 2

Sample output:

    3

Greedy solution: take the cheapest items until you cannot anymore

This code illustrates the above idea:

```cpp
  int n,m;
  cin>>n>>m;
  int arr[m];
  inp(arr);
  int cnt=0,ans=0;
  sort(arr, arr+m);
  for(int i=0; i<m; i++){
    if(cnt+arr[i]>n){
      break;
    }
    cnt+=arr[i];
    ans++;
  }
  cout<<ans;
```
