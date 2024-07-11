import axios from "axios";

const API_KEY = "AIzaSyAMpHCzxXvLv3wrULILmW154RGZCl9k4wU";
async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  //로그인할 때는 게시 요청이 필요함.
  console.log(response.data);
}

export async function createUser(email, password) {
  await authenticate("signup", email, password);
}

//firebase의 이메일 등록 toolkit에 post하는데, 위의 주소로 API 키만 나의 주소로 바꾸어서, 링크를 만들고,
//이메일과 password를 보내며, 토큰을 받겠다고 선언한다.
//비동기 함수로 바꾸어서 이 함수가 완료되면 항상 promise를 돌려준다.
//이것을 사용해서 기능 장애 발생하는 구성요소에서 로딩 오버레이가 발생하도록한다.

export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
