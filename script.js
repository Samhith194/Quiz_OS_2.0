var randomCorrect = function(){
    var correctPage=["correct1.html","correct2.html","correct3.html","correct4.html"];
    var corMax = (correctPage.length);
    var randomCor = Math.floor(Math.random()*corMax);
    var correct = correctPage[randomCor];
    window.location = "../Correct/"+correct;
    function OpenInNewTab(url) {
        var win = window.open(url,'_blank');
        win.focus();
    }
}

var randomWrong = function(){
    var wrongPage=["Wrong1.html","Wrong2.html","Wrong3.html","Wrong4.html","Wrong5.html","Wrong6.html"];
    var worMax = (wrongPage.length);
    var randomWro = Math.floor(Math.random()*worMax);
    var wrong = wrongPage[randomWro];
    window.location = "../Wrong/"+wrong;
    function OpenInNewTab(url) {
        var win = window.open(url,'_blank');
        win.focus();
    }
}