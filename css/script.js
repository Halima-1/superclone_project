function display(){
    
    // home
    let display= document.getElementById('hom')
    if(display.classList.contains('show')){
        display.classList.remove('show');
        display.classList.add('hide');
    }else{
        display.classList.remove('hide');
        display.classList.add('show');
    }
    
    // airtime
    let airtime = document.getElementById('air');
    if(airtime.classList.contains('show')){
        airtime.classList.remove('show');
        airtime.classList.add('hide');
    }else{
        airtime.classList.remove('hide');
        airtime.classList.add('show');
    }
    
    // buy data
    let data = document.getElementById('dat');
    if(data.classList.contains('show')){
        data.classList.remove('show');
        data.classList.add('hide');
    }else{
        data.classList.remove('hide');
        data.classList.add('show');
    }
    
    // login
    let login = document.getElementById('log');
    if(login.classList.contains('show')){
        login.classList.remove('show');
        login.classList.add('hide');
    }else{
        login.classList.remove('hide');
        login.classList.add('show');
    }
    
    // log out
    let logout = document.getElementById('outt')
    if(logout.classList.contains('show')){
        logout.classList.remove('show');
        logout.classList.add('hide');
    }else{
        logout.classList.remove('hide');
        logout.classList.add('show');
    }
    
    // register
    let reg = document.getElementById('regg')
    if(reg.classList.contains('show')){
        reg.classList.remove('show');
        reg.classList.add('hide');
    }else{
        reg.classList.remove('hide');
        reg.classList.add('show');
    }
    
    // setting
    let setting = document.getElementById('setting')
    if(setting.classList.contains('show')){
        setting.classList.remove('show');
        setting.classList.add('hide');
    }else{
        setting.classList.remove('hide');
        setting.classList.add('show');
    }
    
    // display.classList.toggle('show')
    let sideNav = document.getElementById('sideNav')
    if (sideNav.classList.contains('showing')){
        sideNav.classList.remove('showing');
        sideNav.classList.add('hidden');
    }
    else{
        sideNav.classList.add('showing');
        sideNav.classList.remove('hidden');

    }
       }

       fetch("https://randomuser.me/api/").then(function(data){
        return  data.json()
       }).then(response =>{
         let result = response.results[0];
         
         let name = result = response.results[0].name;
         let fullName = name.first + '  ' + name.last;
         document.querySelector('#name').innerHTML=fullName;
        })
        let site =`<a href="https://superjara.com">superjara</a>`
        alert (`Welcome to superclone dashboard.Superclone is a cloned superjara website. you can visit the site in superjara.com`)