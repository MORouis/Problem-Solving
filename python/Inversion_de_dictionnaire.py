def main():
    n = int(input())
    t = [""]*n
    
    for i in range(n):
        first_language, second_language = input().split()
        c = second_language + " " + first_language
        t.append(c)
        
    t.sort()
    for i in t:
        print(i)
    
    
main()