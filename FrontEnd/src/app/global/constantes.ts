export class Constantes {
    static URL_BACKEND = "http://localhost:9090/api/";
    static URL_LOGIN = [Constantes.URL_BACKEND+"authenticate?username=","&password="];
    static TOKEN_KEY = 'auth-token';
}
