#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'stones' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER n
#  2. INTEGER a
#  3. INTEGER b
#

def stones(n, a, b):
    result = set()
    if a>b:
        a, b = b, a
    for i in range(n):
        result.add(a*i + (n-1-i)*b)
    return sorted(list(result))

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    T = int(input())

    for T_itr in range(T):
        n = int(input())

        a = int(input())

        b = int(input())

        result = stones(n, a, b)
        fptr.write(' '.join(map(str, result)))
        fptr.write('\n')

    fptr.close()
