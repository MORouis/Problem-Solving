def is_majus(c):
    return ord('A')<=ord(c)<=ord('Z')
    
def is_minus(c):
    return ord('a')<=ord(c)<=ord('z')

def is_alpha(c):
    return is_minus(c) or is_majus(c)
    
def cryptage(d, ch):
    for i in ch:
        if is_alpha(i):
            if is_majus(i):
                order = (ord(i)-ord("A")+d) % 26 + ord("A")
            else:
                order = (ord(i)-ord("a")+d) % 26 + ord("a")
            res = chr(order)
            print(res, end="")
        else:
            print(i, end="")
    print()


def main():
    n = int(input())
    for i in range(2, n+1):
        text = input()
        if i%2 == 0:
            d = 3*i
        else:
            d = -5*i

        cryptage(-d, text)

main()