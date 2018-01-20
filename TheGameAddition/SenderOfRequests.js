
'use strict';
class SenderOfRequests{
    var data;

    var URLS = new URLSettings();

    var employeeJSON = new EmployeeJSON();

    getGames(){
        requests(URLS.base+URLS.getGames,null,"GET")
    }

    delete(data){
        requests(URLS.base+URLS.delete,data,"POST")
    }

    getById(data){
        requests(URLS.base+URLS.getById,data,"POST")
    }

    saveGame(data){
        requests(URLS.base+URLS.saveGame,data,"POST")
    }

    searchGame(data){
        requests(URLS.base+URLS.searchGame,data,"POST")
    }

    requests(url,data,type) {
        var newData = employeeJSON.transform(data);
        $.ajax({
            type: type,
            url: url,
            dataType: 'JSON',
            data: newData,
            //beforesend: $('.content').html('Загрузка'),
            success: function(data, code){
                if (code==200){
                    alert(data); // запрос успешно прошел
                }else{
                    alert(code); // возникла ошибка, возвращаем код ошибки
                }

                setData(data); // данные которые вернул сервер!

            },

            error:  function(xhr, str){
                alert('Критическая ошибка');
            }
        });

    }
    setData(data) {
        this.data = data
    }
}