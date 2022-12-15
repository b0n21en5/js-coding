

function loadScript(src, callabck){
    var script = document.createElement('script');
    script.src = src;


    // onload handle resolve
    script.onload = function(){
        console.log('Script loaded ' + src )


        // callback function invoked here with argument
        callabck('Coder');  
    }

    //onerror will handle error
    script.onerror = function(){
        console.log(`ERROR occured in loading script! ${src}`)
    }

    document.body.appendChild(script);
}


greet = (name) =>{
    console.log('Greetings from callabck ' + name)
}


loadScript('https://github.com/b0n21en5', greet)