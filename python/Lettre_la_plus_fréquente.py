def char_to_order(char):
    return ord(char)-ord('A')
  
def order_to_char(i):
    return chr(i+ord('A'))
    
def lettre_frequente(text):
    frequency_arr = [0]*26
    for char in text:
        if char == " ":
            continue
        i = char_to_order(char)
        frequency_arr[i] += 1
    
    maxx = 0
    res = ""
    for i in range(len(frequency_arr)):
        #print(f"{c}:{frequency_arr[i]}")
        if frequency_arr[i]>maxx:
            maxx = frequency_arr[i]
            res = order_to_char(i)
        
    return res  
    
    
def main():
    lig = input()
    lig = lig.upper()
    res = lettre_frequente(lig)
    print(res)
main()
