'use client'

import React, { useMemo } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css"
import usePreventBodyScroll from "../hooks/usePreventBodyScroll";
import GoogleReview from "./GoogleReview";
import getDictionary from "@/lib/dictionaries";



export function LeftArrow() {
  const { scrollToItem, scrollPrev, getItemElementById, items, useIsVisible } =
    React.useContext(VisibilityContext);
  const isFirstItemVisible = useIsVisible("first", true);

  return (
    <Arrow
      disabled={false}
      onClick={() => {
        if (isFirstItemVisible) {
          scrollToItem(getItemElementById(items.toArr().slice(-1)?.[0]?.[0])!);
        } else {
          scrollPrev();
        }
      }}
    >
      <div className="rounded-full w-8 h-8 flex justify-center items-center bg-white shadow-lg mr-1">
        &lsaquo;
      </div>
    </Arrow>
  );
}

export function RightArrow() {
  const { getItemElementById, items, scrollNext, scrollToItem, useIsVisible } =
    React.useContext(VisibilityContext);
  const isLastItemVisible = useIsVisible("last", false);

  return (
    <Arrow
      disabled={false}
      onClick={() => {
        if (isLastItemVisible) {
          scrollToItem(getItemElementById(items.toArr()?.[0]?.[0])!);
        } else {
          scrollNext();
        }
      }}
    >
      <div className="rounded-full w-8 h-8 flex justify-center items-center bg-white shadow-lg ml-1">
        &rsaquo;
      </div>
    </Arrow>
  );
}

function Arrow({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}


type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const generateSlideItems = (lang: string) => {
  const dictionary = getDictionary(lang);
  const slideItems = [
    {
      name: 'Nolan Preble',
      timeAgo: dictionary.twoMonthsAgo,
      rating: 5,
      review: "Fantastic surf school with great people and a strong community. If you’re a foreigner and go take a lesson in the morning on Saturday or Sunday, plenty of people there will be able to speak English with you. Can’t recommend this place enough!",
      link: "https://share.google/Zhd5GJuTeq2omCIOS",
      id: "1"
    },
    {
      name: 'Gabrielle Mantovani',
      timeAgo: dictionary.twoWeeksAgo,
      rating: 5,
      review: "Foi com eles a minha primeira experiência com o surf e foi incrível. Amei cada aula, super recomendo, e um agradecimento especial os instrutores Rafa e Elvis. Saí de Natal conseguindo pegar as ondas e evoluindo de prancha. Não vejo a hora de participar de uma surf trip com eles",
      link: "https://share.google/EMfMMv3FPrflVSDJd",
      id: "2"
    },
    {
      name: 'Cayleigh',
      timeAgo: dictionary.oneYearAgo,
      rating: 5,
      review: "I highly recommend this surf school! They were able to accommodate me not knowing any Portuguese and teach me how to surf and catch waves in my very first lesson. Everyone is super encouraging and the school teaches a great “get up” method that is easy to remember. They also have a photographer on staff so you can re-live your surfing moments :)",
      link: "https://share.google/oAGQpKap1xzfvXYV7",
      id: "3"
    },
    {
      name: 'Karol Kava',
      timeAgo: dictionary.oneYearAgo,
      rating: 5,
      review: "Instrutores muito queridos, várias pranchas disponíveis para aulas e fotos surfando! Vale a pena tanto para quem já surfa quanto para quem está começando!!",
      link: "https://share.google/FQ1xvuWoMQvMDo2J0",
      id: "4"
    },
    {
      name: 'Kevin Bruno',
      timeAgo: dictionary.twoYearsAgo,
      rating: 5,
      review: "Escolinha massa! Passei 1 semana em natal com minha esposa e realizamos 16 aulinhas à um preço super acessível, até muito abaixo da tabela. Somos de Floripa e surfamos à 9 meses e fomos com intuito de realizar correção de vícios e ter uma maior performance. Os instrutores foram super técnicos e atenciosos às nossas necessidades. Ao retornar à Florianópolis, a evolução foi nítida e gostaria de agradecer à toda equipe Natal Free surf!",
      link: "https://share.google/5p9675K74zM4M4JaB",
      id: "5"
    },
    {
      name: 'J T',
      timeAgo: dictionary.twoYearsAgo,
      rating: 5,
      review: "Best surf school in brazil. The guys that work there are absolute legends. Friendly and will help improve your surfing.",
      link: "https://share.google/EqlDvo2yWeUGi2mtc",
      id: "6"
    },
    {
      name: 'Marilia Maia',
      timeAgo: dictionary.threeYearsAgo,
      rating: 5,
      review: "Escolinha de surf com profissionais maravilhosos. 🥳🥳 Primeira aula e já fiquei em pé na prancha.",
      link: "https://share.google/UilhRawH10kA6yU59",
      id: "7"
    },
    {
      name: 'FABIO SANTOS',
      timeAgo: dictionary.threeYearsAgo,
      rating: 5,
      review: "Top de mais essa escolinha. A galera é muito atenciosa e simpática, professores capacitados, minha evolução tem sido muito satisfatória. Só tenho a agradecer a galera da Natal Free Surf.",
      link: "https://share.google/wDj8yf0jsLrW6f4q5",
      id: "8"
    },
    {
      name: 'Nicole Luz',
      timeAgo: dictionary.oneMonthAgo,
      rating: 5,
      review: "Equipe e estrutura incrível, estou na terceira aula e já estou apaixonada pelo esporte e pelo suporte q estou tendo 😍",
      link: "https://share.google/X3AkcWeRpImIpvA3h",
      id: "9"
    },
    {
      name: 'Daniel Alves',
      timeAgo: dictionary.oneMonthAgo,
      rating: 5,
      review: "Experiência maneira, os instrutores sabem demais e corrigem os erros para conseguir pegar uma onda. O arrependimento é de não ter feito a aula antes, recomendo demais.",
      link: "https://share.google/FnmLJqYif0zgNAuM3",
      id: "10"
    },
    {
      name: 'Nathália Magliano',
      timeAgo: dictionary.oneMonthAgo,
      rating: 5,
      review: "Equipe muito atenciosa, transmitem confiança e total apoio nas aulas. Recomendo!",
      link: "https://share.google/rMZKtesP38CzvxZFJ",
      id: "11"
    }
  ]
  return slideItems
}

function ReviewsSlider({ lang }: { lang: string }) {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const slideItems = useMemo(() => generateSlideItems(lang), [lang])

  return (
    <div className="example">
      <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          onWheel={onWheel}
        >
          {slideItems.map((item) => (
            <GoogleReview
              name={item.name}
              timeAgo={item.timeAgo}
              rating={item.rating}
              review={item.review}
              link={item.link}
              key={item.id}
            />
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
}
export default ReviewsSlider;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
