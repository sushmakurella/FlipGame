//for main game
var count=0,c=14,pc1=0,pc2=0;
  var store=[];
  var scr1=0,scr2=0;
  let lstimg=["marigold","alarmclock","basketball","colorpalate","doublelove","fish","house","lovesym","partyboque","redcar","redeyes","rocket","tearofjoys","tree","marigold","alarmclock","basketball","colorpalate","doublelove","fish","house","lovesym","partyboque","redcar","redeyes","rocket","tearofjoys","tree"];
  let index=lstimg.length,rindex;
  lstimg.sort(() => Math.random() - 0.5);
  var lstimgid=["maindiv1","maindiv2","maindiv3","maindiv4","maindiv5","maindiv6","maindiv7","maindiv8","maindiv9","maindiv10","maindiv11","maindiv12","maindiv13","maindiv14","maindiv15","maindiv16","maindiv17","maindiv18","maindiv19","maindiv20","maindiv21","maindiv22","maindiv23","maindiv24","maindiv25","maindiv26","maindiv27","maindiv28"];
  var lstdivid=["now1","now2","now3","now4","now5","now6","now7","now8","now9","now10","now11","now12","now13","now14","now15","now16","now17","now18","now19","now20","now21","now22","now23","now24","now25","now26","now27","now28"];
  var scoredivname1=document.getElementById("h3score1");
  var scoredivname2=document.getElementById("h3score2");
  scoredivname1.innerHTML=player1;
  scoredivname2.innerHTML=player2;
  function recheck(){
      console.log(lstimg[store[store.length-1]]);
      console.log(lstimg[store[store.length-2]]);
      if(lstimg[store[store.length-1]]===lstimg[store[store.length-2]]){
        c-=1;
        if((count%4)==2){
          pc1+=1;
          var h=document.getElementById("scorenum1");
          h.innerHTML=pc1;

        }
        else{
          pc2+=1;
          var h=document.getElementById("scorenum2");
          h.innerHTML=pc2;
        }
      }
      else{
        var hg1=document.getElementById(lstimgid[store[store.length-1]]);
        var hg2=document.getElementById(lstimgid[store[store.length-2]]);
        hg1.src="";
        hg2.src="";
        document.getElementById(lstdivid[store[store.length-1]]).hidden=false;
        document.getElementById(lstdivid[store[store.length-2]]).hidden=false;
      }
      if(c==0){
        if(pc1==pc2){
          alert("both are winners");
        }
        else if(pc1>pc2){
          alert("player 1 is the winner with score "+pc1);
        }
        else{
          alert("player 2 is the winner with score "+pc2);
        }
      }
    }
    function game(a){
      //var h=document.getElementById("scorenum1");
      store.push(a);
      count+=1;
      var hg=document.getElementById(lstimgid[a]);
      var lnk="C:/Users/Dell/OneDrive/Desktop/flipgame/";
      var end=".png";
      var finl=lnk+lstimg[a]+end;
      hg.src=finl;
      document.getElementById(lstdivid[a]).hidden=true;
      if(count%2==0){
        recheck();
      }
    }
