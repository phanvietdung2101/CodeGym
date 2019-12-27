
function songuyento()
{
    //Bien kiem tra f
    let f=true;
    let n;
    n=prompt("Nhap gia tri n:");
    parseInt(n);
    if(n < 2){
        f=false;
    }
    else{
        //Lap gia tri i tu 2 den n-1
        let i;
        parseInt(i);
        for (i = 2; i <= n-1; i++){
            if (n % i == 0) {
                f = false;
                break;
            }
        }
    }
    // Kiem tra gia tri f de xac dinh n
    if (f == true){
        alert("n la so nguyen to ");
    }
    else{
        alert("n khong phai la so nguyen to")
    }
}