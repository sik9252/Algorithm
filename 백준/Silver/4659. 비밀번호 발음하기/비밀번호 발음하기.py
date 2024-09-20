import sys
input=sys.stdin.readline

vowel_list = ['a', 'e', 'i', 'o', 'u']

while True:

    case = input().rstrip()

    if case == 'end':
        break

    isSequencedThreeTimes = False
    isSequencedTwoTimes = False
    c_vowel = 0

    # 모음 개수 검사
    for w in case:
        if w in vowel_list:
            c_vowel += 1

    if c_vowel < 1:
        print(f'<{case}> is not acceptable.')
        continue

    for i in range(len(case)-2):
        # 모음이 연속 3개인지
        if case[i] in vowel_list and case[i+1] in vowel_list and case[i+2] in vowel_list:
            isSequencedThreeTimes = True
        # 자음이 연속 3개인지
        elif not(case[i] in vowel_list) and not(case[i+1] in vowel_list) and not(case[i+2] in vowel_list):
            isSequencedThreeTimes = True


    if isSequencedThreeTimes:
        print(f'<{case}> is not acceptable.')
        continue

    # 같은 글자가 연속 2개인지
    for i in range(len(case)-1):
        if case[i] == case[i+1]:
            if case[i] == 'e' or case[i] == 'o':
                continue
            else:
                isSequencedTwoTimes = True

    if isSequencedTwoTimes:
        print(f'<{case}> is not acceptable.')
        continue

    print(f'<{case}> is acceptable.')