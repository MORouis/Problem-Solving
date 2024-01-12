def is_digit(c):
    return ord('0')<=ord(c)<=ord('9')

def is_majus(c):
    return ord('A')<=ord(c)<=ord('Z')

def is_minus(c):
    return ord('a')<=ord(c)<=ord('z')

def is_alpha(c):
    return is_minus(c) or is_majus(c)
    
def main():
    n = int(input())
    
    for i in range(n):
        name = input()
        first_char = name[0]
        
        is_valid_name = is_alpha(first_char) or first_char == "_"
        
        if not is_valid_name:
            print("NO")
        else:
            for i in range(1, len(name)):
                if not (is_alpha(name[i]) or is_digit(name[i]) or name[i] == "_"):
                    is_valid_name = False
                
            if is_valid_name == False:
                print("NO")
            else:
                print("YES")

main()