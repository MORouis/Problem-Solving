def is_digit(c):
    return ord('0')<=ord(c)<=ord('9')

def is_majus(c):
    return ord('A')<=ord(c)<=ord('Z')

def is_minus(c):
    return ord('a')<=ord(c)<=ord('z')

def is_alpha(c):
    return is_minus(c) or is_majus(c)

def char_to_order(char):
    if is_majus(char):
        return ord(char) - ord('A')
    elif is_minus(char):
        return ord(char) - ord('a')
  
def order_to_char(i):
    return chr(i+ord('A'))