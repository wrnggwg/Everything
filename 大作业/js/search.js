        $("#search_result").fadeOut();                                 
        $("#search_hide").hide();                                    //搜索页面隐藏
        let search_hide = document.getElementById('search_hide');
        let locationdown = document.getElementById('location');
        let Delete = document.getElementById('delete');

        locationdown.onclick = function(){                          //当天气页面定位模块被点击，切换页面
          $("#search_hide").fadeIn();
          $("#main_hide").fadeOut();
        }
        let text_input = document.getElementById('text_input');
        let cancle = document.getElementById('cancle');
        let Ary = [];                                                 //历史记录数组
        text_input.onclick = function(){                                //搜索框被点击下弹框
            $("#search_result").fadeIn();
            $("#his_hot").fadeOut();
        }
        cancle.onclick = function(){                                    //取消按钮，回到天气页面
            $("#main_hide").fadeIn();
            $("#search_hide").hide();
        }
        Delete.onclick = function(){                                    //删除历史记录
          Ary = [];
          $("#his").html("");
        }
        function mousedown(obj){                                        //点击下弹框中的元素触发
            let flag = 0;
                for(let i=0;i<Ary.length;i++){
                if(Ary[i]==$(obj).text().slice(3,5)){                   //判断是否重复
                    flag = 1;
                }
                }
            if(flag==0){
                $("#his").prepend("<li>"+$(obj).text().slice(3,5)+"</li>");
                
                Ary.push($(obj).text().slice(3,5));                       //不重复压入Ary作为第一个子元素
            }
            let url = "https://geoapi.qweather.com/v2/city/lookup?location="+$(obj).text().slice(3,5)+"&key=1baa7ac8ec084297a0dbecf935db53c3";
            determine_succeed = function(res){
              let hour_degree_import = document.getElementsByClassName('hour_degree_import'); 
              let hour_time_import = document.getElementsByClassName('hour_time_import');
              let hour_img_import = document.getElementsByClassName('hour_img_import');
              for(let i=1;i>=0;i--){
                hour_degree_import[i].classList.replace('hour_degree_import','hour_degree');
                hour_time_import[i].classList.replace('hour_time_import','hour_time');
                hour_img_import[i].classList.replace('hour_degree_import','hour_img');
              }
              getdata(res.location[0].id);                              //更新天气页面数据
            }
            fetchmethod(url,determine_succeed,failed);
            $("#search_hide").hide();                                   //转至天气页面
            $("#main_hide").fadeIn();
            let location = document.getElementById('location');
            location.innerHTML = $(obj).text().slice(3,5);
        }
        async function fetchmethod(url,succeed,failed){
            const res = await fetch(url);
            if((res.status >= 200 && res.status < 300)||res.status == 304){
                const json = await res.json();
                console.log(json);
                succeed(json);
            }
            else failed(); 
        }
        let url = "";
        succeed = function(res){
            let search_result = document.getElementById('search_result');
            search_result.innerHTML = "";
            for(let i=0;i<res.location.length;i++){
              $("#search_result").append('<li onclick="mousedown(this)">' + res.location[i].adm1.slice(0,2) +" "+ res.location[i].name + '</li>');
            }
            $("#search_result").slideDown();
        }
        failed = function(res){

        }
        // 当输入发生改变
        function txtchange(){
            let text = document.getElementById('text_input');
            // 修改url发送ajax请求
            url = "https://geoapi.qweather.com/v2/city/lookup?location="+text.value+"&key=1baa7ac8ec084297a0dbecf935db53c3";
            fetchmethod(url,succeed,failed);
        }
        // 当输入框失去焦点
        function lost(){
            // 切出历史记录和热门城市
                $("#search_result").fadeOut();
                $("#his_hot").fadeIn();
        }
        // 当热门城市被点击被点击 内容基本与下弹框一致
        function hot_down(obj){
            console.log($(obj).text());
            let flag = 0;
                for(let i=0;i<Ary.length;i++){
                if(Ary[i]==$(obj).text()){
                    flag = 1;
                }
                }
            if(flag==0){
                $("#his").prepend('<li>'+$(obj).text()+'</li>');
                Ary.push($(obj).text());
            }
            let url = "https://geoapi.qweather.com/v2/city/lookup?location="+$(obj).text()+"&key=1baa7ac8ec084297a0dbecf935db53c3";
            determine_succeed = function(res){
              let hour_degree_import = document.getElementsByClassName('hour_degree_import'); 
              let hour_time_import = document.getElementsByClassName('hour_time_import');
              let hour_img_import = document.getElementsByClassName('hour_img_import');
              for(let i=1;i>=0;i--){
                hour_degree_import[i].classList.replace('hour_degree_import','hour_degree');
                hour_time_import[i].classList.replace('hour_time_import','hour_time');
                hour_img_import[i].classList.replace('hour_img_import','hour_img');
              }
              getdata(res.location[0].id);
            }
            fetchmethod(url,determine_succeed,failed);
            $("#search_hide").hide();
            $("#main_hide").fadeIn();
            let location = document.getElementById('location');
            location.innerHTML = "<img src='./images/location1.png'>"+$(obj).text();
        }