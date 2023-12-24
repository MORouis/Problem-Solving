def tri_selection(tab):
    
    
    for i in range(len(tab)):
        minn = i
        for j in range(i+1, len(tab)):
            if tab[j]<tab[minn]:
                minn = j
                
        aux = tab[i]
        tab[i] = tab[minn]
        tab[minn] = aux
    return tab

tab = [5, -4, 7, -1, 3, 6]
tri_selection(tab)

for i in tab:
    print(i)