def is_digit(c):
    return ord('0')<=ord(c)<=ord('9')

def is_majus(c):
    return ord('A')<=ord(c)<=ord('Z')

def is_minus(c):
    return ord('a')<=ord(c)<=ord('z')

def is_alpha(c):
    return is_minus(c) or is_majus(c)