def main():
    n = int(input())
    liste = [""]*n
    for i in range(n):
        liste[i] = input()
    liste.sort()
    for i in liste:
        print(i)
main()