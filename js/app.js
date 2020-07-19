class typeWrite{
    constructor(textEl, wordArr){
        this.textEl = textEl ;
        this.wordArr = wordArr ;
        this.txt = '';
        this.elementIndex = 0;
        this.isDeleting = false ;
        this.type() ;
    }

    type() {
        const current = this.elementIndex % this.wordArr.length ;
        let currentWord = this.wordArr [current] ;
        let typeSpeed = 500
        console.log(this.elementIndex);

        if(this.isDeleting){
            this.txt = currentWord.substring(0, this.txt.length - 1) ;
        } else{
            this.txt = currentWord.substring(0, this.txt.length + 1) ;
            console.log(this.txt);

            console.log('hlo');
        }
        this.textEl.innerHTML = `<span class = txt> ${this.txt}</span>`

        if(!this.isDeleting === true && this.txt === currentWord){
            this.isDeleting = true;
            typeSpeed = 3000;
        } else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            this.elementIndex++ ;

        }
        if(this.isDeleting){
            typeSpeed /= 3 ;
        }
        console.log(this.wordArr.length);
        

    setTimeout(() => {
        this.type();
    }, typeSpeed);

    }
}




document.addEventListener('DOMContentLoaded', initiate);
function initiate(){
    const textEl = document.querySelector('.changing-text');
    const wordArr = ['LOVE', 'LIFE', 'EMOTION'];
    new typeWrite(textEl, wordArr);
}
