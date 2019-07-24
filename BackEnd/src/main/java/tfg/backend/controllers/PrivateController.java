package tfg.backend.controllers;

import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/private")
public class PrivateController {
	
	@GetMapping
	public String getMessage() {
		return "Hello from private API";
	}
	
	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String getMessageAdmin() {
		return "Hello from private API admin";
	}
	
	@GetMapping("/profesor")
	public String getMessageProfesor() {
		return "Hello from private API profesor";
	}	
	
	@GetMapping("/alumno")
	public String getMessageAlumno() {
		return "Hello from private API alumno";
	}
}