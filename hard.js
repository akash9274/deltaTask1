

var cells =[]
var count = 0
var colorscheck
const candycolours =[
    'red' ,
    'yellow' ,
    'green' ,
    'purple' ,
    'green' ,
    'orange' 
]



var endsound= new Audio('mixkit-video-game-win-2016.wav')

var finalscore

var highestscore

highscore=localStorage.getItem('max2')
if(highestscore === null)
{
 highestscore=10000
}


var arrayconstcolours = new Array();

for(var i =0 ; i<16 ; i++)
{
    var container = document.getElementById("const-container")
    var cell = document.createElement("div")
    container.appendChild(cell)
    var cellcolour = candycolours[Math.floor(Math.random() * 6)]
    cell.style.backgroundColor = cellcolour
    arrayconstcolours[i] = cellcolour
}



var arraygamecolours = new Array()

for(var i =0;i<36;i++)
{   var container = document.getElementById("outer-container")
    var cell = document.createElement("div")
    container.appendChild(cell)
    cell.setAttribute('id',i)

    cells.push(cell)
    if(i>((arrayconstcolours.length)-1))
    {var gamecolour= candycolours[Math.floor(Math.random() * 6)]
        cell.style.backgroundColor = gamecolour
        cell.setAttribute('id',i)
        arraygamecolours[i] = gamecolour
    }
    if(i<((arrayconstcolours.length)))
    {
        cell.style.backgroundColor = arrayconstcolours[15-i]
        cell.setAttribute('id',i)
    }
    
    if(i==35)
    {cell.style.backgroundColor = "black"
     cell.setAttribute('id', i)
     arraygamecolours[i] = "black"
    }

}

document.getElementById('outer-container').onclick = function swap(e){
    var target = e.target
    var targetcolour = target.style.backgroundColor
    var targetId = parseInt(e.target.id)
    
    if((targetId+1)<36 && targetId!=5 && targetId!=11 && targetId!=17 && targetId!=23 && targetId!=29)
    {    
        if(document.getElementById(targetId+1).style.backgroundColor == 'black')
        {       target.style.backgroundColor = "black"
                document.getElementById(targetId+1).style.backgroundColor = targetcolour
     
                count++
        }
    }
  
    if(targetId>5)
        {if(document.getElementById(targetId - 6).style.backgroundColor == 'black')
        {
                target.style.backgroundColor = "black"
                document.getElementById(targetId - 6).style.backgroundColor = targetcolour

                count++
        }
    }

    if(targetId<30)
    {   if(document.getElementById(targetId + 6).style.backgroundColor == 'black')
        {
            target.style.backgroundColor = "black"
            document.getElementById(targetId + 6).style.backgroundColor = targetcolour

            count++
        }
    }
    
    if((targetId-1)>=0 && targetId!=6 && targetId!=12 && targetId!=18 && targetId!=24 && targetId!=30)
    {
        if(document.getElementById(targetId-1).style.backgroundColor == 'black')
        {   target.style.backgroundColor = "black"
            document.getElementById(targetId - 1).style.backgroundColor = targetcolour

            count++
        }   
}

if(check())
{   
    endsound.play()
    finalscore=count
    alert("You have finished the game in" + finalscore)
    highestscore()

}
}

function check()
{
    colorscheck =[
        document.getElementById(7).style.backgroundColor,
        document.getElementById(8).style.backgroundColor,
        document.getElementById(9).style.backgroundColor,
        document.getElementById(10).style.backgroundColor,
        document.getElementById(13).style.backgroundColor,
        document.getElementById(14).style.backgroundColor,
        document.getElementById(15).style.backgroundColor,
        document.getElementById(16).style.backgroundColor,
        document.getElementById(19).style.backgroundColor,
        document.getElementById(20).style.backgroundColor,
        document.getElementById(21).style.backgroundColor,
        document.getElementById(22).style.backgroundColor,
        document.getElementById(25).style.backgroundColor,
        document.getElementById(26).style.backgroundColor,
        document.getElementById(27).style.backgroundColor,
        document.getElementById(28).style.backgroundColor
    ]

    return arrayconstcolours.every((val, index) => val === colorscheck[index])

}

function restart(){
    document.location.reload()
}

function highscore(){
    if(finalscore<highestscore)
    {
        localStorage.setItem('max2',finalscore)
    }

}

function displaymax(){
    alert(localStorage.getItem('max2'))
}

