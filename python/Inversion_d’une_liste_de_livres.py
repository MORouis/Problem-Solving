def main():
    n = int(input())
    liste = [""]*n
    for i in range(n):
        liste[i] = input()
    #liste.reverse()
    for i in range(len(liste)-1, -1, -1):
        print(liste[i])
main()