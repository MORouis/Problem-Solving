def is_majus(char):
    return ord("A")<=ord(char)<=ord("Z")
    
def to_lower(s):
    ch = ""
    for i in s:
        if is_majus(i):
            ch += chr(ord(i)+32)
        else:
            ch += i
    return ch
    
def remove_space(s):
    ch = ""
    for i in s:
        if i != " ":
            ch += i
    return ch
    
def isPalindrome(s):
    n = len(s)
    for i in range(len(s)):
        if s[i] != s[n-1-i]:
            return False
    return True

def main():
    n = int(input())
    for i in range(n):
        title = input()
        original = title
        title = to_lower(title)
        title = remove_space(title)
        if isPalindrome(title):
            print(original)
    
main()