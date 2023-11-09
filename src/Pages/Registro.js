import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BotonRegistro from "../components/BotonRegistro";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";
import { useForm } from "react-hook-form";
import axios from "axios";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import styles from "./Registro.module.css";

import { Message } from "primereact/message";

export const Registro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.contrasena !== formData.confirmarContrasena) {
      setError("confirmarContrasena", {
        type: "manual",
        message: "Las contraseñas no coinciden.",
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
          "La contraseña debe contener al menos 8 carácteres, una mayúscula y un número.",
      });
      return;
    }
    try {
      // dejar asi los links!!!
      const response = await axios.post(
        "https://api-iwork.onrender.com/auth/register",
        {
          nombre: formData.nombre,
          apellido: formData.apellido,
          nroTelefono: formData.nroTelefono,
          correo: formData.correo,
          contrasena: formData.contrasena,
          tipoCuenta: formData.tipoCuenta,
        }
      );
      if (response.data.success) {
        console.log("Registro exitoso :D");
        console.log(response.data);
        navigate("/");
      } else {
        console.log("Registro fallido");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("Solicitud incorrecta: Verifica los datos ingresados");
      } else {
        console.log("error en el registro", error);
      }
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.navMenu}>
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
              <div className={styles.registerContrasena}>
                <InputText
                  className={styles.contrasena}
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  name="contrasena"
                  value={formData.contrasena}
                  onChange={handleInputChange}
                ></InputText>
                <Button
                  severity="secondary"
                  onClick={() => setShowPassword(!showPassword)}
                  outlined
                >
                  <span
                    className={showPassword ? "pi pi-eye-slash" : "pi pi-eye"}
                  ></span>
                </Button>
              </div>
              <InputText
                placeholder="Verificar contraseña"
                name="confirmarContrasena"
                value={formData.confirmarContrasena}
                onChange={handleInputChange}
              ></InputText>
              {errors.confirmarContrasena && (
                <span>{errors.confirmarContrasena.message}</span>
              )}

              <div className={styles.errorContainer}>
                {errors.contrasena && (
                  <Message
                    className={styles.error}
                    severity="error"
                    text={errors.contrasena.message}
                  ></Message>
                )}
              </div>
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
