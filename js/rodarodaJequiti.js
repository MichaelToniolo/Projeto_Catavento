    /* RodaRodaJequiti */
    
    var x,y,n=0,ny=0,rotINT,rotYINT
    function rotateDIV()
    {
    x=document.getElementById("rotate2D")
    clearInterval(rotINT)
    rotINT=setInterval("startRotate()",10)
    }
    function startRotate()
    {
    n=n+1
    x.style.transform="rotate(" + n + "deg)"
    x.style.webkitTransform="rotate(" + n + "deg)"
    x.style.OTransform="rotate(" + n + "deg)"
    x.style.MozTransform="rotate(" + n + "deg)"
    //if (n==180 || n==360)
    //{
    //clearInterval(rotINT)
    //if (n==360){n=0}
    //}
    }
    function stopRotate()
    {
    x=document.getElementById("rotate2D")
    clearInterval(rotINT)
    }

        /* CHATBOT */
        
    var textarray = [

        "BIIRRRRLLLL",
        
        "Olá",
        
        "Precisa de ajuda?",
        
        ];
        
        //"Aleatoriza" o texto

        function Texto() {
        
        var numr= Math.floor(Math.random()*textarray.length);
        
        document.getElementById('ChatBox').innerHTML=textarray[numr];
        
        }
        
        //Intervalo entre mensagens \\ 1000-1seg

        var inter = setInterval(function() { Texto(); }, 2000);

        var inter = setInterval(function() { Magica(); }, 2000);

        //Carrega função ao carregar a página

        onload = function() { Texto(); }

        onload = function() {Magica(); }

        //Mostra/Oculta mensagem//

        function Magica() {
            var x = document.getElementById("ChatBox");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }