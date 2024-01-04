def findTarget(arr, target):
    pos = 0
    while pos<len(arr):
        if arr[pos] == target:
            return pos
            
        pos += 1
        
    return -1
        
        
        

def main():
    arr = []
    target = 7
    res = findTarget(arr, target)
    print(res)
    
main()