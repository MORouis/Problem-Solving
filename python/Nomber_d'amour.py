def char_to_order(fisrt_char):
    return ord(fisrt_char) - ord('A')

def getSum(n):
    s = 0
    while n!=0:
        s += n%10
        n = n//10
    return s
    
def summ(nom):
    s = 0
    for i in nom:
        s += char_to_order(i)
        
        while s>=10:
            s = getSum(s)
    return s
   
def main():
    nom1, nom2 = input().split()
    s1 = summ(nom1)
    s2 = summ(nom2)
    print(s1, s2, sep=" ")
    
main()