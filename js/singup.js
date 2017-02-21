sendId();

function sendId() {
    if (!document.f.name.value) {
        alert("아이디를 입력하지 않았습니다.");
        document.f.name.focus();
        return;
    }
    for (i = 0; i < document.f.name.value.length; i++) {
        ch = document.f.name.value.charAt(i)
        if (!(ch >= '0' && ch <= '9') && !(ch >= 'a' && ch <= 'z')) {
            alert("아이디는 소문자, 숫자만 입력가능합니다.");
            document.f.name.focus();
            document.f.name.select();
            return;
        }
    }
    if (document.f.name.value.indexOf(" ") >= 0) {
        alert("아이디에 공백을 사용할 수 없습니다.");
        document.f.name.focus();
        document.f.name.select();
        return;
    }
    if (document.f.name.value.length < 6 || document.f.name.value.length > 12) {
        alert("아이디를 6~12자까지 입력해주세요.");
        document.f.name.focus();
        document.f.name.select();
        return;
    }
    if (!document.f.nickname.value) {
        alert("별명을 확인하세요.");
        document.f.nickname.focus();
        return;
    }

    alert("확인되었습니다.");
}

function sendIt() {
    if (!document.f.number.value) {
        alert("전화번호를 입력하지 않았습니다.")
        document.f.number.focus();
        return false;
    }
    if (isNaN(document.f.number.value)) {
        alert("숫자만 입력하세요.")
        document.f.number.focus();
        return false;
    }
    if (!document.f.pw1.value) {
        alert("비밀번호를 입력하지 않았습니다.")
        document.f.pw1.focus();
        return false;
    }
    if (document.f.pw1.value.length < 8 || document.f.pw1.value.length > 20) {
        alert("비밀번호를 8~20자까지 입력해주세요.")
        document.f.pw1.focus();
        document.f.pw1.select();
        return false;
    }
    if (document.f.pw1.value != document.f.pw2.value) {
        alert("비밀번호와 비밀번호 확인이 같지 않습니다.")
        document.f.pw1.value = "";
        document.f.pw2.value = "";
        document.f.pw1.focus();
        return false;
    }
    /*if (document.f.sign-up_gender[0].checked==false && document.f.sign-up_gender[1]==false) {
        alert("성별을 체크해 주세요");
        return false;
    }*/
    if (!document.f.birth.value) {
        alert("생년월일을 입력하세요.")
        document.f.birth.focus();
        return false;
    }
    if (isNaN(document.f.birth.value)) {
        alert("숫자만 입력하세요.")
        document.f.birth.focus();
        return false;
    }
    if (document.f.birth.value.length < 8 || document.f.birth.value.length > 8) {
        alert("생년월일을 다시 확인하세요.")
        document.f.birth.focus();
        return false;
    }
    var count = f.checkbox.length;
    for (var i = 0; i < count; i++) {
        if (f.checkbox[i].checked == false) {
            alert("이용약관에 동의해주세요.")
        }
    }
    alert("Hello");
    document.f.submit()
}

function sendEmail() {
    if (!document.f.email.value) {
        alert("E-Mail을 입력하지 않았습니다.")
        return false;
    }
    var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if (exptext.test(document.f.email.value) == false) {
        alert("E-Mail을 다시 확인하세요.");
        document.f.email.focus();
        return false;
    }
    alert("E-Mail을 확인하였습니다.")
}
/*----------------------------------------로그인 정보기억------------------------------------*/
function setsave(name, value, expiredays) {
alert("cookie Save!!");
var today = new Date();
today.setDate(today.getDate() + expiredays);
document.cookie = name + "=" + escape(value) + "; path=/; expires="+ today.toGMTString() + ";";
alert("cookie Save Complete!!");
}

// 버튼 클릭시 실행 function
function login(){
saveLogin(document.getElementById("id").value);
//} else {
//saveLogin("");
//}
}

// id를 받아와 쿠키에 저장할지 쿠키에서 삭제할지 결정.
function saveLogin(id) {
if (id != "") {
// userid 쿠키에 id 값을 7일간 저장
setsave("id", id, 7);
} else {
// userid 쿠키 삭제
setsave("id", id, -1);
}
}

// 화면 로드시 아이디
function getLogin() {

// userid 쿠키에서 id 값을 가져온다.
var cook = document.cookie + ";";
var idx = cook.indexOf("id", 0);
var val = "";

if (idx != -1) {
cook = cook.substring(idx, cook.length);
begin = cook.indexOf("=", 0) + 1;
end = cook.indexOf(";", begin);
val = unescape(cook.substring(begin, end));
}

// 가져온 쿠키값이 있으면
if (val != "") {
document.getElementById("userId").value = val;
document.getElementById("checkbox").checked = true;
}
}
/*----------------------------------------로그인 정보기억------------------------------------*/
