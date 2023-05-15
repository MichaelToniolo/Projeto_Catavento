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
    n=n-1
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

