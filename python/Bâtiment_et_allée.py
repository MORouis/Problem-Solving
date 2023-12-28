def char_to_order(fisrt_char):
    return ord(fisrt_char) - ord('A') + 1

def order_to_char(age):
    return chr(age + ord('A') - 1)

def main():
    nom = input()
    age = int(input())
    a = char_to_order(nom[0])
    b = order_to_char(age)
    print(a, b, sep="")
    
main()