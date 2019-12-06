export class Constantes {
    static URL_BACKEND = 'http://localhost:9090/api/';
    static URL_LOGIN = [Constantes.URL_BACKEND + 'authenticate?username=', '&password='];
    static URL_PROFESORES = Constantes.URL_BACKEND + 'private/profesores';
    static URL_ASIGNATURAS = Constantes.URL_BACKEND + 'private/asignaturas';
    static URL_ALUMNOS = Constantes.URL_BACKEND + 'private/alumnos';
    static URL_ANUNCIOS = Constantes.URL_BACKEND + 'private/anuncios';
    static TOKEN_KEY = 'auth-token';
}
