def main():
    
    acronym = input()
    n = int(input())
    
    for i in range(n):
        title = input().split()
        
        if len(title) != len(acronym):
            continue
        
        ok = True
        for i in range(len(title)):
            title[i] = title[i].capitalize()
            if title[i][0] != acronym[i]:
                ok = False
                break
                
        if ok:
            print(" ".join(title))


main()