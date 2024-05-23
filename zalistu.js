let x=document.getElementById('idd');
niz=[1,2,3,4,5,6,7,8,9];
for (let i=0;i<niz.length;i++){
    if (niz[i]%2==0){
        let novi=document.createElement('li');
        novi.innerHTML=niz[i];
        x.append(novi);;
    }
}
function funkcija(){
window.open('https://www.google.com/search?q=dog+pcture&rlz=1C1SQJL_hrBA893BA893&oq=dog+pcture&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiABDIJCAQQABgNGIAEMgkIBRAAGA0YgAQyCQgGEAAYDRiABDIJCAcQABgNGIAEMgkICBAAGA0YgAQyCQgJEAAYDRiABNIBCDIxMjBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#vhid=rLyV376IoQ8n5M&vssid=l','_blank');
}
