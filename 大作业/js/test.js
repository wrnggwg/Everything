let option = new Object;                          //将echart的对象
option = {
    grid:{
        top:0,
        bottom:0,
        left:0,
        right:0
    },
    xAxis: {
        
        type: 'category',
        data: ['', '', '', '', '', '', '',''],      //
        show:false                              //不显示x轴
    },
    yAxis: [{
        max: 40,
        min:0,
        splitNumber : 5,
        show : false                            //不显示y轴
        
    }],
    series: [
        {
            data:[31,22,33,34,25,26,37,18],
            type: 'line',
            smooth: true,
            lineStyle: {
                color: 'orange'
            },
            itemStyle: {
                color: "orange"
            },
            label: {
                show: true,
                position: 'top'
            }
        },
        {
            data:[1,5,8,11,15,16,14,10],
            type: 'line',
            smooth: true,
            lineStyle: {
                color: 'green'
            },
            itemStyle: {
                color: "green"
            },
            label: {
                show: true,
                position: 'top'
            }
        }
    ]
}
var ary_day = new Array(8);                                     //最高温数组
var ary_night = new Array(8);                                   //最低温数组

paint =  function(){        
    
    
    let line = document.getElementById('line');
    let myChart = echarts.init(line);
    option.series[0].data = ary_day;
    option.series[1].data = ary_night;
    if(option && typeof option === 'object'){
        myChart.setOption(option);
        console.log(option);
    } 
    
}                                                               //绘图

