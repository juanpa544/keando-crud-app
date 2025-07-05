import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  isEditMode = false;
  userId: number | null = null;
  pageTitle = 'Crear Usuario';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.userId = +id; // Convertir a número
        this.pageTitle = 'Editar Usuario';
        this.loadUserData();
      }
    });
  }

  initForm(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      state: [true]
    });
  }

  loadUserData(): void {
    if (this.userId) {
      this.userService.getUser(this.userId).subscribe(user => {
        this.userForm.patchValue(user);
      });
    }
  }

  onSubmit(): void {
  if (this.userForm.invalid) {
    // Marcar todos los campos como "tocados" para mostrar los errores de validación
    this.userForm.markAllAsTouched();
    return;
  }

  const formData = this.userForm.value;

  if (this.isEditMode) {
    // Lógica para actualizar
    if (!formData.password) {
      delete formData.password;
    }
    this.userService.updateUser(this.userId!, formData).subscribe({
      next: () => {
        // Éxito: navegar a la lista de usuarios
        this.router.navigate(['/users']);
      },
      error: (err) => {
        // Manejo del error
        if (err.status === 400 && err.error.detail) {
          // El error es un 400 y contiene un 'detail' (como el de email duplicado)
          alert(`Error al actualizar: ${err.error.detail}`);
        } else {
          // Otro tipo de error
          alert('Ocurrió un error inesperado al actualizar el usuario.');
        }
        console.error('Error en la actualización:', err);
      }
    });
  } else {
    // Lógica para crear
    if (!formData.password) {
      alert('La contraseña es requerida para crear un usuario.');
      return;
    }
    this.userService.createUser(formData).subscribe({
      next: () => {
        // Éxito: navegar a la lista de usuarios
        this.router.navigate(['/users']);
      },
      error: (err) => {
        // Manejo del error
        if (err.status === 400 && err.error.detail) {
          // El error es un 400 y contiene un 'detail' (como el de email duplicado)
          alert(`Error al crear: ${err.error.detail}`);
        } else {
          // Otro tipo de error
          alert('Ocurrió un error inesperado al crear el usuario.');
        }
        console.error('Error en la creación:', err);
      }
    });
  }
}
}