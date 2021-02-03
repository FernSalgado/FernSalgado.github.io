function changeSet(id) {
    var divs = document.getElementById("stashSets").childNodes;
    divs.forEach((item,index)=>{
        if (index % 2 !== 0)
            item.style.display = 'none';
    })
    var btns = document.getElementById("btnDiv").childNodes;
    btns.forEach((item,index)=>{
        if (index % 2 !== 0)
            item.classList.remove("active");
    })
    
    
    document.getElementById(id + 'Set').style.display = 'block';
    document.getElementById(id + 'Btn').classList.add("active");
  }