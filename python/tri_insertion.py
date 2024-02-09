def tri_insertion(tab):
    for i in range(1, len(tab)):
        nb = tab[i]
        j = i-1
        
        while j>=0 and nb<tab[j]:
            tab[j+1] = tab[j]
            j -= 1
            
        tab[j+1] = nb
            
            
def main():
    tab = [7, 8, -4, 11, 10, 9, -1]
    tri_insertion(tab)
    
    for i in tab:
        print(i)
    
    
main()