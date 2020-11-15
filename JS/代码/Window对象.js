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

// 取页面上所有的tag

function getTags(){
    var list1 = document.getElementsByTagName("*");
    console.log("List: ", list1);
    var tags = Array.prototype.slice.call(list1);
    console.log("Tags: ", tags);
    tags = tags.map(function(item){
        return item.tagName.toLowerCase();
    });
    console.log([...new Set(tags)]);
}

