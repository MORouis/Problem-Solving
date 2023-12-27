nbLivres, nbJours = map(int, input().split())

prochaineDateLibre = [0]*nbLivres
iJour = 0

for i in range(nbJours):
    nbClients = int(input())
    for j in range(nbClients):
        indice, duree = map(int, input().split())
        if iJour>=prochaineDateLibre[indice]:
            print(1)
            prochaineDateLibre[indice] = iJour + duree
        else:
            print(0)
    iJour += 1