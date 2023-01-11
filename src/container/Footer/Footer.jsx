import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    handleSubmitInfo(data);
  };

  const handleSubmitInfo = (e) => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: e.username,
      email: e.email,
      phone: e.phone,
      message: e.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">¿Tienes dudas? Charlemos 😄</h2>
      <div className="app__footer-div">
        <div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={images.email} alt="email" />
            <a href="mailto:Style.damn.falling@gmail.com" className="p-text">
              Style.damn.falling <span>@gmail.com</span>
            </a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            <a href="tel:+51 997-503-665" className="p-text">
              <span>+51</span> 997-503-665
            </a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <form
            className="app__footer-form app__flex"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Nombres"
                name="username"
                {...register("username", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
            </label>
            {errors.username?.type === "required" && (
              <p className="error-footer">* El campo de nombre es requerido</p>
            )}
            {errors.username?.type === "maxLength" && (
              <p className="error-footer">
                * El campo de nombre debe tener menos de 20 caracteres
              </p>
            )}
            {errors.username?.type === "pattern" && (
              <p className="error-footer">* El campo solo debe tener letras</p>
            )}
            <label className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Correo@gmail.com"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </label>
            {errors.email?.type === "required" && (
              <p className="error-footer">* El campo de email es requerido</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="error-footer">* El formato de del email es incorrecto</p>
            )}
            <label className="app__flex">
              <input
                className="p-text"
                type="tel"
                placeholder="xxx-xxx-xxx"
                name="phone"
                {...register("phone", {
                  required: true,
                  minLength: 9,
                  maxLength: 9,
                })}
              />
            </label>
            {errors.phone?.type === "required" && (
              <p className="error-footer">* El campo de celular es requerido</p>
            )}
            {errors.phone?.type === "minLength" && (
              <p className="error-footer">* El campo de celular necesita 9 digitos</p>
            )}
            {errors.phone?.type === "maxLength" && (
              <p className="error-footer">* El campo de celular solo necesita 9 digitos</p>
            )}
            <label>
              <textarea
                className="p-text"
                placeholder="Mensaje"
                name="message"
                {...register("message")}
              />
            </label>
            <input
              type="submit"
              value={!loading ? "Enviar" : "Enviando..."}
              className="input-text"
            />
          </form>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Contacto",
  "app__whitebg"
);
