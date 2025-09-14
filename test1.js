const main = (a, b, c) => {
    return (a + b + c) / 3;
}
const rank = ( a ) => {
    if (a >= 9) 
        return "Xuat Sac";
    else if (8 <= a && a <  9)
        return "Gioi";
    else if (6.5 <= a && a < 8)
        return "Kha";
    else
        return "Trung binh";
}
console.log(main(7,8,9));
console.log(rank(main(9,7,8)));