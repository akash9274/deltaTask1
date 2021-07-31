
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

highestscore=localStorage.getItem('max')

if(highestscore === null)
{highestscore=10000}

var arrayconstcolours = new Array();

for(var i =0 ; i<9 ; i++)
{
    var container = document.getElementById("const-container")
    var cell = document.createElement("div")
    container.appendChild(cell)
    var cellcolour = candycolours[Math.floor(Math.random() * 6)]
    cell.style.backgroundColor = cellcolour
    arrayconstcolours[i] = cellcolour
}



var arraygamecolours = new Array()

for(var i =0;i<25;i++)
{   var container = document.getElementById("outer-container")
    var cell = document.createElement("div")
    container.appendChild(cell)
    cell.setAttribute('id',i)

    cells.push(cell)
    if(i>((arrayconstcolours.length)-1))
    {var gamecolour=  candycolours[Math.floor(Math.random() * 6)]
        cell.style.backgroundColor = gamecolour
        cell.setAttribute('id',i)
        arraygamecolours[i] = gamecolour
    }
    if(i<((arrayconstcolours.length)))
    {
        cell.style.backgroundColor = arrayconstcolours[8-i]
        cell.setAttribute('id',i)
    }
    
    if(i==24)
    {cell.style.backgroundColor = "black"
     cell.setAttribute('id', i)
     arraygamecolours[i] = "black"
    }
    
    
}

document.getElementById('outer-container').onclick = function swap(e){
    var target = e.target
    var targetcolour = target.style.backgroundColor
    var targetId = parseInt(e.target.id)
    
    if((targetId+1)< 25 && targetId!=4 && targetId!=9 && targetId!=14 && targetId!=19)
    {    
        if(document.getElementById(targetId+1).style.backgroundColor == 'black')
        {       target.style.backgroundColor = "black"
                document.getElementById(targetId+1).style.backgroundColor = targetcolour

                count++
        }
    }
  
    if(targetId>4)
        {if(document.getElementById(targetId - 5).style.backgroundColor == 'black' && targetId>4)
        {
                target.style.backgroundColor = "black"
                document.getElementById(targetId - 5).style.backgroundColor = targetcolour
                count++

        }
    }

    if(targetId<20)
    {   if(document.getElementById(targetId + 5).style.backgroundColor == 'black' && targetId<20)
        {
            target.style.backgroundColor = "black"
            document.getElementById(targetId + 5).style.backgroundColor = targetcolour
            clicksound.play()
            count++
        }
    }
    
    if((targetId-1)>=0 && targetId!=5 && targetId!=10 && targetId!=15 && targetId!=20)
    {
        if(document.getElementById(targetId-1).style.backgroundColor == 'black')
        {   target.style.backgroundColor = "black"
            document.getElementById(targetId - 1).style.backgroundColor = targetcolour

            count++
        }   
}

if(check()){
    endsound.play()
finalscore=count
alert("You have finished the game in" + finalscore)
highscore()
}
}

function check()
{
    colorscheck =[
        document.getElementById(6).style.backgroundColor,
        document.getElementById(7).style.backgroundColor,
        document.getElementById(8).style.backgroundColor,
        document.getElementById(11).style.backgroundColor,
        document.getElementById(12).style.backgroundColor,
        document.getElementById(13).style.backgroundColor,
        document.getElementById(16).style.backgroundColor,
        document.getElementById(17).style.backgroundColor,
        document.getElementById(18).style.backgroundColor
        
    ]

    return arrayconstcolours.every((val, index) => val === colorscheck[index])


}

function restart(){
    document.location.reload()
}

function highscore(){
    if(finalscore<highestscore)
    {
        localStorage.setItem('max',finalscore)
    }

}

function displaymax(){
    alert(localStorage.getItem('max'))
}


