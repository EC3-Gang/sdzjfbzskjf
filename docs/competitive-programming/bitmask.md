# Bitmask

## What does bitmask do?

Bitmask is a way to brute force all subsets. It can also be used for other purposes, but that is its' main function.

Let's look at an example problem

## Example Problem

You are given a set of integers $S$, of size $N$. You want to find the maximum sum of elements of a subset of $S$, if the sum has to be less than $K$ for a given value $K$.

We can solve this problem by brute forcing all possible subsets. However, you might notice that you would need $N$ for loops, which is questionable at best.

## Bitmask

We can represent every subset as an array $A$ of size $N$, where $A_i = 1$ if element $i$ is in the subset, and otherwise $A_i = 0$. Notice the array $A$ can be represented as a binary number. 

For example, suppose my subset contains elements $1$, $3$ and $4$. Then the array $A$ would be $1011$, which in decimal is $8+2+1=11$.

Hence, we can loop through all the binary numbers from $0$ to $2^N - 1$, to loop through all subsets.

## Coding Bitmask

```cpp
int ans = 0;
for (int i = 0; i < 1 << n; ++i) {
  int sum = 0;
  for (int j = 0; j < n; ++j) {
    if (i & (1 << j)) {
      sum += arr[j];
    }
  }
  if (sum <= k) {
    ans = max(ans, sum);
  }
}
```

Let's analyse what the code below is doing
```cpp
for (int j = 0; j < n; ++j) {
  if (i & (1 << j)) {
    sum += arr[j];
  }
}  
```

Essentially $i$ is your value from $0$ to $2^N-1$. For convenience sake, we will deviate abit from the bitmask previously explained. Now, if the $i$th bit from the right is $1$, then the subset contains element $i$.

```cpp
i & (1 << j)
```

will be larger than $0$ if the $j$th bit from the right(0-indexed) is a $1$.

So, the code is just doing if the $j$th bit from the right is a $1$, add $A_j$ to $sum$.

The rest should be self explanatory
