def main():
    word = input()
    text = input()
    text = text.lower().split()
    count = 0
    for i in text:
        print(i)
        if i == word:
            count += 1
    print(count)
    
main()