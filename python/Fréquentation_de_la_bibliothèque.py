def somme_lignes():
    s = 0
    while True:
        try:
            ligne = map(int, input().split())
        except EOFError:
            return s
        s += sum(ligne)

def main():
    print(somme_lignes())
    
main()