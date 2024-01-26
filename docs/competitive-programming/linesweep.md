---

lang: en-us
title: Two pointers
---

# Line sweep/sliding window

## line sweep explanation

Sometimes the problem can be solved faster using line sweep.
You can imagine a line sweeping from left to right/up to down and doing something to everything it meets along the way.

Example problem [this](https://codebreaker.xyz/problem/globalwarming)
To solve this problem, we can using line sweep.

1. Sweep from tallest islands to shortest islands.
2. When reaching an island, check its neighbouring 2 islands
3. If both are taller, subtract 1 from the answer
4. If only 1 is taller, do nothing
5. If both are shorter, add 1 to the answer

The answer is the maximum out of all iterations

heres a piece of code demonstrating this:

```cpp
  sort(arr,arr+n,greater<pii>());
  int ans=0;
  int cnt=0;
  last=-1;
  int i=0;
  while(i<n){
    if(arr[i].first!=last){
      last=arr[i].first;
      ans=max(ans,cnt);
    }
    int index=arr[i].second;
    if(index==0){
      if(a[index+1]<a[index]) cnt++;
    }
    else if(index==n-1){
      if(a[index-1]<a[index]) cnt++;
    }
    else{
      if(a[index+1]<a[index] && a[index-1]<a[index]) cnt++;
      else if(a[index+1]>a[index] && a[index-1]>a[index]) cnt--;
    }
    i++;
  }
  ans=max(ans,cnt);
  cout<<ans;
```
