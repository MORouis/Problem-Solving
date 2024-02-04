def is_majus(c):
    return ord('A')<=ord(c)<=ord('Z')

def is_minus(c):
    return ord('a')<=ord(c)<=ord('z')

def is_alpha(c):
    return is_minus(c) or is_majus(c)
    
def main():
    ch = input()
    text = input()

    for i in text:
        if is_alpha(i):
            if is_majus(i):
                char = ord(i) - ord("A")
                print(ch[char].upper(), end="")
            else:
                char = ord(i) - ord("a")
                print(ch[char].lower(), end="")
            
        else:
            print(i, end="")
        

main()