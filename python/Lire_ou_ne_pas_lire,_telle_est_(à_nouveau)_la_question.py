def main():
    n = int(input())

    liste = [""]*n
    actual_book = liste[0]
    for i in range(len(liste)):
        liste[i] = input()
        if liste[i]>actual_book:
            actual_book = liste[i]
            print(actual_book)
            
    
main()