let  moonDiv=document.getElementById('moon')

let marginLeft = 100;

let timeout = setInterval(() => {
     moonDiv.style.display = "block";

     marginLeft = marginLeft - 1;
     console.log(marginLeft);
     moonDiv.style.marginLeft = `${marginLeft}%`;
      let con = `${marginLeft}%`;
    if (matchMedia("only screen and (max-width: 480px)").matches) {
       if (con === "85%") {
         document.body.style.backgroundColor = "black";
       } else if (
         (con <= "99%" && con >= "95%") ||
         (con <= "70%" && con >= "65%")
       ) {
         document.body.style.backgroundColor = "#A9A9A9";
       } else if (
         (con <= "95%" && con >= "90%") ||
         (con <= "75%" && con >= "70%")
       ) {
         document.body.style.backgroundColor = "#808080";
       } else if (
         (con <= "90%" && con >= "85%") ||
         (con <= "80%" && con >= "75%")
       ) {
         document.body.style.backgroundColor = "#373434";
       } else if (con <= "65%" && con >= "60%") {
         document.body.style.backgroundColor = "rgb(189, 214, 231)";
       } else if (con <= "60%" && con >= "55%") {
         document.body.style.backgroundColor = "rgb(160, 188, 207)";
       } else if (con <= "55%" && con >= "50%") {
         document.body.style.backgroundColor = "rgb(121, 155, 177)";
       } else if (con <= "50%" && con >= "45%") {
         document.body.style.backgroundColor = "rgb(114, 155, 182)";
       } else if (con <= "45%" && con >= "40%") {
         document.body.style.backgroundColor = "rgb(104, 149, 180)";
       } else if (con <= "40%" && con >= "30%") {
         document.body.style.backgroundColor = "rgb(54, 121, 165)";
       } else if (con <= "30%") {
         document.body.style.backgroundColor = "rgb(14, 87, 135)";
       }
        else if (con === "10%") {
          moonDiv.style.display = "none";
          clearInterval(timeout);
        }
    
    }

  if (matchMedia("only screen and (min-width: 1200px)").matches) {
  if (con === "60%") {
    document.body.style.backgroundColor = "black";
  } else if ((con <= "80%" && con >= "75%") || (con <= "40%" && con >= "35%")) {
    document.body.style.backgroundColor = "#A9A9A9";
  } else if ((con <= "75%" && con >= "70%") || (con <= "45%" && con >= "40%")) {
    document.body.style.backgroundColor = "#808080";
  } else if ((con <= "70%" && con >= "65%") || (con <= "50%" && con >= "45%")) {
    document.body.style.backgroundColor = "#504949";
  } else if ((con <= "65%" && con >= "60%") || (con <= "55%" && con >= "50%")) {
    document.body.style.backgroundColor = "#555353";
  } else if (con === "10%") {
    clearInterval(timeout);
    moonDiv.style.display = "none";
  } else if (con <= "35%") {
    document.body.style.backgroundColor = "rgb(14, 87, 135)";
  } 
}
if (matchMedia("only screen and (min-width: 1600px) and (max-width: 4000px)").matches) {
  if (con === "60%") {
    document.body.style.backgroundColor = "black";
  } else if ((con <= "75%" && con >= "70%") || (con <= "45%" && con >= "40%")) {
    document.body.style.backgroundColor = "#rgb(105, 105, 105)";
  } else if ((con <= "70%" && con >= "65%") || (con <= "50%" && con >= "45%")) {
    document.body.style.backgroundColor = "#rgb(82, 81, 81)";
  } else if ((con <= "65%" && con >= "60%") || (con <= "55%" && con >= "50%")) {
    document.body.style.backgroundColor = "#3c3c3c";
  } else if (con <= "40%") {
    document.body.style.backgroundColor = "rgb(14, 87, 135)";
  } else if (con === "10%") {
    clearInterval(timeout);
    moonDiv.style.display = "none";
  }
}
}, 300);

moonDiv.style.display='block'