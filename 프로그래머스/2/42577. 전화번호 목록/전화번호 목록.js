function solution(phone_book) {
    phone_book.sort();

    const isPrefix = phone_book.some((phone, i) => {
        return phone_book[i+1]?.startsWith(phone);
    })

    return !isPrefix
}