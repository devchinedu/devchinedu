
const contactus = document.querySelector('.contactus');
const contactpage = document.querySelector('.contactPage');
const sendbtn = document.querySelector('#sendmessage');
const sent = document.querySelector('#thankyou');
const closebtn = document.getElementsByClassName('close');


// event.preventDefault();

contactus.addEventListener('click', function(){
    contactpage.classList.add('hidden');
});


sendbtn.addEventListener('click', function(event){
     event.preventDefault();
    sent.style.display = 'flex';
    contactpage.classList.remove('hidden');
    
});


for(var i = 0 ; i < closebtn.length; i++){
closebtn[i].addEventListener('click', function(){
    contactpage.classList.remove('hidden');
        sent.style.display = 'none';

})
}
