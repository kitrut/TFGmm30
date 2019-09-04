package tfg.backend;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;
import tfg.backend.models.Usuario;
import tfg.backend.reposiroties.IUsuarioReposority;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BackEndApplicationTests {

	@Autowired
	private IUsuarioReposority usuarioReposority;

	@Autowired
	private PasswordEncoder encoder;


	@Test
	public void crearUsuario() {
		Usuario us = new Usuario();
		us.setUser("alumno");
		us.setPassword(encoder.encode("password"));
		usuarioReposority.save(us);

	}

    @Test
    public void someTest(){}

}
