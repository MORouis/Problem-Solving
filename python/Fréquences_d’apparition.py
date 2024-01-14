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
    
def main():
    
    text = input()
    text = text.upper()
    
    new_text = ""
    for i in text:
        if is_alpha(i):
            new_text += i

    n = len(new_text)
            
    frequency_arr = [0]*26
    for char in new_text:
        i = char_to_order(char)
        frequency_arr[i] += 1
    
    for i in range(len(frequency_arr)):
        #print(f"{order_to_char(i)}:{frequency_arr[i]}")
        count = frequency_arr[i]
        print(count/n)
    
main()