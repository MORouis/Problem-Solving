def is_majus(c):
    return ord('A')<=ord(c)<=ord('Z')
    
def is_minus(c):
    return ord('a')<=ord(c)<=ord('z')
    
def lower_to_upper(text):
    text_in_maj = ""
    for i in text:
        if is_minus(i):
            text_in_maj += chr(ord(i) - 32)
        else:
            text_in_maj += i
    return text_in_maj

def upper_to_lower(text):
    text_in_min = ""
    for i in text:
        if is_majus(i):
            text_in_min += chr(ord(i) + 32)
        else:
            text_in_min += i
    return text_in_min
    
def main():
    lig = input()
    res = lower_to_upper(lig)
    print(res)
main()
