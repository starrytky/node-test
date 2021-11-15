console.log("运行了这一行");
getCss.onclick = function () {
  const request = new XMLHttpRequest();
  request.open('GET', '/style.css');
  request.onreadystatechange = () => {
    if (request.readyState === 4){
      if(request.status >=200 && request.status < 300){
        const style = document.createElement('style');
        style.innerHTML = request.response;
        document.head.appendChild(style);
      }else {
        alert('下载失败')
      }
    }
  }
  request.onload = function(){

    console.log('成了')
  }
  request.onerror = function(){
    console.log('白了')
  }
  request.send();
}

getJS.onclick = function() {
  const request = new XMLHttpRequest();
  request.open('GET', '/2.js');
  request.onload = function(){
    const script = document.createElement('script');
    script.innerHTML = request.response;
    document.body.appendChild(script);
    console.log('成了')
  }
  request.onerror = function(){
    console.log('白了')
  }
  request.send();
}

getHTML.onclick = function(){
  const request = new XMLHttpRequest();
  request.open('GET', '/3.html');
  request.onload = function() {
    const div = document.createElement('div')
    div.innerHTML = request.response;
    document.body.appendChild(div);
    console.log('成了')
  }
  request.onerror = function() {
    console.log("败了")
  }
  request.send();
}

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/4.xml')
  request.onreadystatechange = ()=>{
    if(request.readyState === 4 && request.status === 200){
      const dom = request.responseXML;
      console.log(dom.getElementsByTagName('warning')[0].textContent.trim())      
    }
  }
  request.send();
}

getJSON.onclick = function(){
  const request = new XMLHttpRequest();
  request.open("GET", '/5.json');
  console.log(12121)
  request.onreadystatechange = ()=>{
    if(request.readyState === 4 && request.status === 200) {
      const json = JSON.parse(request.response)
      console.log(json)
      userName.textContent = json.name;
    }
  }
  request.send();
}