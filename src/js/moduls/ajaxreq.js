/**
 * Created by Anatoliy Tupkalo on 2/3/2018.
 */
module.exports = function(){
    var formBtn = document.querySelector('#form-btn');
    var errorField = document.querySelector('#error');
    var respond = document.querySelector('.get-respond');
    var formDis = document.querySelector('.slider-wrap__inner');
    var checkBox = document.querySelector('#checkbox');
    var checked = checkBox.checked;


    checkBox.addEventListener('change', function () {
        var chk = event.target;

        if(chk.checked == true){
            formBtn.removeAttribute('disabled');
            formBtn.classList.add('enable');
        }else{}
    });

    formBtn.onclick = function(e){
        e.preventDefault();
        var inpName = document.querySelector('input[name=name]').value;
        var inpEmail = document.querySelector('input[name=email]').value;
        var inpPhone = document.querySelector('input[name=phone]').value;
        var params = 'name=' + inpName + '&' + 'email=' + inpEmail + '&' + 'phone=' + inpPhone;

        ajaxPost(params);
    };

    function ajaxPost(params){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if(request.readyState == 4 && request.status == 200){
                if(request.responseText == '1'){
                    respond.style.display = 'block';
                    formDis.style.display = 'none';
                }else{errorField.innerHTML = request.responseText;}
            }
        }
        request.open('POST', 'form.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send(params);
    };

};