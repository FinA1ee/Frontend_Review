function invoke(f, start, interval, end){
    if(!start){
        start = 0;
    }
    if(!interval){
        setTimeout(f, start);
    } else {
        var d = new Date();
        console.log(d);
        setTimeout(repeat, start);
        function repeat(){
            var h = setInterval(f, interval);
            if(end){
                setTimeout(function(){
                    clearInterval(h);
                }, end)
            }
        }
    }
}

