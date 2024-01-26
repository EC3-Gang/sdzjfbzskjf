# Bitmask

## What does bitmask do?

Bitmask is a way to brute force all subsets. It can also be used for other purposes, but that is its' main function.

Let's look at an example problem

## Example Problem

You are given a set of integers $S$, of size $N$. You want to find the maximum sum of elements of a subset of $S$, if the sum has to be less than $K$ for a given value $K$.

We can solve this problem by brute forcing all possible subsets. However, you might notice that you would need $N$ for loops, which is questionable at best.

## Bitmask

We can represent every subset as an array $A$ of size $N$, where $A_i = 1$ if element $i$ is in the subset, and otherwise $A_i = 0$. Notice the array $A$  

```cpp
for (int i = 0; i < 1 << n; ++i) {
  int sum = 0;
  for (int j = 0; j < n; ++j) {
    if (i & (1 << j)) {
      sum += arr[j];
    }
  }
  if (sum <= k) {
    v.push_back(sum);
  }
}
```
