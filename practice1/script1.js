(function(window){const punkyGreeting={};
const greeting='hi';
punkyGreeting.name='Punky';
punkyGreeting.sayHi=()=>{
    console.log('hi '+punkyGreeting.name);
}
window.punkyGreeting=punkyGreeting;

}

)(window);