package tfg.backend;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;
import tfg.backend.repositories.IUserRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BackEndApplicationTests {

    @Autowired
    private IUserRepository usuarioReposority;

    @Autowired
    private PasswordEncoder encoder;


    @Test
    public void someTest() {
    }

}
