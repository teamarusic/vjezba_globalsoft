let x=document.getElementById('idd');
niz=[1,2,3,4,5,6,7,8,9];
for (let i=0;i<niz.length;i++){
    if (niz[i]%2==0){
        let novi=document.createElement('li');
        novi.innerHTML=niz[i];
        x.append(novi);;
    }
}