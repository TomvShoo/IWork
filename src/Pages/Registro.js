import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import BotonRegistro from "../components/BotonRegistro";
// import { ToggleButton } from "primereact/togglebutton";
// import Modal from "react-bootstrap/Modal";
// primeicons
import "primeicons/primeicons.css";
// Estilos
import styles from "./Registro.module.css";

export const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm();
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    nombre: "",
    apellido: "",
    nroTelefono: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
    tipoCuenta: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "nroTelefono" && value.length !== 8) {
      setError("nroTelefono", {
        type: "manual",
        message: "El número de teléfono debe tener 8 dígitos",
      });
    } else {
      setValue("nroTelefono", value);
    }

    setformData({ ...formData, [name]: value });
  };

  // useEffect(() => {
  //   axios.get('http://localhost:4000/profesion')
  //     .then(response => {
  //       setProfesiones(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.log('Error al traer los datos', error);
  //     })
  // }, [])

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.contrasena !== formData.confirmarContrasena) {
      setError("confirmarContrasena", {
        type: "manual",
        message: "Las contraseñas no coinciden",
      });
      return;
    }

    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
    );

    if (!strongRegex.test(formData.contrasena)) {
      setError("contrasena", {
        type: "manual",
        message:
          "La contraseña debe contener al menos 8 caracteres, debe tener una mayuscula y un número.",
      });
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/auth/register", {
        nombre: formData.nombre,
        apellido: formData.apellido,
        nroTelefono: formData.nroTelefono,
        correo: formData.correo,
        contrasena: formData.contrasena,
        tipoCuenta: formData.tipoCuenta,
      });

      if (response.data.success) {
        console.log("Registro exitoso :D");
        console.log(response.data);
        // const profesionalId = response.data.profesionalId;
        // if (formData.tipoCuenta === "profesional") {
        //   asignarProfesion(profesionalId);
        // }
        navigate("/");
      } else {
        console.log("Registro fallido");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("Solicitud incorrecta: Verifica los datos ingresados");
        console.log("error en el registro", error);
      } else {
        console.log("error en el registro", error);
      }
    }
  };

  // const asignarProfesion = (profesionalId) => {
  //   if (selectedProfesion && profesionalId) {
  //     const idProfesion = selectedProfesion.id_profesion;
  //     axios
  //       .post(
  //         `http://localhost:4000/profesional/asignarProfesion/${idProfesion}`,
  //         {
  //           profesionalId: profesionalId, // Asegúrate de enviar el profesionalId
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //           },
  //         }
  //       )
  //       .then((response) => {
  //         // Lógica de manejo de respuesta, si es necesario
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error al asignar la profesión:", error);
  //         console.log(error.response.data);
  //       });
  //   } else {
  //     console.error("No se ha seleccionado ninguna profesión.");
  //   }
  // };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.menuBackNav}>
        <Link to="/">
          <Button severity="secondary" text>
            <i
              className="pi pi-arrow-circle-left"
              style={{ fontSize: "1.75rem", color: "rgba(0, 0, 0, 0.5)" }}
            ></i>
          </Button>
        </Link>
        <span style={{ color: "#6C757D" }}>Crear cuenta</span>
      </div>

      <div className={styles.registerData}>
        <form
          className={styles.registerForm}
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit(e);
          }}
        >
          <div className={styles.registerInputs}>
            <div className={styles.registerName}>
              <InputText
                placeholder="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              ></InputText>
              <InputText
                placeholder="Apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
              ></InputText>
            </div>

            <div className={styles.registerNum}>
              <div className={styles.numberPhone}>
                <span className={styles.number}>+56 9</span>
                <InputText
                  className={styles.inputPhone}
                  placeholder="Numero de Telefono"
                  name="nroTelefono"
                  value={formData.nroTelefono}
                  onChange={handleInputChange}
                  maxLength={8}
                ></InputText>
              </div>
              {errors.nroTelefono && <span>{errors.nroTelefono.message}</span>}
            </div>

            <div className={styles.registerEmailPass}>
              <InputText
                placeholder="Correo"
                name="correo"
                value={formData.correo}
                {...register("correo", { required: true })}
                onChange={handleInputChange}
              ></InputText>
              {errors.correo && <span>Correo es requerido</span>}
              <InputText
                placeholder="Contraseña"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleInputChange}
              ></InputText>
              <InputText
                placeholder="Verificar contraseña"
                name="confirmarContrasena"
                value={formData.confirmarContrasena}
                onChange={handleInputChange}
              ></InputText>
              {errors.confirmarContrasena && (
                <span>{errors.confirmarContrasena.message}</span>
              )}
              {errors.contrasena && (
                <span style={{ color: "red" }}>
                  {errors.contrasena.message}
                </span>
              )}
            </div>
          </div>

          <div className={styles.registerSelectContainer}>
            <div className={styles.registerTypeProfile}>
              <p>Selecciona el tipo de cuenta:</p>
              <div>
                <SelectButton
                  options={[
                    { label: "Cliente", value: "cliente" },
                    { label: "Profesional", value: "profesional" },
                  ]}
                  value={formData.tipoCuenta}
                  onChange={(e) =>
                    setformData({ ...formData, tipoCuenta: e.value })
                  }
                />
              </div>
            </div>

            <div className={styles.registerButton}>
              <BotonRegistro />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
