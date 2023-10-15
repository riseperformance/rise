import styles from "./Reviews.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import joaoGabrielMeloImage from "/reviews/joao_gabriel_melo.png";
import rafaelTrombetaImage from "/reviews/rafael_trombeta.png";
import { Button } from "@mui/material";

export const Reviews = () => {
  const reviews = [
    {
      image: joaoGabrielMeloImage,
      name: "João Gabriel Melo",
      review:
        "Em relação à RISE, só tenho a agradecer a todo trabalho feito pelo profissional Dr. André Scardovelli, pois está sendo de grande importância para minha evolução, tanto como atleta, como pessoa, um profissional extremamente qualificado e um excelente atendimento.",
    },
    {
      image: rafaelTrombetaImage,
      name: "Rafael Trombeta",
      review:
        "Parabéns pelo trabalho que vocês estão realizando.Trabalho feito com muito profissionalismo e competência. Os aparelhos do apoio diagnóstico que não se encontram pela nossa região.  Estou muito feliz com os resultados. Só tenho a agradecer!",
    },
    {
      image: rafaelTrombetaImage,
      name: "Amigo do Rafael Trombeta",
      review:
        "Parabéns pelo trabalho que vocês estão realizando.Trabalho feito com muito profissionalismo e competência. Os aparelhos do apoio diagnóstico que não se encontram pela nossa região.  Estou muito feliz com os resultados. Só tenho a agradecer!",
    },
  ];

  return (
    <section className={styles.reviewsSection}>
      <h2>O que nossos pacientes dizem:</h2>
      <Swiper
        className={styles.swiperContainer}
        spaceBetween={16}
        slidesPerView={1.1}
        breakpoints={{
          1164: {
            slidesPerView: 2.1,
            spaceBetween: 48,
          },
          620: {
            slidesPerView: 1.15,
            spaceBetween: 24,
          }
        }}
        data-aos="fade-left"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className={styles.reviewContainer}>
              <img src={review.image} alt={review.name} draggable={false} />
              <div className={styles.reviewCard}>
                <h3>{review.name}</h3>
                <span>{review.review}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        variant="contained"
        color="purple"
        className={styles.scheduleAppointmentButton}
      >
        Agende sua consulta já!
      </Button>

      <div className={styles.divider} />
    </section>
  );
};