function getdata(location){                                     //当搜索页面点击城市后触发

    async function fetchmethod(url,succeed,failed){
        const res = await fetch(url);
        if((res.status >= 200 && res.status < 300)||res.status == 304){
            const json = await res.json();
            console.log(json);
            succeed(json);
        }
        else failed(); 
    }   
    getyesterday = function(){                                  //获取昨日时间
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth()+1;
        if(parseInt(month) < 10)
        month = "0"+month;
        let date = d.getDate()-1;
        if(parseInt(date) < 10)
        date = "0" + date;
        
        return ""+year+month+date;
    }
    getdate = function(){                                       //获取今日时间
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth()+1;
        if(parseInt(month) < 10)
        month = "0"+month;
        let date = d.getDate();
        if(parseInt(date) < 10)
        date = "0" + date;
        return ""+year+month+date;
    }
    // 定义所有的url
    let airconditionurl = "https://devapi.qweather.com/v7/air/now?location="+location+"&key=1baa7ac8ec084297a0dbecf935db53c3";
    let main_weaurl = "https://devapi.qweather.com/v7/weather/now?location="+location+"&key=1baa7ac8ec084297a0dbecf935db53c3";
    let days_weaurl = "https://devapi.qweather.com/v7/weather/7d?location="+location+"&key=1baa7ac8ec084297a0dbecf935db53c3";
    let hoururl = "https://devapi.qweather.com/v7/weather/24h?location="+location+"&key=1baa7ac8ec084297a0dbecf935db53c3";
    let lifeurl = "https://devapi.qweather.com/v7/indices/1d?type=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16&location="+location+"&key=1baa7ac8ec084297a0dbecf935db53c3";
    let sunurl = "https://api.qweather.com/v7/astronomy/sun?location="+location+"&date="+getdate()+"&key=fbbb32ef666b462285241096a2a74043";
    let yesterdayurl = "https://api.qweather.com/v7/historical/weather?location="+location+"&date="+getyesterday()+"&key=fbbb32ef666b462285241096a2a74043";
    

    failed = function(){
        console.log("failed");
    }
    // 当日出日落申请成功
    sunrise_succeed = function(res){
        
        let hour_degree = document.getElementsByClassName('hour_degree');
        let hour_degree_import = document.getElementsByClassName('hour_degree_import');
        let hour_time = document.getElementsByClassName('hour_time');
        let hour_time_import = document.getElementsByClassName('hour_time_import');
        let hour_img = document.getElementsByClassName('hour_img');
        let hour_img_import = document.getElementsByClassName('hour_img_import');
        let d= new Date();
        let time = d.getHours();
        let time_int = parseInt(time);
        let sunrise_hour = res.sunrise.slice(11,13);
        let sunrise_int = parseInt(sunrise_hour);
        let sunrise_minutes = res.sunrise.slice(14,16);
        let sunset_hour = res.sunset.slice(11,13);
        let sunset_int = parseInt(sunset_hour);
        let sunset_minutes = res.sunset.slice(14,16);
        // 修改日出日落位子
        if(time_int > sunrise_int){
            sunrise_int = sunrise_int + 24;
        }
        if(time_int > sunset_int){
            sunset_int = sunset_int + 24;
        }
        hour_degree[sunset_int-time_int].classList.replace('hour_degree','hour_degree_import');
        hour_degree[sunrise_int-time_int].classList.replace('hour_degree','hour_degree_import');
        hour_degree_import[0].innerHTML = "日落";
        hour_degree_import[1].innerHTML = "日出";
        hour_time[sunset_int-time_int].classList.replace('hour_time','hour_time_import');
        hour_time[sunrise_int-time_int].classList.replace('hour_time','hour_time_import');
        hour_time_import[0].innerHTML = sunset_hour+":"+sunset_minutes;
        hour_time_import[1].innerHTML = sunrise_hour+":"+sunrise_minutes;
        hour_img[sunset_int-time_int].classList.replace('hour_img','hour_img_import');
        hour_img[sunrise_int-time_int].classList.replace('hour_img','hour_img_import');
        hour_img_import[0].src = "./images/set.png";
        hour_img_import[1].src = "./images/rise.png";
    }
    // 当空气质量申请成功
    aircondition_succeed = function(res){
        let air_til = document.getElementById('air_til');
        let air_value = document.getElementById('air_value');
        air_til.innerHTML = res.now.aqi;
        air_value.innerHTML = res.now.category; 
    }
    // 当主要页面申请成功
    main_wea_succeed = function(res){
        $("#send").html("中央气象台"+res.now.obsTime.slice(11,16)+"发布");
        $("#send").fadeOut(3000);
        let main_temp = document.getElementById('main_temp');
        let main_weather = document.getElementById('main_weather');
        let main_win = document.getElementById('main_win');
        
        main_temp.innerHTML = res.now.temp;
        main_weather.innerHTML = res.now.text;
        main_win.innerHTML = res.now.windDir+res.now.windScale+"级";
    }
    // 当七日天气申请成功
    days_wea_succeed = function(res){
        // 设置两日天气信息
        let Body_left = document.getElementsByClassName('Body_left');
        let Body_right = document.getElementsByClassName('Body_right');
        Body_right[0].innerHTML = res.daily[0].tempMax+"/"+res.daily[0].tempMin+"°";
        Body_right[2].innerHTML = res.daily[1].tempMax+"/"+res.daily[1].tempMin+"°";
        Body_left[1].innerHTML = res.daily[0].textDay;
        Body_left[3].innerHTML = res.daily[1].textDay;
        Body_right[1].firstChild.src = "./icon/"+res.daily[0].iconDay+".png";
        Body_right[3].firstChild.src = "./icon/"+res.daily[1].iconDay+".png";
        // 设置七日天气信息
        let d = new Date();
        let days = d.getDay(); 
        let day = document.getElementsByClassName('day');
        let date = document.getElementsByClassName('date');
        let wea = document.getElementsByClassName('wea');
        let day_img = document.getElementsByClassName('day_img');
        let night_img = document.getElementsByClassName('night_img');
        let wea_night = document.getElementsByClassName('wea_night');
        let wind = document.getElementsByClassName('wind');
        let wind_value = document.getElementsByClassName('wind_value');
        for(let i=1;i<8;i++){
            date[i].innerHTML = res.daily[i-1].fxDate.slice(5,7)+"/"+res.daily[i-1].fxDate.slice(8,10);
            wea[i].innerHTML = res.daily[i-1].textDay;
            day_img[i].src = "./icon/"+res.daily[i-1].iconDay+".png";
            night_img[i].src = "./icon/"+res.daily[i-1].iconNight+".png";
            wea_night[i].innerHTML = res.daily[i-1].textNight;
            wind[i].innerHTML = res.daily[i-1].windDirNight;
            wind_value[i].innerHTML = res.daily[i-1].windScaleNight[0]+"级";
            ary_day[i] = parseInt(res.daily[i-1].tempMax);
            ary_night[i] = parseInt(res.daily[i-1].tempMin);
            // 设置周几
            if(i>=4){
                switch((parseInt(days)+i)%7){
                    case 0:
                        day[i].innerHTML = "周日";
                        break;
                    case 1:
                        day[i].innerHTML = "周一";
                        break;
                    case 2:
                        day[i].innerHTML = "周二";
                        break;
                    case 3:
                        day[i].innerHTML = "周三";
                        break;
                    case 4:
                        day[i].innerHTML = "周四";
                        break;
                    case 5:
                        day[i].innerHTML = "周五";
                        break;
                    case 6:
                        day[i].innerHTML = "周六";
                        break;
                }
            }
        }
    }
    // 当逐时天气申请成功
    hour_succeed = function(res){
        let hour_time = document.getElementsByClassName('hour_time');
        let hour_img = document.getElementsByClassName('hour_img');
        let hour_degree = document.getElementsByClassName('hour_degree');
        let d = new Date();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        if(parseInt(hours) < 10){
            hours = "0" + hours;
        }
        if(parseInt(minutes) < 10){
            minutes = "0" + minutes;
        }
        hour_time[0].innerHTML = hours + ":" + minutes;

        for(let i=0;i<24;i++){
            hour_img[i].src = "./icon/"+res.hourly[i].icon+".png";
            hour_degree[i].innerHTML = res.hourly[i].temp+"°";
            if(i>=1){
                hour_time[i].innerHTML = res.hourly[i].fxTime.slice(11,16);
            }
        }
    }
    // 当生活指数申请成功
    life_succeed = function(res){
        let index_category = document.getElementsByClassName('index_category');
        for(let i=0;i<index_category.length;i++){
            // 因数据返回不规律，用switch为指数添加数据
            switch(res.daily[i].type){
                case "15":
                    index_category[0].innerHTML = res.daily[i].category;
                    break;
                case "3":
                    index_category[1].innerHTML = res.daily[i].category;
                    break;
                case "11":
                    index_category[2].innerHTML = res.daily[i].category;
                    break;
                case "9":
                    index_category[3].innerHTML = res.daily[i].category;
                    break;
                case "2":
                    index_category[4].innerHTML = res.daily[i].category;
                    break;
                case "1":
                    index_category[5].innerHTML = res.daily[i].category;
                    break;
                case "16":
                    index_category[6].innerHTML = res.daily[i].category;
                    break;
                case "4":
                    index_category[7].innerHTML = res.daily[i].category;
                    break;
                case "6":
                    index_category[8].innerHTML = res.daily[i].category;
                    break;
                case "12":
                    index_category[9].innerHTML = res.daily[i].category;
                    break;
                case "10":
                    index_category[10].innerHTML = res.daily[i].category;
                    break;
                case "8":
                    index_category[11].innerHTML = res.daily[i].category;
                    break;
                case "3":
                    index_category[12].innerHTML = res.daily[i].category;
                    break;
                case "13":
                    index_category[13].innerHTML = res.daily[i].category;
                    break;
                case "5":
                    index_category[14].innerHTML = res.daily[i].category;
                    break;
                case "7":
                    index_category[15].innerHTML = res.daily[i].category;
                    break;
            }
        }
    }
    // 当昨日天气申请成功
    yesterday_succeed = function(res){
        let date = document.getElementsByClassName('date');
        let wea = document.getElementsByClassName('wea');
        let day_img = document.getElementsByClassName('day_img');
        let night_img = document.getElementsByClassName('night_img');
        let wea_night = document.getElementsByClassName('wea_night');
        let wind = document.getElementsByClassName('wind');
        let wind_value = document.getElementsByClassName('wind_value');
        date[0].innerHTML = res.weatherDaily.date.slice(5,7)+"/"+res.weatherDaily.date.slice(8,10);
        wea[0].innerHTML = res.weatherHourly[9].text;
        day_img[0].src = "./icon/"+res.weatherHourly[9].icon+".png";
        night_img[0].src = "./icon/"+res.weatherHourly[22].icon+".png";
        wea_night[0].innerHTML = res.weatherHourly[22].text;
        wind[0].innerHTML = res.weatherHourly[22].windDir;
        wind_value[0].innerHTML = res.weatherHourly[22].windScale+"级";
        ary_day[0] = parseInt(res.weatherDaily.tempMax); 
        ary_night[0] = parseInt(res.weatherDaily.tempMin);
        
    }
//    绘图 
 paint();         
// 滑动
var swiper = new Swiper('.swiper-container');
// 发送申请
fetchmethod(sunurl,sunrise_succeed,failed);
fetchmethod(main_weaurl,main_wea_succeed,failed);
fetchmethod(airconditionurl,aircondition_succeed,failed);
fetchmethod(days_weaurl,days_wea_succeed,failed);
fetchmethod(hoururl,hour_succeed,failed);
fetchmethod(lifeurl,life_succeed,failed);
fetchmethod(yesterdayurl,yesterday_succeed,failed);
}
// 默认添加北京数据
getdata("101010100");